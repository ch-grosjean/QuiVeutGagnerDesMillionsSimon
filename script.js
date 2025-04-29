// Liste des montants associés aux questions
const questionAmounts = [
    0,      // Question 1/15 : 0 €
    1000,   // Question 2/15 : 1000 €
    2000,   // Question 3/15 : 2000 €
    3000,   // Question 4/15 : 3000 €
    5000,   // Question 5/15 : 5000 € (Palier de sécurité)
    7500,   // Question 6/15 : 7500 €
    10000,  // Question 7/15 : 10000 €
    12500,  // Question 8/15 : 12500 €
    15000,  // Question 9/15 : 15000 €
    25000,  // Question 10/15 : 25000 € (Palier de sécurité)
    50000,  // Question 11/15 : 50000 €
    100000, // Question 12/15 : 100000 €
    250000, // Question 13/15 : 250000 €
    500000, // Question 14/15 : 500000 €
    1000000 // Question 15/15 : 1000000 € (Victoire)
];

let currentQuestionIndex = 0; // Indice de la question courante
let currentPalier = 1; // Palier actuel
let score = 0; // Score du joueur

let jokersUsed = { publicVote: false, fiftyFifty: false, passe: false }; // Réinitialisation des jokers

// Fonction pour créer les étoiles scintillantes
function createStars(numStars) {
    const starContainer = document.getElementById('star-container');
    if (!starContainer) return; // Vérifie si le conteneur existe

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3 + 1}px`; // Taille aléatoire entre 1 et 4px
        star.style.height = `${Math.random() * 3 + 1}px`;
        star.style.top = `${Math.random() * 100}%`; // Position verticale aléatoire
        star.style.left = `${Math.random() * 100}%`; // Position horizontale aléatoire
        star.style.animationDelay = `${Math.random() * 3}s`; // Délai aléatoire
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Durée aléatoire
        starContainer.appendChild(star);
    }
}

// Fonction pour quitter la partie
function quitGame() {
    // Afficher le menu
    document.getElementById("menu").classList.remove("hidden");
    // Masquer la section du jeu
    document.getElementById("game").classList.add("hidden");
    document.getElementById("endgame").classList.add("hidden"); // S'assurer que la fenêtre de fin de jeu est cachée

    // Réinitialiser l'état du jeu
    score = 0;
    currentQuestionIndex = 0;
    currentPalier = 1;
    jokersUsed = { publicVote: false, fiftyFifty: false, passe: false };

    // Réinitialiser l'affichage des jokers
    updateJokers();

    // Réinitialiser l'affichage des réponses
    const answers = document.querySelectorAll('#answers button');
    answers.forEach(button => {
        button.style.display = "";
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        button.disabled = false;
        const voteSpan = button.querySelector('span');
        if (voteSpan) {
            voteSpan.remove();
        }
    });

    // Réinitialiser l'affichage de la question et des informations
    document.getElementById("question").textContent = "";
    document.getElementById("question-info").textContent = "";
    document.getElementById("palier").textContent = "";

    // Supprimer les étoiles
    const starContainer = document.getElementById('star-container');
    if (starContainer) {
        starContainer.innerHTML = '';
    }
}

// Fonction pour démarrer le jeu
function startGame() {
    // Vérifier si les boutons existent dans le DOM et ajouter les écouteurs d'événements
    const voteButton = document.getElementById("joker-vote");
    const fiftyButton = document.getElementById("joker-50");
    const passButton = document.getElementById("joker-passer");
    const quitButton = document.getElementById("quit-button"); // Sélection du bouton Quitter
    const restartButton = document.getElementById("restart-button"); // Sélection du bouton Rejouer
    const homeButton = document.getElementById("home-button"); // Sélection du bouton Accueil (si tu en as un)

    if (voteButton) voteButton.addEventListener("click", usePublicVote);
    if (fiftyButton) fiftyButton.addEventListener("click", useFiftyFifty);
    if (passButton) passButton.addEventListener("click", usePasse);
    if (quitButton) quitButton.addEventListener("click", quitGame); // Ajout de l'écouteur pour Quitter
    if (restartButton) restartButton.addEventListener("click", () => { // Listener pour le bouton Rejouer
        startGame();
        document.getElementById("endgame").classList.add("hidden");
    });
    if (homeButton) homeButton.addEventListener("click", () => { // Listener pour le bouton Accueil
        window.location.href = "index.html"; // Rediriger vers l'accueil
    });

    // Initialiser le jeu
    score = 0;
    currentQuestionIndex = 0;
    currentPalier = 1;
    jokersUsed = { publicVote: false, fiftyFifty: false, passe: false }; // Réinitialiser les jokers

    // Masquer le menu et afficher le jeu
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("endgame").classList.add("hidden"); // S'assurer que la fenêtre de fin de jeu est cachée au démarrage

    // Créer les étoiles en arrière-plan
    createStars(200); // Ajuste le nombre d'étoiles selon tes préférences

    // Charger la première question
    loadQuestion();

    // Mettre à jour l'état des jokers après la configuration initiale
    setTimeout(updateJokers, 0);   // Utiliser setTimeout pour attendre que le DOM soit prêt
}

// Afficher l'état des jokers
function updateJokers() {
    const publicVoteButton = document.getElementById("joker-vote");
    const fiftyFiftyButton = document.getElementById("joker-50");
    const passeButton = document.getElementById("joker-passer");

    // Désactiver les boutons de jokers une fois utilisés
    if (publicVoteButton) publicVoteButton.classList.toggle("disabled", jokersUsed.publicVote);
    if (fiftyFiftyButton) fiftyFiftyButton.classList.toggle("disabled", jokersUsed.fiftyFifty);
    if (passeButton) passeButton.classList.toggle("disabled", jokersUsed.passe);
}

// Utiliser le joker du public
function usePublicVote() {
    if (!jokersUsed.publicVote) {
        jokersUsed.publicVote = true;
        updateJokers();

        const answers = document.querySelectorAll('#answers button');
        let correctButtonIndex = -1;

        answers.forEach((button, index) => {
            if (button.classList.contains('correct')) {
                correctButtonIndex = index;
            }
        });

        if (correctButtonIndex !== -1) {
            const percentages = [0, 0, 0, 0];
            let correctPercentage = Math.floor(60 + Math.random() * 30); // Entre 60% et 90% pour la bonne réponse
            percentages[correctButtonIndex] = correctPercentage;

            let remainingPercentage = 100 - correctPercentage;
            let incorrectIndices = Array.from({ length: answers.length }, (_, i) => i).filter(i => i !== correctButtonIndex);

            // Distribuer le reste des pourcentages aléatoirement aux mauvaises réponses
            for (let i = 0; i < incorrectIndices.length; i++) {
                let percentage = 0;
                if (i < incorrectIndices.length - 1) {
                    percentage = Math.floor(Math.random() * (remainingPercentage / (incorrectIndices.length - i)));
                } else {
                    percentage = remainingPercentage;
                }
                percentages[incorrectIndices[i]] = percentage;
                remainingPercentage -= percentage;
            }

            answers.forEach((button, index) => {
                const span = document.createElement("span");
                span.textContent = ` - Vote : ${percentages[index]}%`;
                span.style.fontSize = "0.8em";
                span.style.marginLeft = "10px";
                span.style.color = "#666";
                button.appendChild(span);
            });
        }
    }
}

// Utiliser le joker 50/50
function useFiftyFifty() {
    if (!jokersUsed.fiftyFifty) {
        jokersUsed.fiftyFifty = true;
        updateJokers();

        const answers = document.querySelectorAll('#answers button');
        const correctButton = document.querySelector('#answers button.correct');

        // Filtrer les boutons incorrects qui ne sont pas déjà cachés
        let incorrectButtons = Array.from(answers).filter(btn => btn !== correctButton && btn.style.display !== 'none');
        let removed = 0;

        while (removed < 2 && incorrectButtons.length > 0) {
            const randomIndex = Math.floor(Math.random() * incorrectButtons.length);
            incorrectButtons[randomIndex].style.display = "none";
            incorrectButtons[randomIndex].disabled = true;
            incorrectButtons.splice(randomIndex, 1);
            removed++;
        }
    }
}

// Utiliser le Passe
function usePasse() {
    if (!jokersUsed.passe) {
        jokersUsed.passe = true;
        updateJokers(); // Mise à jour de l'état visuel du joker

        // Passer à la question suivante
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Charger une question en fonction du palier
function loadQuestion() {
    let level;
    if (currentQuestionIndex < 5) {
        level = 'easy';
    } else if (currentQuestionIndex < 10) {
        level = 'medium';
    } else {
        level = 'hard';
    }

    const questionsLevel = questions[level];
    const randomIndex = Math.floor(Math.random() * questionsLevel.length);
    const question = questionsLevel[randomIndex];

    document.getElementById("question").textContent = question.question;
    document.getElementById("palier").textContent = `Palier ${currentPalier}`;
    const currentAmount = questionAmounts[currentQuestionIndex];
    document.getElementById("question-info").textContent = `Question ${currentQuestionIndex + 1}/15 - Montant: ${currentAmount} €`;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        if (answer === question.correct) {
            button.classList.add("correct"); // Ajout de la classe 'correct' ici
        }
        button.onclick = function() {
            checkAnswer(this, answer, question.correct);
        };
        answersDiv.appendChild(button);
    });

    updateJokers();
}

function checkAnswer(button, selectedAnswer, correctAnswer) {
    const allButtons = document.querySelectorAll("#answers button");

    allButtons.forEach(btn => {
        btn.disabled = true; // Empêche de recliquer
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("incorrect");
        }
    });

    // Changer aussi la couleur du bouton sélectionné
    button.style.backgroundColor = selectedAnswer === correctAnswer ? 'green' : 'red';

    setTimeout(() => {
        if (selectedAnswer === correctAnswer) {
            score += questionAmounts[currentQuestionIndex];

            if (currentQuestionIndex === 4) currentPalier = 2;
            else if (currentQuestionIndex === 9) currentPalier = 3;

            if (currentQuestionIndex < 14) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                endGame(true);
            }
        } else {
            endGame(false);
        }
    }, 1000);
}


// Fonction pour terminer le jeu
function endGame(victory) {
    // Sélectionner les éléments du pop-up
    const popup = document.getElementById("endgame");
    const message = document.getElementById("end-message"); // Correction du ID de l'élément
    const replayButton = document.getElementById("restart-button");
    const homeButton = document.getElementById("home-button");

    // Personnaliser le message
    if (victory) {
        message.textContent = `Félicitations ! Vous avez gagné ${score} €`;
    } else {
        let securedAmount = 0;
        if (currentPalier === 2) {
            securedAmount = 5000;
        } else if (currentPalier === 3) {
            securedAmount = 25000;
        }
        message.textContent = `Tu as perdu... Tu repars avec ${securedAmount} €`;
    }


    // Afficher le pop-up
    popup.classList.remove("hidden"); // Assure-toi que la classe "hidden" est bien appliquée au départ

    // Ajouter l'action pour le bouton "Rejouer"
    replayButton.onclick = () => {
        startGame(); // Recommencer le jeu
        popup.classList.add("hidden"); // Masquer le pop-up
    };

    // Ajouter l'action pour le bouton "Retour à l'accueil"
    homeButton.onclick = () => {
        window.location.href = "index.html"; // Rediriger vers l'accueil (ou une autre page)
    };

    // Supprimer les étoiles à la fin du jeu (optionnel)
    const starContainer = document.getElementById('star-container');
    if (starContainer) {
        starContainer.innerHTML = '';
    }
}

// Appeler startGame une fois que le DOM est chargé (si tu ne l'appelles pas ailleurs)
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button'); // Assure-toi que tu as un bouton avec cet ID dans ton menu
    if (startButton) {
        startButton.addEventListener('click', startGame);
    }
});