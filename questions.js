// questions.js

const questions = {
    easy: [
       { question: "Quel est le plus grand océan ?", answers: ["Atlantique", "Indien", "Arctique", "Pacifique"], correct: "Pacifique" },
       { question: "Combien de continents sur Terre ?", answers: ["5", "6", "7", "8"], correct: "7" },
       { question: "Quel est l'élément chimique O ?", answers: ["Oxygène", "Or", "Ozone", "Osmium"], correct: "Oxygène" },
       { question: "Qui a écrit 'Les Misérables' ?", answers: ["Victor Hugo", "Zola", "Hugo Boss", "Jean-Paul Sartre"], correct: "Victor Hugo" },
       { question: "Quel est le plus long fleuve du monde ?", answers: ["Nil", "Amazonie", "Yangtsé", "Mississippi"], correct: "Nil" },
       // Jeux vidéo - facile
       { question: "Quel plombier est la mascotte de Nintendo ?", answers: ["Luigi", "Mario", "Sonic", "Link"], correct: "Mario" },
       { question: "Dans quel jeu attrape-t-on des Pokémon ?", answers: ["Zelda", "Mario Kart", "Pokémon", "Minecraft"], correct: "Pokémon" },
       { question: "Quel est le héros principal de 'The Legend of Zelda' ?", answers: ["Link", "Zelda", "Ganondorf", "Mario"], correct: "Link" },
       { question: "Quel jeu se joue avec des blocs à construire et casser ?", answers: ["Terraria", "Fortnite", "Minecraft", "Roblox"], correct: "Minecraft" },
       { question: "Dans quel jeu doit-on construire un fort pour survivre aux zombies ?", answers: ["Call of Duty", "Fortnite", "PUBG", "Apex Legends"], correct: "Fortnite" },
       { question: "Quel hérisson bleu court à toute vitesse ?", answers: ["Tails", "Knuckles", "Shadow", "Sonic"], correct: "Sonic" },
       { question: "Dans quel jeu visite-t-on une île peuplée d'animaux mignons ?", answers: ["Stardew Valley", "Animal Crossing", "Harvest Moon", "The Sims"], correct: "Animal Crossing" },
       { question: "Quel jeu de voiture est connu pour ses carapaces rouges et ses bananes ?", answers: ["Need for Speed", "Gran Turismo", "Mario Kart", "F-Zero"], correct: "Mario Kart" },
       { question: "Qui est le créateur de la série 'Super Smash Bros' ?", answers: ["Shigeru Miyamoto", "Masahiro Sakurai", "Hideo Kojima", "Gabe Newell"], correct: "Masahiro Sakurai" },
       { question: "Dans 'Minecraft', quel est l'objectif pour finir le jeu ?", answers: ["Battre le Wither", "Explorer le Nether", "Battre l'Ender Dragon", "Construire une maison"], correct: "Battre l'Ender Dragon" },
       // Sport - facile
       { question: "Combien de joueurs sur le terrain dans une équipe de football ?", answers: ["9", "10", "11", "12"], correct: "11" },
       { question: "Quel footballeur est surnommé 'La Pulga' ?", answers: ["Cristiano Ronaldo", "Neymar", "Lionel Messi", "Mbappé"], correct: "Lionel Messi" },
       { question: "Dans quel sport utilise-t-on une batte et une balle ?", answers: ["Baseball", "Tennis", "Football", "Basketball"], correct: "Baseball" },
       { question: "Quel sport est associé au ring et aux gants ?", answers: ["Boxe", "Catch", "Karate", "Sumo"], correct: "Boxe" },
       { question: "Comment s'appelle la grande compétition mondiale de football ?", answers: ["Coupe UEFA", "Copa America", "Coupe du Monde", "Euro"], correct: "Coupe du Monde" },
       { question: "En catch, qui est 'The Undertaker' ?", answers: ["Un arbitre", "Un catcheur", "Un entraîneur", "Un commentateur"], correct: "Un catcheur" },
       { question: "Quel sport est Michael Jordan célèbre pour ?", answers: ["Football", "Baseball", "Basketball", "Tennis"], correct: "Basketball" },
       { question: "Dans quel sport marque-t-on des buts avec un stick ?", answers: ["Hockey sur glace", "Basketball", "Tennis", "Cricket"], correct: "Hockey sur glace" },
       { question: "Combien de points pour un touchdown au football américain ?", answers: ["3", "6", "7", "10"], correct: "6" },
       { question: "Comment s'appelle la plus grande course cycliste au monde ?", answers: ["Giro d'Italia", "Vuelta", "Tour de France", "Paris-Roubaix"], correct: "Tour de France" },
       ],

   medium: [
       // Moyennes (questions 6 à 10)
       { question: "Quel est le pays le plus peuplé du monde ?", answers: ["Chine", "Inde", "USA", "Indonésie"], correct: "Chine" },
       { question: "En quelle année l'homme a-t-il marché sur la lune ?", answers: ["1965", "1969", "1972", "1975"], correct: "1969" },
       // Jeux vidéo - moyen
       { question: "Dans 'The Legend of Zelda: Ocarina of Time', quel est l'instrument principal utilisé par Link ?", answers: ["Harpe", "Ocarina", "Flûte", "Guitare"], correct: "Ocarina" },
       { question: "Quel est le vrai prénom de Solid Snake dans 'Metal Gear Solid' ?", answers: ["David", "John", "Jack", "Chris"], correct: "David" },
       { question: "Dans quel jeu incarne-t-on un chasseur de monstres dans un monde ouvert, souvent en équipe ?", answers: ["Monster Hunter", "Dark Souls", "Elden Ring", "Bloodborne"], correct: "Monster Hunter" },
       { question: "Dans 'Overwatch', quel personnage est un gorille scientifique ?", answers: ["Winston", "Hanzo", "Sigma", "Reinhardt"], correct: "Winston" },
       { question: "Quel jeu propose de survivre sur une île après un crash d'avion, avec des ennemis cannibales ?", answers: ["The Forest", "Rust", "Subnautica", "ARK"], correct: "The Forest" },
       { question: "Dans 'Final Fantasy VII', comment s'appelle la société maléfique qui pompe l'énergie de la planète ?", answers: ["Shinra", "Umbrella", "Cerberus", "Avalanche"], correct: "Shinra" },
       { question: "Quel studio a développé 'The Witcher 3: Wild Hunt' ?", answers: ["CD Projekt Red", "Ubisoft", "Bethesda", "Bioware"], correct: "CD Projekt Red" },
       { question: "Dans quel jeu peut-on devenir un tueur de dragons appelé Dovahkiin ?", answers: ["Skyrim", "Dark Souls", "Dragon Age", "The Elder Scrolls Online"], correct: "Skyrim" },
       { question: "Comment s'appelle la ville de départ dans 'GTA: San Andreas' ?", answers: ["Los Santos", "Vice City", "Liberty City", "Las Venturas"], correct: "Los Santos" },
       { question: "Dans quel jeu la mécanique de voyage dans le temps est centrale et le protagoniste s'appelle Max ?", answers: ["Life is Strange", "Detroit: Become Human", "Heavy Rain", "Until Dawn"], correct: "Life is Strange" },
       { question: "Dans 'League of Legends', comment s'appelle le dragon qui donne un bonus à l'équipe ?", answers: ["Baron Nashor", "Dragon Ancien", "Gromp", "Herald of the Rift"], correct: "Dragon Ancien" },
       { question: "Dans 'Apex Legends', quel personnage est spécialisé dans la guérison ?", answers: ["Lifeline", "Wraith", "Bloodhound", "Octane"], correct: "Lifeline" },
       { question: "Dans 'Red Dead Redemption 2', comment s'appelle le protagoniste principal ?", answers: ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Micah Bell"], correct: "Arthur Morgan" },
       { question: "Quel jeu propose une île infestée de zombies et un héros nommé Kyle Crane ?", answers: ["Dead Island", "Dying Light", "State of Decay", "Days Gone"], correct: "Dying Light" },
       { question: "Dans 'Pokémon', quel type est super efficace contre le type Eau ?", answers: ["Feu", "Plante", "Vol", "Psy"], correct: "Plante" },
       // Sport - moyen
       { question: "Quel joueur portugais est célèbre pour avoir joué au Real Madrid et à Manchester United ?", answers: ["Cristiano Ronaldo", "Luis Figo", "Bruno Fernandes", "Pepe"], correct: "Cristiano Ronaldo" },
       { question: "En catch, comment s'appelle le célèbre mouvement final de John Cena ?", answers: ["RKO", "Spear", "Attitude Adjustment", "Chokeslam"], correct: "Attitude Adjustment" },
       { question: "Quel pays a remporté la Coupe du Monde de football en 2018 ?", answers: ["Allemagne", "France", "Brésil", "Croatie"], correct: "France" },
       { question: "En NBA, pour quelle équipe Michael Jordan est-il devenu une légende ?", answers: ["Los Angeles Lakers", "Chicago Bulls", "Miami Heat", "Boston Celtics"], correct: "Chicago Bulls" },
       { question: "Dans quel sport pratique-t-on le Grand Chelem ?", answers: ["Golf", "Tennis", "Rugby", "Athlétisme"], correct: "Tennis" },
       { question: "Qui est surnommé 'The Undertaker' dans le catch ?", answers: ["Kane", "The Rock", "The Undertaker", "Stone Cold Steve Austin"], correct: "The Undertaker" },
       { question: "Combien de joueurs une équipe de football aligne-t-elle sur le terrain au début d'un match ?", answers: ["9", "10", "11", "12"], correct: "11" },
       { question: "En Formule 1, quel pilote britannique est septuple champion du monde ?", answers: ["Lewis Hamilton", "Jenson Button", "Nigel Mansell", "Sebastian Vettel"], correct: "Lewis Hamilton" },
       { question: "Quel pays organise les Jeux Olympiques de Paris 2024 ?", answers: ["Italie", "Allemagne", "France", "Espagne"], correct: "France" },
       { question: "Quel catcheur est célèbre pour sa prise appelée le '619' ?", answers: ["Rey Mysterio", "Edge", "Triple H", "Kurt Angle"], correct: "Rey Mysterio" },
       { question: "Combien de sets faut-il gagner pour remporter un match masculin en Grand Chelem au tennis ?", answers: ["2", "3", "4", "5"], correct: "3" },
       { question: "Quel est le surnom de Lionel Messi ?", answers: ["La Pulga", "El Niño", "El Tigre", "El Matador"], correct: "La Pulga" },
       { question: "Dans quel sport Usain Bolt est-il champion ?", answers: ["Natation", "Athlétisme", "Ski", "Cyclisme"], correct: "Athlétisme" },
       { question: "Comment s'appelle l'événement annuel principal de la WWE ?", answers: ["SummerSlam", "Royal Rumble", "Survivor Series", "WrestleMania"], correct: "WrestleMania" },
       { question: "Combien de points vaut un tir à trois points au basket ?", answers: ["2", "3", "4", "5"], correct: "3" },

   ],
   
   hard: [
          // Difficiles (questions 11 à 15)
       { question: "Quel est le plus grand désert du monde ?", answers: ["Sahara", "Arctique", "Gobi", "Atacama"], correct: "Sahara" },
       { question: "Qui a peint la Mona Lisa ?", answers: ["Van Gogh", "Léonard de Vinci", "Monet", "Picasso"], correct: "Léonard de Vinci" },
       { question: "Quelle est la couleur du soleil ?", answers: ["Jaune", "Bleu", "Rouge", "Blanc"], correct: "Blanc" },
       // Jeux vidéo - difficile
       { question: "Quel est le premier jeu vidéo commercialisé de l'histoire ?", answers: ["Space Invaders", "Pong", "Pac-Man", "Tennis for Two"], correct: "Pong" },
       { question: "Dans 'Dark Souls', comment s'appelle le premier boss obligatoire ?", answers: ["Taurus Demon", "Asylum Demon", "Bell Gargoyles", "Gwyn"], correct: "Asylum Demon" },
       { question: "Dans 'Earthbound', quel est le prénom du héros principal ?", answers: ["Lucas", "Ness", "Claus", "Ninten"], correct: "Ness" },
       { question: "Quel jeu est considéré comme le premier 'Metroidvania' ?", answers: ["Super Metroid", "Castlevania: Symphony of the Night", "Metroid Prime", "Castlevania II"], correct: "Castlevania: Symphony of the Night" },
       { question: "Dans 'Bloodborne', comment s'appelle la ville maudite où se déroule le jeu ?", answers: ["Lothric", "Yharnam", "Boletaria", "Anor Londo"], correct: "Yharnam" },
       { question: "Dans 'Deus Ex', quel est le nom du protagoniste cyborg ?", answers: ["JC Denton", "Adam Jensen", "Garrett", "Sam Fisher"], correct: "JC Denton" },
       { question: "Quel est le jeu qui a popularisé le genre 'Battle Royale' ?", answers: ["Fortnite", "PUBG", "H1Z1", "Call of Duty: Warzone"], correct: "PUBG" },
       { question: "Dans 'Silent Hill 2', quel est le nom du monstre iconique au casque triangulaire ?", answers: ["Pyramid Head", "Nurse", "Lying Figure", "Boogeyman"], correct: "Pyramid Head" },
       { question: "Dans 'Persona 5', sous quel pseudonyme agit le groupe des héros ?", answers: ["The Reapers", "Phantom Thieves", "Persona Users", "Midnight Crew"], correct: "Phantom Thieves" },
       { question: "Dans 'Chrono Trigger', comment s'appelle le héros principal ?", answers: ["Crono", "Serge", "Tidus", "Cloud"], correct: "Crono" },
       { question: "Quel jeu indépendant de 2017 se déroule dans un monde souterrain peuplé de bugs ?", answers: ["Undertale", "Hollow Knight", "Celeste", "Dead Cells"], correct: "Hollow Knight" },
       { question: "Dans 'The Last of Us', quel est le prénom de la jeune fille accompagnant Joel ?", answers: ["Ellie", "Sarah", "Anna", "Tess"], correct: "Ellie" },
       { question: "Dans 'Mass Effect', comment s'appelle le commandant que l'on incarne ?", answers: ["Shepard", "Garrus", "Wrex", "Anderson"], correct: "Shepard" },
       { question: "Dans 'Metroid', qui est en réalité sous l'armure de Samus Aran ?", answers: ["Un homme", "Une femme", "Un alien", "Un robot"], correct: "Une femme" },
       { question: "Quel jeu est surnommé 'le jeu maudit' pour son extrême difficulté sur NES ?", answers: ["Ghosts 'n Goblins", "Mega Man", "Ninja Gaiden", "Battletoads"], correct: "Battletoads" },
       // Sport - difficile
       { question: "Quel footballeur argentin a inscrit 'la main de Dieu' contre l'Angleterre en 1986 ?", answers: ["Lionel Messi", "Gabriel Batistuta", "Diego Maradona", "Javier Zanetti"], correct: "Diego Maradona" },
       { question: "En catch, quel catcheur est connu sous le surnom de 'The Rated-R Superstar' ?", answers: ["Randy Orton", "Edge", "Jeff Hardy", "Roman Reigns"], correct: "Edge" },
       { question: "Quel club a remporté la première édition de la Ligue des Champions en 1956 ?", answers: ["Barcelone", "Milan AC", "Real Madrid", "Benfica"], correct: "Real Madrid" },
       { question: "Dans quel sport évolue l'équipe des All Blacks ?", answers: ["Football", "Basketball", "Rugby", "Cricket"], correct: "Rugby" },
       { question: "En Formule 1, quel pilote légendaire est associé au numéro 27 chez Ferrari ?", answers: ["Michael Schumacher", "Gilles Villeneuve", "Ayrton Senna", "Niki Lauda"], correct: "Gilles Villeneuve" },
       { question: "Quel lutteur a remporté le plus de titres mondiaux reconnus par la WWE ?", answers: ["Hulk Hogan", "Ric Flair", "John Cena", "Triple H"], correct: "Ric Flair" },
       { question: "Dans quel sport trouve-t-on la Ryder Cup ?", answers: ["Golf", "Tennis", "Cricket", "Polo"], correct: "Golf" },
       { question: "Quel joueur est le meilleur buteur de l'histoire de la Coupe du Monde de football ?", answers: ["Pelé", "Ronaldo", "Miroslav Klose", "Gerd Müller"], correct: "Miroslav Klose" },
       { question: "Quel pays a inventé le sport du baseball ?", answers: ["Angleterre", "États-Unis", "Cuba", "Japon"], correct: "États-Unis" },
       { question: "Quel est le surnom de Ric Flair dans le monde du catch ?", answers: ["The Nature Boy", "The Beast", "The Game", "The Phenom"], correct: "The Nature Boy" },
       { question: "Dans quel sport pratique-t-on le 'curling' ?", answers: ["Tennis", "Hockey sur glace", "Sports d'hiver", "Curling"], correct: "Curling" },
       { question: "Quelle est la distance d'un marathon officiel ?", answers: ["40 km", "42,195 km", "45 km", "50 km"], correct: "42,195 km" },
       { question: "Combien de fois Michael Schumacher a-t-il remporté le championnat du monde de F1 ?", answers: ["5", "6", "7", "8"], correct: "7" },
       { question: "Quel catcheur a remporté le Royal Rumble 2024 (WWE) ?", answers: ["Cody Rhodes", "Seth Rollins", "Roman Reigns", "Gunther"], correct: "Cody Rhodes" },
       { question: "Quel est le nom du tournoi de tennis joué sur gazon en Angleterre ?", answers: ["Roland-Garros", "Wimbledon", "US Open", "Australian Open"], correct: "Wimbledon" },


   ]

};
