// ==========================================================================
//                             GLOBAL VARIABLES
// ==========================================================================

const questionAmounts = [
    0, 1000, 2000, 3000, 5000, 7500, 10000, 12500, 15000, 25000, 50000, 100000, 250000, 500000, 1000000
];

let currentQuestionIndex = 0;
let currentPalier = 1;
let score = 0;
let jokersUsed = { publicVote: false, fiftyFifty: false, passe: false };
let canAnswer = true; // Empêcher de répondre plusieurs fois pendant le délai

// ==========================================================================
//                            AUDIO MANAGEMENT
// ==========================================================================

// Récupération des éléments audio
const themeSong = document.getElementById('theme-song');
const suspenseSound = document.getElementById('suspense-sound');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const startJingle = document.getElementById('start-jingle');

// Variable pour indiquer si le thème a déjà été joué
let themeSongPlayed = false;
let suspenseSoundPlaying = false; // Nouvelle variable pour suivre l'état de la musique de suspense

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(error => {
            console.error("Erreur lecture audio:", error.message, audioElement.id);
        });
        if (audioElement === suspenseSound) {
            suspenseSoundPlaying = true;
        }
    }
}

function playTheme() {
}

function stopTheme() {
    if (themeSong && !themeSong.paused) {
        themeSong.pause();
        themeSong.currentTime = 0;
    }
}

function stopSuspense() {
    if (suspenseSound && !suspenseSound.paused) {
        suspenseSound.pause();
        suspenseSound.currentTime = 0;
        suspenseSoundPlaying = false;
    } else if (suspenseSound) {
        suspenseSoundPlaying = false;
    }
}

function playThemeOnce() {
    if (themeSong && themeSong.paused && !themeSongPlayed) {
        themeSong.loop = false;
        themeSong.play().catch(error => {
            console.error("Erreur lecture musique fond (interaction):", error);
        });
        themeSongPlayed = true;
        document.removeEventListener('click', playThemeOnce);
        document.removeEventListener('touchstart', playThemeOnce);
    }
}

// ==========================================================================
//                          PAGE SETTINGS
// ==========================================================================

// Récupération des éléments de la page d'options
const optionsButton = document.getElementById('options-button');
const optionsMenu = document.getElementById('options-menu');
const backToMenuButton = document.getElementById('back-to-menu');
const gameVolumeSlider = document.getElementById('game-volume');
const gameVolumeValueSpan = document.getElementById('game-volume-value');
const menu = document.getElementById('menu');
const palierPage = document.getElementById('palier-page');
const palierImageClic = document.getElementById('palier-image-clic');
const game = document.getElementById('game');

// Fonction pour afficher la page d'options
function showOptions() {
    menu.classList.add('hidden');
    optionsMenu.classList.remove('hidden');
}

// Fonction pour retourner au menu principal
function hideOptions() {
    optionsMenu.classList.add('hidden');
    menu.classList.remove('hidden');
}

// Fonction pour mettre à jour le volume du jeu (renommé pour plus de clarté)
function updateMusicVolume() {
    if (themeSong) {
        themeSong.volume = parseFloat(gameVolumeSlider.value);
        gameVolumeValueSpan.textContent = `${Math.round(themeSong.volume * 100)}%`;
        localStorage.setItem('gameVolume', themeSong.volume);
    }
}

// Écouteurs d'événements pour la page d'options
if (optionsButton) {
    optionsButton.addEventListener('click', showOptions);
}

if (backToMenuButton) {
    backToMenuButton.addEventListener('click', hideOptions);
}

if (gameVolumeSlider) {
    gameVolumeSlider.addEventListener('input', updateMusicVolume);
}

// Charger le volume de la musique sauvegardé au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedGameVolume = localStorage.getItem('gameVolume');

    if (savedGameVolume !== null && themeSong) {
        themeSong.volume = parseFloat(savedGameVolume);
        gameVolumeSlider.value = savedGameVolume;
        gameVolumeValueSpan.textContent = `${Math.round(themeSong.volume * 100)}%`;
    }

    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', showPalierPage); // Utiliser la nouvelle fonction
    }

    createStars('star-container-menu', 50);
    createStars('star-container-game', 80);

    if (themeSong) {
        themeSong.volume = 0.2;
        playTheme();
    }
});

// ==========================================================================
//                          STAR BACKGROUND FUNCTIONS
// ==========================================================================

function createStars(containerId, numStars) {
    const starContainer = document.getElementById(containerId);
    if (!starContainer) return;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        Object.assign(star.style, {
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 1}s`
        });
        starContainer.appendChild(star);
    }
}

// ==========================================================================
//                            GAME INITIALIZATION
// ==========================================================================

function showPalierPage() {
    menu.classList.add("hidden");
    palierPage.classList.remove("hidden"); // Afficher la page des paliers
    game.classList.add("hidden");
    document.getElementById("endgame").classList.add("hidden");

    stopTheme();
    stopSuspense();

    // Jouer le jingle de démarrage
    if (startJingle) {
        playSound(startJingle);
    }

    // Passer au jeu au clic sur l'image
    if (palierImageClic) {
        palierImageClic.addEventListener('click', startGame); // Lancer le jeu au clic
    }
}

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    currentPalier = 1;
    jokersUsed = { publicVote: false, fiftyFifty: false, passe: false };
    canAnswer = true;
    document.body.style.overflow = 'hidden'; // Empêcher le défilement

    palierPage.classList.add("hidden"); // Cacher la page des paliers
    game.classList.remove("hidden");
    document.getElementById("endgame").classList.add("hidden");

    const elements = {
        voteButton: document.getElementById("joker-vote"),
        fiftyButton: document.getElementById("joker-50"),
        passButton: document.getElementById("joker-passer"),
        quitButton: document.getElementById("quit-button-top"), // Cibler l'ID correct
        restartButton: document.getElementById("restart-button"),
        homeButton: document.getElementById("home-button")
    };

    // Réinitialiser l'état visuel et interactif des jokers
    const jokerButtons = document.querySelectorAll(".joker-button");
        jokerButtons.forEach(button => {
            button.dataset.used = "false";
            button.classList.remove("joker-used", "disabled"); // Retirer la classe de grisement et de désactivation
            button.disabled = false; // Réactiver le bouton

            const buttonId = button.id;
            let imageName;
            if (buttonId === "joker-vote") imageName = "vote.png";
            else if (buttonId === "joker-50") imageName = "50.png";
            else if (buttonId === "joker-passer") imageName = "next.png";

            if (imageName) {
                const imgElement = button.querySelector("img");
                if (imgElement) {
                    imgElement.src = `image/${imageName}`; // Remettre l'image d'origine
                }
            }
        });

    if (elements.voteButton) elements.voteButton.addEventListener("click", usePublicVote);
    if (elements.fiftyButton) elements.fiftyButton.addEventListener("click", useFiftyFifty);
    if (elements.passButton) elements.passButton.addEventListener("click", usePasse);
    if (elements.quitButton) elements.quitButton.addEventListener("click", quitGame); // Utiliser l'élément correct
    if (elements.restartButton) elements.restartButton.addEventListener("click", () => { startGame(); document.getElementById("endgame").classList.add("hidden"); });
    if (elements.homeButton) elements.homeButton.addEventListener("click", () => { window.location.href = "index.html"; });

    loadQuestion();
    updateJokers();

    if (startJingle && !suspenseSoundPlaying) {
        startJingle.addEventListener('ended', () => {
            playSound(suspenseSound);
            startJingle.removeEventListener('ended', arguments.callee);
        });
    } else if (!suspenseSoundPlaying) {
        playSound(suspenseSound);
    }
}

// ==========================================================================
//                            QUESTION MANAGEMENT
// ==========================================================================

function loadQuestion() {
    const level = currentQuestionIndex < 5 ? 'easy' : (currentQuestionIndex < 10 ? 'medium' : 'hard');
    const questionsLevel = questions[level];
    const randomIndex = Math.floor(Math.random() * questionsLevel.length);
    const question = questionsLevel[randomIndex];

    document.getElementById("question").textContent = question.question;
    document.getElementById("palier").textContent = `Palier ${currentPalier}`;
    document.getElementById("question-info").textContent = `Question ${currentQuestionIndex + 1}/15 - Montant: ${questionAmounts[currentQuestionIndex]} €`;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        if (answer === question.correct) button.classList.add("correct");
        button.onclick = function() {
            if (canAnswer) {
                canAnswer = false;
                handleAnswerSelection(this, answer, question.correct);
            }
        };
        answersDiv.appendChild(button);
    });

    playSound(suspenseSound);
    updateJokers();
}

function handleAnswerSelection(button, selectedAnswer, correctAnswer) {
    button.classList.add("selected"); // Ajoute une classe pour le style orange temporaire

    setTimeout(() => {
        button.classList.remove("selected"); // Retire la classe orange
        checkAnswer(button, selectedAnswer, correctAnswer);
    }, 1000); // Délai de 1 seconde (ajuste si nécessaire)
}

function checkAnswer(button, selectedAnswer, correctAnswer) {
    const allButtons = document.querySelectorAll("#answers button");
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.toggle("correct", btn.textContent === correctAnswer);
        btn.classList.toggle("incorrect", btn.textContent !== correctAnswer);
    });
    button.style.backgroundColor = selectedAnswer === correctAnswer ? 'green' : 'red';

    setTimeout(() => {
        if (selectedAnswer === correctAnswer) {
            playSound(correctSound);
            setTimeout(() => { // Léger délai après le son correct
                score += questionAmounts[currentQuestionIndex];
                if (currentQuestionIndex === 4) currentPalier = 2;
                else if (currentQuestionIndex === 9) currentPalier = 3;
                if (currentQuestionIndex < 14) {
                    currentQuestionIndex++;
                    canAnswer = true; // Permettre de répondre à la prochaine question
                    loadQuestion();
                } else {
                    endGame(true);
                }
            }, 1500); // Délai de 1.5 seconde (ajuste si nécessaire)
        } else {
            playSound(incorrectSound);
            setTimeout(() => { // Léger délai après le son incorrect
                endGame(false);
            }, 1500); // Délai de 1.5 seconde (ajuste si nécessaire)
        }
    }, 1000); // Délai après la sélection de la réponse
}

// ==========================================================================
//                              JOKER FUNCTIONS
// ==========================================================================

function updateJokers() {
    const jokers = {
        publicVote: document.getElementById("joker-vote"),
        fiftyFifty: document.getElementById("joker-50"),
        passe: document.getElementById("joker-passer")
    };

    if (jokers.publicVote) jokers.publicVote.classList.toggle("disabled", jokersUsed.publicVote);
    if (jokers.fiftyFifty) jokers.fiftyFifty.classList.toggle("disabled", jokersUsed.fiftyFifty);
    if (jokers.passe) jokers.passe.classList.toggle("disabled", jokersUsed.passe);
}

function usePublicVote() {
    if (canAnswer && !jokersUsed.publicVote) {
        jokersUsed.publicVote = true;
        updateJokers();

        const voteButton = document.getElementById("joker-vote");
        if (voteButton) {
            voteButton.querySelector("img").src = "image/vote-used.png";
            voteButton.classList.add("joker-used");
            voteButton.disabled = true;
        }

        const answers = document.querySelectorAll('#answers button');
        const correctButton = document.querySelector('#answers button.correct');
        const voteResultsDiv = document.getElementById("vote-results");
        const votePopup = document.getElementById("vote-popup");
        const answerLetters = ["A", "B", "C", "D"];

        if (correctButton && voteResultsDiv && votePopup) {
            const correctIndex = Array.from(answers).indexOf(correctButton);
            const percentages = [0, 0, 0, 0];
            let correctPercentage = Math.floor(60 + Math.random() * 30);
            percentages[correctIndex] = correctPercentage;
            let remainingPercentage = 100 - correctPercentage;
            const incorrectIndices = Array.from({ length: answers.length }, (_, i) => i).filter(i => i !== correctIndex);

            incorrectIndices.forEach((index, i) => {
                const percentage = i < incorrectIndices.length - 1 ? Math.floor(Math.random() * (remainingPercentage / (incorrectIndices.length - i))) : remainingPercentage;
                percentages[index] = percentage;
                remainingPercentage -= percentage;
            });

            // Afficher les résultats avec des barres animées et les lettres
            voteResultsDiv.innerHTML = "";
            answers.forEach((button, index) => {
                const answerText = button.textContent;
                const percentage = percentages[index];
                const letter = answerLetters[index];

                const barContainer = document.createElement("div");
                barContainer.classList.add("vote-bar-container");

                const bar = document.createElement("div");
                bar.classList.add("vote-bar");
                bar.style.width = `${percentage}%`;
                bar.innerHTML = `<span class="percentage">${percentage}%</span>`;

                const label = document.createElement("span");
                label.classList.add("answer-label");
                label.textContent = `${letter} : ${answerText}`; // Ajouter la lettre avant la réponse

                barContainer.appendChild(bar);
                voteResultsDiv.appendChild(label);
                voteResultsDiv.appendChild(barContainer);
            });

            // Afficher la pop-up
            votePopup.classList.remove("hidden");
        }
    }
}

function closeVotePopup() {
    const votePopup = document.getElementById("vote-popup");
    if (votePopup) {
        votePopup.classList.add("hidden");
    }
}

function useFiftyFifty() {
    if (canAnswer && !jokersUsed.fiftyFifty) {
        jokersUsed.fiftyFifty = true;
        updateJokers();

        const fiftyButton = document.getElementById("joker-50");
        if (fiftyButton) {
            fiftyButton.querySelector("img").src = "image/50-used.png"; // Changer l'image
            fiftyButton.classList.add("joker-used"); // Ajouter la classe pour le style grisé
            fiftyButton.disabled = true; // Désactiver le bouton
        }

        const answers = document.querySelectorAll('#answers button');
        const correctButton = document.querySelector('#answers button.correct');
        const incorrectButtons = Array.from(answers).filter(btn => btn !== correctButton && btn.style.display !== 'none');
        let removed = 0;

        while (removed < 2 && incorrectButtons.length > 0) {
            const randomIndex = Math.floor(Math.random() * incorrectButtons.length);
            Object.assign(incorrectButtons[randomIndex].style, { display: "none" });
            incorrectButtons[randomIndex].disabled = true;
            incorrectButtons.splice(randomIndex, 1);
            removed++;
        }
    }
}

function usePasse() {
    if (canAnswer && !jokersUsed.passe) {
        jokersUsed.passe = true;
        updateJokers();

        const passButton = document.getElementById("joker-passer");
        if (passButton) {
            passButton.querySelector("img").src = "image/next-used.png"; // Changer l'image
            passButton.classList.add("joker-used"); // Ajouter la classe pour le style grisé
            passButton.disabled = true; // Désactiver le bouton
        }

        currentQuestionIndex++;
        canAnswer = true; // Permettre de répondre à la prochaine question
        loadQuestion();
    }
}

// ==========================================================================
//                         END GAME AND QUIT FUNCTIONS
// ==========================================================================

function endGame(victory) {
    const popup = document.getElementById("endgame");
    const message = document.getElementById("end-message");
    const replayButton = document.getElementById("restart-button");
    const homeButton = document.getElementById("home-button");

    message.textContent = victory ? `Félicitations ! Vous avez gagné ${score} €` : `Tu as perdu... Tu repars avec ${getSecuredAmount()} €`;
    popup.classList.remove("hidden");
    replayButton.onclick = () => { startGame(); popup.classList.add("hidden"); };
    homeButton.onclick = () => { window.location.href = "index.html"; };
}

function getSecuredAmount() {
    if (currentPalier === 2) return 5000;
    if (currentPalier === 3) return 25000;
    return 0;
}

function quitGame() {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("endgame").classList.add("hidden");
    Object.assign(jokersUsed, { publicVote: false, fiftyFifty: false, passe: false });
    score = 0;
    currentQuestionIndex = 0;
    currentPalier = 1;
    canAnswer = true;
    updateJokers();
    

    const answers = document.querySelectorAll('#answers button');
    answers.forEach(button => {
        Object.assign(button.style, { display: "" });
        button.classList.remove("correct", "incorrect", "selected");
        button.disabled = false;
        const voteSpan = button.querySelector('span');
        if (voteSpan) voteSpan.remove();
    });

    Object.assign(document.getElementById("question"), { textContent: "" });
    Object.assign(document.getElementById("question-info"), { textContent: "" });
    Object.assign(document.getElementById("palier"), { textContent: "" });

    stopSuspense(); // Ajout de l'arrêt de la musique de suspense ici
    playTheme();
}

