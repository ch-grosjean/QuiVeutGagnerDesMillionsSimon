// questions.js

const questions = {
    easy: [
       { question: "Quel est le plus grand océan ?", answers: ["Atlantique", "Indien", "Arctique", "Pacifique"], correct: "Pacifique" },
       { question: "Combien de continents sur Terre ?", answers: ["5", "6", "7", "8"], correct: "7" },
       { question: "Quel est l'élément chimique O ?", answers: ["Oxygène", "Or", "Ozone", "Osmium"], correct: "Oxygène" },
       { question: "Qui a écrit 'Les Misérables' ?", answers: ["Victor Hugo", "Zola", "Hugo Boss", "Jean-Paul Sartre"], correct: "Victor Hugo" },
       { question: "Quel est le plus long fleuve du monde ?", answers: ["Nil", "Amazonie", "Yangtsé", "Mississippi"], correct: "Nil" },
       
       // Jeux vidéo
       { question: "Quel plombier est la mascotte de Nintendo ?", answers: ["Luigi", "Mario", "Sonic", "Link"], correct: "Mario" },
       { question: "Quel est le héros principal de 'The Legend of Zelda' ?", answers: ["Link", "Zelda", "Ganondorf", "Mario"], correct: "Link" },
       { question: "Quel jeu se joue avec des blocs à construire et casser ?", answers: ["Terraria", "Fortnite", "Minecraft", "Roblox"], correct: "Minecraft" },
       { question: "Quel hérisson bleu court à toute vitesse ?", answers: ["Tails", "Knuckles", "Shadow", "Sonic"], correct: "Sonic" },
       { question: "Dans quel jeu visite-t-on une île peuplée d'animaux mignons ?", answers: ["Stardew Valley", "Animal Crossing", "Harvest Moon", "The Sims"], correct: "Animal Crossing" },
       { question: "Quel jeu de voiture est connu pour ses carapaces rouges et ses bananes ?", answers: ["Need for Speed", "Gran Turismo", "Mario Kart", "F-Zero"], correct: "Mario Kart" },
       { question: "Qui est le créateur de la série 'Super Smash Bros' ?", answers: ["Shigeru Miyamoto", "Masahiro Sakurai", "Hideo Kojima", "Gabe Newell"], correct: "Masahiro Sakurai" },
       { question: "Dans 'Minecraft', quel est l'objectif pour finir le jeu ?", answers: ["Battre le Wither", "Explorer le Nether", "Battre l'Ender Dragon", "Construire une maison"], correct: "Battre l'Ender Dragon" },
       { question: "Quel est le nom de la compagnie créatrice de 'League of Legends' ?", answers: ["Valve", "Riot Games", "Epic Games", "Blizzard"], correct: "Riot Games" },
       { question: "Quel jeu célèbre propose une bataille royale à 100 joueurs ?", answers: ["Valorant", "League of Legends", "Call of Duty", "Fortnite"], correct: "Fortnite" },
       { question: "Quelle entreprise a créé la console PlayStation ?", answers: ["Sega", "Nintendo", "Sony", "Microsoft"], correct: "Sony" },
       { question: "Quelle console est sortie avant la Nintendo Switch ?", answers: ["PS5", "Game Boy", "Wii U", "Xbox Series X"], correct: "Wii U" },
       { question: "Quel studio a développé le jeu Fortnite ?", answers: ["Epic Games", "Valve", "Ubisoft", "EA"], correct: "Epic Games" },
       { question: "Dans quel jeu incarne-t-on un aventurier nommé Nathan Drake ?", answers: ["Tomb Raider","Far Cry","Uncharted","Just Cause"], correct: "Uncharted"},
       { question: "Quel studio est derrière la série 'The Elder Scrolls' ?", answers: ["Bioware", "Ubisoft","Bethesda","CD Projekt"], correct: "Bethesda"},

       // Culture Geek
       {
        question: "Quel assistant personnel de chez Apple répond aux commandes vocales ?",
        answers: ["Siri", "Alexa", "Silvia", "Cortana"],
        correct: "Siri"
        },
        {
        question: "Comment se prénomment le père et la mère de Matt Groening ?",
        answers: ["Homer et Marge", "Bart et Lisa", "Ned et Maude", "Jasper et Agnès"],
        correct: "Homer et Marge"
        },
        {
        question: "Qui est probablement le Wookiee le plus connu au monde ?",
        answers: ["Chewbacca", "Boba Fett", "Watto", "Finn"],
        correct: "Chewbacca"
        },
        {
        question: "Quelle est la particularité physique de Son Goku, héros de « Dragon Ball » ?",
        answers: ["Queue de singe", "Queue de lion", "Queue de lapin", "Queue de renard"],
        correct: "Queue de singe"
        },
        {
        question: "Dans « Game of Thrones », combien de couronnes compte le royaume ?",
        answers: ["Sept", "Quatre", "Trois", "Neuf"],
        correct: "Sept"
        },
        {
        question: "« Harry Potter et la Coupe de feu » est le quantième volet de la saga ?",
        answers: ["Quatrième", "Troisième", "Deuxième", "Cinquième"],
        correct: "Quatrième"
        },
        {
        question: "Quelle Supergirl possède une ceinture magique et des bracelets dorés ?",
        answers: ["Wonder Woman", "Catwoman", "Huntress", "Vixen"],
        correct: "Wonder Woman"
        },
        {
        question: "Comment Robin Williams a-t-il prénommé sa fille en hommage à son jeu préféré ?",
        answers: ["Zelda", "Kirby", "Harmonie", "Daisy"],
        correct: "Zelda"
        },
        {
        question: "Quel est le handicap de taille du super-héros Daredevil ?",
        answers: ["Aveugle", "Sourde", "Muet", "Unijambiste"],
        correct: "Aveugle"
        },
        {
        question: "Quel acteur a interprété Spock dans une ancienne série télévisée ?",
        answers: ["Leonard Nimoy", "William Shatner", "David Carson", "Robert Wise"],
        correct: "Leonard Nimoy"
        },
       
       // Sport - JOs

       {
        question: "À quel historien et pédagogue français doit-on les Jeux olympiques modernes ?",
        answers: ["Pierre de Coubertin", "Napoléon Bonaparte", "Duc de Windsor", "Pie XI"],
        correct: "Pierre de Coubertin"
        },
        {
        question: "Combien dénombre-t-on de couleurs dans une piscine olympique ?",
        answers: ["10", "14", "6", "12"],
        correct: "10"
        },
        {
        question: "Qui a été élu par le public journaliste français le plus chauvin des Jeux olympiques de 2012 ?",
        answers: ["Nelson Monfort", "Michel Denisot", "Thierry Roland", "Patrick Montel"],
        correct: "Patrick Montel"
        },
        {
        question: "Malgré son insécurité, dans quelle ville se sont déroulés les Jeux olympiques de 2016 ?",
        answers: ["Rio de Janeiro", "Londres", "Tokyo", "Pékin"],
        correct: "Rio de Janeiro"
        },
        {
        question: "Quelle épreuve olympique commence hors du stade pour se terminer dans ses murs ?",
        answers: ["Marathon", "Cross-country", "Trail", "10 000 m"],
        correct: "Marathon"
        },
        {
        question: "Lequel des anneaux qui figure sur le drapeau olympique se retrouve le plus près du mât ?",
        answers: ["Bleu", "Jaune", "Vert", "Rouge"],
        correct: "Bleu"
        },
        {
        question: "Quel pongiste belge a participé à ses septièmes Jeux olympiques à l'âge de 42 ans ?",
        answers: ["Jean-Michel Saive", "Martin Bratanov", "Grégory Jean", "Yannick Vostes"],
        correct: "Jean-Michel Saive"
        },
        {
        question: "Qui est la première gymnaste à avoir obtenu un historique 10 aux Jeux olympiques ?",
        answers: ["Nadia Comăneci", "Diana Mocanu", "Tatiana Gutsu", "Doina Melinte"],
        correct: "Nadia Comăneci"
        },
        {
        question: "Quelle est la couleur de fond du drapeau olympique, célèbre avec ses cinq anneaux ?",
        answers: ["Blanche", "Bleue", "Jaune", "Verte"],
        correct: "Blanche"
        },
        {
        question: "Qui était Premier ministre britannique lors des Jeux olympiques de Londres en 2012 ?",
        answers: ["David Cameron", "Gordon Brown", "Tony Blair", "James Callaghan"],
        correct: "David Cameron"
        },
       
       // Sport - Football

        {
        question: "Quel joueur allemand a inscrit 16 buts en phase finale de Coupe du monde ?",
        answers: ["Miroslav Klose", "Manuel Neuer", "Marco Reus", "Arjen Robben"],
        correct: "Miroslav Klose"
        },
        {
        question: "Quel fruit un supporter a-t-il lancé sur le terrain en direction de Daniel Alves ?",
        answers: ["Banane", "Orange", "Ananas", "Pastèque"],
        correct: "Banane"
        },
        {
        question: "Quel milieu de terrain a longtemps porté un écureuil mort sur la tête ?",
        answers: ["Paul Pogba", "Renato Sanches", "Mario Balotelli", "Alexandre Pato"],
        correct: "Alexandre Pato"
        },
        {
        question: "Qui a été élu en 2013 meilleur joueur de la Coupe des Confédérations ?",
        answers: ["Neymar", "Cavani", "Ibrahimović", "Hazard"],
        correct: "Neymar"
        },
        {
        question: "Quel meilleur gardien de l'année 2015 a boycotté les votes du Ballon d'or ?",
        answers: ["Gianluigi Buffon", "Manuel Neuer", "Iker Casillas", "Oliver Kahn"],
        correct: "Manuel Neuer"
        },
        {
        question: "Quels clubs ont dominé l'Europa League entre 2010 et 2015 ?",
        answers: ["Espagnols", "Allemands", "Belges", "Italiens"],
        correct: "Espagnols"
        },
        {
        question: "Quel joueur de football représente la plus grosse vente de l'histoire de Lille ?",
        answers: ["Eden Hazard", "Yoann Gourcuff", "Karim Benzema", "Edinson Cavani"],
        correct: "Eden Hazard"
        },
        {
        question: "Quel sélectionneur a mangé ses crottes de nez en Coupe du Monde 2010 ?",
        answers: ["Joachim Löw", "Franz Beckenbauer", "Sepp Herberger", "Stefan Reiß"],
        correct: "Joachim Löw"
        },
        {
        question: "Quelle sélection a terminé la Coupe du monde 2014 avec la plus mauvaise défense ?",
        answers: ["Brésil", "Allemagne", "Argentine", "France"],
        correct: "Brésil"
        },
        {
        question: "Quels frères se sont fait face en finale de League Cup 2016 ?",
        answers: ["Touré", "Pardo", "Cissé", "Koutris"],
        correct: "Touré"
        },

        // Histoire 

        {
        question: "À quel droit était adoptée en 1792 la loi sur le parjure en 1884 ?",
        answers: ["Droit au divorce", "Droit à la retraite", "Droit au vote", "Droit à l'euthanasie"],
        correct: "Droit au divorce"
        },
        {
        question: "À qui les catacombes installées les premiers boîtes aux lettres dans Paris ?",
        answers: ["Louis XV", "Henri IV", "Charles IX", "François Ier"],
        correct: "Louis XV"
        },
        {
        question: "Quel roi a fait installer les premières boîtes aux lettres dans Paris ?",
        answers: ["Le roi de France", "Le roi d'Angleterre", "Le roi d'Espagne", "Le roi de Prusse"],
        correct: "Le roi de France"
        },
        {
        question: "De quel roi de France le duc de Sully fut-il le ministre conseiller ?",
        answers: ["Henri IV", "Louis XIII", "François Ier", "Charles IX"],
        correct: "Henri IV"
        },
        {
        question: "Quel roi de France le duc de Sully fut-il le ministre conseiller ?",
        answers: ["Dagobert", "Sigisbert", "Childéric", "Clovis"],
        correct: "Henri IV"
        },
        {
        question: "Combien de prisonniers y avait-il dans la Bastille le 14 juillet 1789 ?",
        answers: ["167", "47", "7", "125"],
        correct: "7"
        },
        {
        question: "Quel empereur succède à Auguste pour la première fois le 18 septembre 14 ?",
        answers: ["Tibère", "Caligula", "Claude", "Néron"],
        correct: "Tibère"
        },
        {
        question: "Quel évêque baptisa Clovis à Reims un 25 décembre ?",
        answers: ["Saint Rémi", "Saint Paul", "Saint François", "Saint André"],
        correct: "Saint Rémi"
        },
        {
        question: "En quelle année la loi Le Chapelier supprime les corporations ?",
        answers: ["1791", "1793", "1789", "1795"],
        correct: "1791"
        },
        {
        question: "En quelle année le Japon a-t-il battu l'empire russe durant la bataille de Tsushima ?",
        answers: ["1905", "1917", "1902", "1895"],
        correct: "1905"
        },
  ],

   medium: [
       // Moyennes (questions 6 à 10)
       { question: "Quel est le pays le plus peuplé du monde ?", answers: ["Chine", "Inde", "USA", "Indonésie"], correct: "Chine" },
       { question: "En quelle année l'homme a-t-il marché sur la lune ?", answers: ["1965", "1969", "1972", "1975"], correct: "1969" },
       { question: "Quel est le plus long fleuve d'Europe ?", answers: ["Danube", "Volga", "Rhône", "Loire"], correct: "Volga" },
       { question: "Combien d'os dans le corps humain adulte ?", answers: ["198", "206", "214", "230"], correct: "206" },
       { question: "Quel pays a inventé le papier ?", answers: ["Égypte", "Chine", "Grèce", "Inde"], correct: "Chine" },

       // Jeux vidéo - moyen
       { question: "Quel jeu vidéo a introduit pour la première fois le terme 'Metroidvania' ?", answers: ["Super Metroid", "Castlevania", "Blaster Master", "Shadow Complex"], correct: "Castlevania: Symphony of the Night" },
       { question: "Quelle entreprise a racheté Bethesda en 2020 ?", answers: ["Sony", "Tencent", "Microsoft", "Embracer Group"], correct: "Microsoft" },
       { question: "Quel jeu indépendant a remporté le titre de jeu de l’année aux Game Awards 2021 ?", answers: ["Hades", "It Takes Two", "Death's Door", "Returnal"], correct: "It Takes Two" },
       { question: "Quel célèbre duo a cofondé le studio Naughty Dog ?", answers: ["Amy Hennig & Neil Druckmann", "Jason Rubin & Andy Gavin", "Cory Barlog & David Jaffe", "Mark Cerny & Shuhei Yoshida"], correct: "Jason Rubin & Andy Gavin" },
       { question: "Quelle console a été surnommée la 'Dreamcast Killer' ?", answers: ["PlayStation 2", "GameCube", "Xbox", "Nintendo 64"], correct: "PlayStation 2" },
       { question: "Quel est le vrai prénom de Solid Snake dans 'Metal Gear Solid' ?", answers: ["David", "John", "Jack", "Chris"], correct: "David" },
       { question: "Dans quel jeu incarne-t-on un chasseur de monstres dans un monde ouvert, souvent en équipe ?", answers: ["Monster Hunter", "Dark Souls", "Elden Ring", "Bloodborne"], correct: "Monster Hunter" },
       { question: "Dans 'Overwatch', quel personnage est un gorille scientifique ?", answers: ["Winston", "Hanzo", "Sigma", "Reinhardt"], correct: "Winston" },
       { question: "Quel jeu propose de survivre sur une île après un crash d'avion, avec des ennemis cannibales ?", answers: ["The Forest", "Rust", "Subnautica", "ARK"], correct: "The Forest" },
       { question: "Dans 'Final Fantasy VII', comment s'appelle la société maléfique qui pompe l'énergie de la planète ?", answers: ["Shinra", "Umbrella", "Cerberus", "Avalanche"], correct: "Shinra" },
       { question: "Quel studio a développé 'The Witcher 3: Wild Hunt' ?", answers: ["CD Projekt Red", "Ubisoft", "Bethesda", "Bioware"], correct: "CD Projekt Red" },
       { question: "Dans quel jeu peut-on devenir un tueur de dragons appelé Dovahkiin ?", answers: ["Skyrim", "Dark Souls", "Dragon Age", "The Elder Scrolls Online"], correct: "Skyrim" },
       { question: "Comment s'appelle la ville de départ dans 'GTA: San Andreas' ?", answers: ["Los Santos", "Vice City", "Liberty City", "Las Venturas"], correct: "Los Santos" },
       { question: "Dans quel jeu la mécanique de voyage dans le temps est centrale ?", answers: ["Life is Strange", "Detroit: Become Human", "Heavy Rain", "Until Dawn"], correct: "Life is Strange" },
       { question: "Dans 'League of Legends', comment s'appelle le dragon qui donne un bonus à l'équipe ?", answers: ["Baron Nashor", "Dragon Ancien", "Gromp", "Herald of the Rift"], correct: "Dragon Ancien" },
       { question: "Dans 'Apex Legends', quel personnage est spécialisé dans la guérison ?", answers: ["Lifeline", "Wraith", "Bloodhound", "Octane"], correct: "Lifeline" },
       { question: "Dans 'Overwatch', quel personnage utilise un revolver et dit 'C'est l'heure' ?", answers: ["Hanzo","Reaper","Soldat 76","McCree"], correct: "McCree"},
       { question: "Dans 'Red Dead Redemption 2', comment s'appelle le protagoniste principal ?", answers: ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Micah Bell"], correct: "Arthur Morgan" },
       { question: "Quel jeu propose une île infestée de zombies et un héros nommé Kyle Crane ?", answers: ["Dead Island", "Dying Light", "State of Decay", "Days Gone"], correct: "Dying Light" },
       { question: "Dans 'Pokémon', quel type est super efficace contre le type Eau ?", answers: ["Feu", "Plante", "Vol", "Psy"], correct: "Plante" },
       { question: "Dans quel jeu incarne-t-on Kratos, le dieu de la guerre ?", answers: ["Dark Souls", "God of War", "Assassin's Creed", "Ghost of Tsushima"], correct: "God of War" },
       { question: "Quel jeu propose une enquête narrative autour d'une boucle temporelle sur une station spatiale ?", answers: ["Outer Wilds", "Prey", "Dead Space", "Returnal"], correct: "Outer Wilds" },
       { question: "Quel jeu de FromSoftware se déroule dans un Japon alternatif du XVIe siècle ?", answers: ["Bloodborne", "Sekiro: Shadows Die Twice", "Elden Ring", "Tenchu"], correct: "Sekiro: Shadows Die Twice" },
       { question: "Quelle console a popularisé les cartouches de jeu dans les années 80 ?", answers: ["Atari 2600", "NES", "Sega Master System", "ColecoVision"], correct: "Atari 2600" },
       { question: "Quel jeu a été au cœur du premier grand tournoi e-sport : le 'Red Annihilation' en 1997 ?", answers: ["Doom", "StarCraft", "Quake", "Counter-Strike"], correct: "Quake" },
       { question: "Quel studio est à l’origine de la saga 'The Elder Scrolls' ?", answers: ["Bioware", "Obsidian", "Bethesda", "CD Projekt"], correct: "Bethesda" },
       { question: "Sur quelle console est sorti 'Super Mario 64' ?", answers: ["Super Nintendo", "Nintendo 64", "GameCube", "Wii"], correct: "Nintendo 64" },
       { question: "Qui est le créateur de 'Metal Gear Solid' ?", answers: ["Miyamoto", "Hideo Kojima", "Yoko Taro", "Shinji Mikami"], correct: "Hideo Kojima" },
       { question: "Quel est le premier jeu de type 'battle royale' à avoir explosé sur Twitch ?", answers: ["PUBG", "Apex Legends", "Fortnite", "H1Z1"], correct: "PUBG" },
       { question: "Quel streamer français est connu pour ses speedruns sur 'Zelda: Ocarina of Time' ?", answers: ["Ponce", "Gius", "RealMyop", "BaguetteNoir"], correct: "Gius" },
       { question: "Quel jeu d’arcade a été officiellement reconnu comme le premier e-sport avec des récompenses ?", answers: ["Pong", "Space Invaders", "Donkey Kong", "Pac-Man"], correct: "Space Invaders" },
       { question: "Quel studio est derrière le jeu VR 'Beat Saber' ?", answers: ["Superhot Team", "Harmonix", "Beat Games", "VRChat Inc."], correct: "Beat Games" },
       { question: "Quel jeu a remporté le Game of the Year aux Game Awards 2023 ?", answers: ["Baldur's Gate 3", "Zelda: Tears of the Kingdom", "Alan Wake II", "Spider-Man 2"], correct: "Baldur's Gate 3" },
       
       
    // Culture Geek
        {
            question: "Quel monstre de « Mario World » passe son temps à kidnapper Peach ?",
            answers: ["Bowser", "Wario", "Birdo", "Boo"],
            correct: "Bowser"
            },
            {
            question: "Quelle est la couleur de l'oiseau le plus puissant du jeu « Angry Birds » ?",
            answers: ["Noir", "Rouge", "Jaune", "Vert"],
            correct: "Noir"
            },
            {
            question: "Quel acteur américain a joué dans les cinématiques de « Wing Commander 3 » ?",
            answers: ["Mark Hamill", "Leonard Nimoy", "William Shatner", "Jeff Daniels"],
            correct: "Mark Hamill"
            },
            {
            question: "Quel personnage de manga peut se transformer de garçon en fille avec de l'eau ?",
            answers: ["Ranma", "Genma", "Lisa", "Koruma"],
            correct: "Ranma"
            },
            {
            question: "Dans quelle série télé deux informaticiens créent-ils la femme idéale ?",
            answers: ["Code Lisa", "Dream On", "Sliders", "Les Monstres"],
            correct: "Code Lisa"
            },
            {
            question: "Quelle sorte de lutin ne faut-il pas mouiller ni nourrir après minuit ?",
            answers: ["Mogwai", "Sottai", "Chichiga", "Korrigan"],
            correct: "Mogwai"
            },
            {
            question: "Qui a adapté au cinéma le roman de J.R.R. Tolkien, « Le Seigneur des anneaux » ?",
            answers: ["Peter Jackson", "Ron Howard", "Danny Boyle", "Tom Hooper"],
            correct: "Peter Jackson"
            },
            {
            question: "À quelle célèbre maison d'édition appartient Green Lantern ?",
            answers: ["DC Comics", "Marvel", "Urban", "RAW"],
            correct: "DC Comics"
            },
            {
            question: "Qui a remplacé Tobey Maguire dans le rôle de Spiderman sur les écrans ?",
            answers: ["Andrew Garfield", "Tom Holland", "Christian Bale", "Colin Farrell"],
            correct: "Andrew Garfield"
            },
            {
            question: "De combien de pouvoirs dispose Jack-Jack de la famille des Indestructibles ?",
            answers: ["Tous", "Un seul", "Douze", "Six"],
            correct: "Tous"
            },
        
       
       
    // Sport - JOs
       {
        question: "Quel athlète jamaïcain a littéralement marqué les Jeux olympiques de 2008 ?",
        answers: ["Usain Bolt", "Dexter Lee", "Ray Stewart", "Lerone Clarke"],
        correct: "Usain Bolt"
        },
        {
        question: "Quelle discipline olympique associe le saut à ski au ski de fond ?",
        answers: ["Combiné nordique", "Curling", "Biathlon", "Snowboard"],
        correct: "Combiné nordique"
        },
        {
        question: "En 2012, quel type de passeport est apparu aux Jeux olympiques de Londres ?",
        answers: ["Biologique", "Thermique", "Automatique", "Télépatique"],
        correct: "Biologique"
        },
        {
        question: "Laquelle de ces sportives françaises a participé à sept éditions des Jeux olympiques ?",
        answers: ["Jeannie Longo", "Sabrina Jonnier", "Marion Rousse", "Sophie Creux"],
        correct: "Jeannie Longo"
        },
        {
        question: "Quel objet les femmes ne peuvent-elles jeter aux Jeux olympiques que depuis 1995 ?",
        answers: ["Marteau", "Poids", "Javelot", "Disque"],
        correct: "Marteau"
        },
        {
        question: "Quel équipement très utilisé en athlétisme doit peser au moins 50 grammes ?",
        answers: ["Témoin", "Sifflet", "Javelot", "Disque"],
        correct: "Témoin"
        },
        {
        question: "Dans quelle épreuve olympique peut-on regarder des sportifs coachés par terre ?",
        answers: ["Tir", "Croquet", "Softball", "Curling"],
        correct: "Tir"
        },
        {
        question: "Quel sportif, né le 30 juin 1985 à Towson, est à ce jour le plus titré des Jeux olympiques ?",
        answers: ["Michael Phelps", "Mark Spitz", "Ian Thorpe", "Andriy Serdinov"],
        correct: "Michael Phelps"
        },
        {
        question: "Comment appelle-t-on la période de quatre ans qui se situe entre deux Jeux olympiques ?",
        answers: ["Olympiade", "Quinquennat", "Lustre", "Tierce"],
        correct: "Olympiade"
        },
        {
        question: "Quel athlète a été champion olympique du saut en longueur à Atlanta en 1996 ?",
        answers: ["Carl Lewis", "Linford Christie", "Dwight Phillips", "Michael Johnson"],
        correct: "Carl Lewis"
        },
       
    // Sport - football
        {
        question: "Quel joueur au gros nez a fini meilleur buteur de la liga en 2002-2003 ?",
        answers: ["Roy Makaay", "Lucas Toni", "Cristiano Ronaldo", "Lionel Messi"],
        correct: "Roy Makaay"
        },
        {
        question: "Quelle est la nationalité de Santiago Munez, star du film « Goal ! » ?",
        answers: ["Mexicaine", "Espagnole", "Italienne", "Portugaise"],
        correct: "Mexicaine"
        },
        {
        question: "Qui a réalisé le film « Looking for Eric », avec Éric Cantona ?",
        answers: ["Ken Loach", "Peter Lord", "Alan Parker", "Jack Rosenthal"],
        correct: "Ken Loach"
        },
        {
        question: "Quel animal était censé représenter la mascotte Zakumi en 2010 ?",
        answers: ["Léopard", "Ours", "Dauphin", "Tortue"],
        correct: "Léopard"
        },
        {
        question: "En quelle année le célèbre arbitre Pierluigi Collina a-t-il pris sa retraite ?",
        answers: ["2005", "2002", "2008", "1999"],
        correct: "2005"
        },
        {
        question: "Quel gardien de but français est devenu pilote sur Porsche en 2008 ?",
        answers: ["Fabien Barthez", "Rudy Riou", "Jean Castaneda", "Roland Amar"],
        correct: "Fabien Barthez"
        },
        {
        question: "À qui Pep Guardiola a-t-il succédé en 2008 à la tête du Barça ?",
        answers: ["Frank Rijkaard", "Mané", "Hector Cuper", "Juande Ramos"],
        correct: "Frank Rijkaard"
        },
        {
        question: "Après Zizou, qui fut le deuxième joueur à mettre un doublé en première sélection ?",
        answers: ["Bafétimbi Gomis", "Jérémy Toulalan", "Florent Malouda", "François Clerc"],
        correct: "Bafétimbi Gomis"
        },
        {
        question: "Quel nom fut donné au ballon de football utilisé lors du Mondial 2010 ?",
        answers: ["Jabulani", "Brazuca", "Europass", "Tango 12"],
        correct: "Jabulani"
        },
        {
        question: "Quel numéro Lionel Messi portait-il sur son maillot de football à ses débuts ?",
        answers: ["30", "20", "10", "7"],
        correct: "30"
        },

        {
        question: "Quel entraîneur est passé du Benfica Lisbonne au Sporting Lisbonne ?",
        answers: ["Jorge Jesus", "Pedro Miguel", "Paulo Alves", "Fernando Peres"],
        correct: "Jorge Jesus"
        },
        {
        question: "En combien de temps Robert Lewandowski a-t-il inscrit 5 buts le 22 septembre 2015 ?",
        answers: ["9 minutes", "15 minutes", "21 minutes", "27 minutes"],
        correct: "9 minutes"
        },
        {
        question: "Qu'a fait Francesco Totti après son deuxième but contre la Lazio en janvier 2015 ?",
        answers: ["Selfie", "Culé", "Salto arrière", "Doigt d'honneur"],
        correct: "Selfie"
        },
        {
        question: "À quel âge Raphaël Varane a-t-il débuté en équipe de France ?",
        answers: ["20 ans", "18 ans", "16 ans", "22 ans"],
        correct: "18 ans"
        },
        {
        question: "Quel gardien de but a joué libero contre l'Algérie en Coupe du Monde 2014 ?",
        answers: ["Manuel Neuer", "Hans Jakob", "Lukas Raeder", "Tom Starke"],
        correct: "Manuel Neuer"
        },
        {
        question: "Qu'a appris Pep Guardiola avant d'arriver au Bayern Munich en 2013 ?",
        answers: ["L'allemand", "À faire la fête", "Une naissance", "À manger local"],
        correct: "L'allemand"
        },
        {
        question: "Quel joueur des Girondins est régulièrement capitaine du club depuis 2014 ?",
        answers: ["Jaroslav Plašil", "Youssouf Sabaly", "Valentin Vada", "Théo Pellenard"],
        correct: "Jaroslav Plašil"
        },
        {
        question: "Combien de temps a-t-il fallu à Alexandre Pato pour marquer contre Barcelone en 2011 ?",
        answers: ["24 secondes", "3 minutes", "45 minutes", "91 minutes"],
        correct: "24 secondes"
        },
        {
        question: "Quel acteur incarne le personnage du maire dans le film « Les Seigneurs » ?",
        answers: ["Jean-Pierre Marielle", "Ramzy Bedia", "Gad Elmaleh", "Franck Dubosc"],
        correct: "Jean-Pierre Marielle"
        },
        {
        question: "Combien de championnats d'Espagne Carles Puyol a-t-il remporté ?",
        answers: ["Six", "Cinq", "Quatre", "Sept"],
        correct: "Six"
        },
        
       
    // Sport - général
       { question: "Quel footballeur argentin a inscrit 'la main de Dieu' contre l'Angleterre en 1986 ?", answers: ["Lionel Messi", "Gabriel Batistuta", "Diego Maradona", "Javier Zanetti"], correct: "Diego Maradona" },
       { question: "Quel footballeur a remporté le plus de Ballons d'Or ?", answers: ["Cristiano Ronaldo", "Pelé", "Lionel Messi", "Zinédine Zidane"], correct: "Lionel Messi" },
       { question: "Quel événement sportif majeur a lieu tous les 4 ans et rassemble des nations entières ?", answers: ["Coupe du monde", "Jeux olympiques", "Super Bowl", "Tour de France"], correct: "Jeux olympiques" },
       { question: "Quel catcheur a popularisé la prise 'RKO' ?", answers: ["Edge", "Randy Orton", "Brock Lesnar", "Roman Reigns"], correct: "Randy Orton" },
       { question: "Quel pays a remporté la Coupe du monde de football en 1998 ?", answers: ["Italie", "Allemagne", "France", "Brésil"], correct: "France" },
       { question: "En Formule 1, de quelle nationalité est Lewis Hamilton ?", answers: ["Américain", "Anglais", "Canadien", "Australien"], correct: "Anglais" },
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
       { question: "Quel joueur de tennis est surnommé 'le Taureau de Manacor' ?", answers: ["Federer", "Nadal", "Djokovic", "Murray"], correct: "Nadal" },
       { question: "Quel club anglais est surnommé 'The Reds' ?", answers: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"], correct: "Liverpool" },
       { question: "Combien de sets faut-il gagner pour remporter un match en Grand Chelem (chez les hommes) ?", answers: ["2", "3", "4", "5"], correct: "3" },
   
    // HISTOIRE
        {
        question: "Quelle ville française était appelée la cité des papes au Moyen Âge ?",
        answers: ["Avignon", "Tours", "Metz", "Nantes"],
        correct: "Avignon"
        },
        {
        question: "Quel diplomate français a succédé au Cardinal de Richelieu ?",
        answers: ["Jules Mazarin", "Philippe Mancini", "Charles de Mantoüe", "Antoine Barberini"],
        correct: "Jules Mazarin"
        },
        {
        question: "Quelle reine de France a porté le chapeau dans l'affaire du collier ?",
        answers: ["Marie-Antoinette", "Marie-Joséphine", "Marie-Thérèse", "Marie-Louise"],
        correct: "Marie-Antoinette"
        },
        {
        question: "Quand François Mitterrand fut-il élu président de la France pour la première fois ?",
        answers: ["1981", "1976", "1986", "1991"],
        correct: "1981"
        },
        {
        question: "Quelle ville Jeanne d'Arc a-t-elle héroïquement libérée des Anglais ?",
        answers: ["Orléans", "Angers", "Le Mans", "Tours"],
        correct: "Orléans"
        },
        {
        question: "Quel homme d'État français fut surnommé le Tigre ou encore le Père la victoire ?",
        answers: ["Clémenceau", "Foch", "Joffre", "Poincaré"],
        correct: "Clémenceau"
        },
        {
        question: "Quelle héroïne de l'histoire de France était la Pucelle d'Orléans ?",
        answers: ["Jeanne d'Arc", "Rita de Cascia", "Hélène Duglioli", "Alessandra Scala"],
        correct: "Jeanne d'Arc"
        },
        {
        question: "Sur quelle principauté a régné la maison de Matignon ?",
        answers: ["Monaco", "Cambrai", "Fourcarmont", "Condé"],
        correct: "Monaco"
        },
        {
        question: "Quel journal a brillé en sortant le premier l'affaire des diamants de Bokassa ?",
        answers: ["Canard Enchaîné", "Charlie Hebdo", "Minute", "Paris Match"],
        correct: "Canard Enchaîné"
        },
        {
        question: "Quel Guillaume, duc de Normandie, parfois surnommé le Bâtard, a conquis l'Angleterre ?",
        answers: ["Le Conquérant", "Le Chevelu", "Le Pieux", "Le Hardi"],
        correct: "Le Conquérant"
        },
        {
        question: "Quelle ville assiégée Gambetta a-t-il dû quitter en ballon ?",
        answers: ["Paris", "Lyon", "Rouen", "Toulouse"],
        correct: "Paris"
        },
        {
        question: "Quel roi a révoqué l'édit de Nantes en 1685, ayant donné la liberté de religion ?",
        answers: ["Louis XIV", "Henri IV", "Charles IX", "François II"],
        correct: "Louis XIV"
        },
        {
        question: "Quel était le surnom du fils de Napoléon Ier et de Marie-Louise ?",
        answers: ["L'Aiglon", "Le Corsaire", "L'Incapable", "Le Mal-aimé"],
        correct: "L'Aiglon"
        },
        {
        question: "Quel chevalier franc et comte urbain a été trahi par Ganelon au col de Roncevaux ?",
        answers: ["Roland", "Perceval", "Marsile", "Gauvain"],
        correct: "Roland"
        },
        {
        question: "De quelle manière François Ravaillac a-t-il tué le roi Henri IV ?",
        answers: ["Poignardé", "Empoisonné", "Décapité", "Fusillé"],
        correct: "Poignardé"
        },
        {
        question: "Quel code régissait la vie d'une grande partie de la cour de Louis XIV ?",
        answers: ["Étiquette", "Bonjour", "Pourboire", "Mayade"],
        correct: "Étiquette"
        },
        {
        question: "Quel pays Bertrand Du Guesclin a-t-il combattu durant toute sa vie ?",
        answers: ["Angleterre", "Allemagne", "Italie", "Pays-Bas"],
        correct: "Angleterre"
        },
        {
        question: "Quel âge avait Clovis lorsqu'il fut élu roi des Francs en 481 ?",
        answers: ["16 ans", "14 ans", "12 ans", "10 ans"],
        correct: "16 ans"
        },
        {
        question: "À quelle élection présidentielle s'est présenté pour la première fois Michel Rocard ?",
        answers: ["1969", "1972", "1975", "1978"],
        correct: "1969"
        },
        {
        question: "Quel corsaire malouin s'est évadé d'Angleterre et a rejoint St-Malo à la rame ?",
        answers: ["Jean Bart", "Jean Bernanos", "Nicolas Surcouf", "Philippe Bequel"],
        correct: "Jean Bart"
        },

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
       { question: "En quelle année est sortie la première PlayStation ?", answers: ["1993", "1994", "1995", "1996"], correct: "1994" },
       { question: "Quel jeu e-sport a eu le plus gros cash prize de l’histoire (en 2021) ?", answers: ["Dota 2", "League of Legends", "CS:GO", "Fortnite"], correct: "Dota 2" },
       { question: "Comment s'appelle l'intelligence artificielle qui a battu des pros à StarCraft II ?", answers: ["AlphaGo", "DeepMind", "AlphaStar", "Skynet"], correct: "AlphaStar" },
       { question: "Dans quelle ville se tenait la première finale mondiale des Worlds de League of Legends ?", answers: ["Séoul", "Berlin", "New York", "Los Angeles"], correct: "Los Angeles" },
       { question: "Quel développeur japonais est connu pour ses jeux absurdes comme 'Katamari Damacy' ?", answers: ["Goichi Suda", "Keita Takahashi", "Tetsuya Mizuguchi", "Hidetaka Miyazaki"], correct: "Keita Takahashi" },
       { question: "Quel streamer a détenu le record du monde Twitch avec plus de 600 000 viewers en live en 2021 ?", answers: ["xQc", "Ibai", "TheGrefg", "Shroud"], correct: "TheGrefg" },
       { question: "Quel est le nom du micro-ordinateur 8 bits très populaire en Europe dans les années 80 ?", answers: ["MSX", "ZX Spectrum", "Atari ST", "Commodore 128"], correct: "ZX Spectrum" },
       { question: "Quel jeu est considéré comme le premier jeu vidéo commercialisé ?", answers: ["Pong", "Tennis for Two", "Spacewar!", "Computer Space"], correct: "Computer Space" },
       { question: "Quel jeu de la licence Final Fantasy est sorti en premier en Europe ?", answers: ["FF IV", "FF VI", "FF VII", "FF I"], correct: "FF VII" },
       { question: "Quel langage de programmation a été utilisé pour coder DOOM en 1993 ?", answers: ["C", "Assembly", "Pascal", "Fortran"], correct: "C" },
       { question: "Quel ancien champion du monde de Street Fighter est aujourd’hui commentateur e-sport ?", answers: ["Justin Wong", "Daigo Umehara", "Tokido", "Luffy"], correct: "Daigo Umehara" },
       { question: "Quel jeu e-sport a popularisé le terme 'Zerging' ?", answers: ["Warcraft III", "Command & Conquer", "StarCraft", "Dawn of War"], correct: "StarCraft" },
       { question: "Sur quelle console est sorti le jeu culte 'Chrono Trigger' ?", answers: ["NES", "Super Nintendo", "PlayStation", "Sega Saturn"], correct: "Super Nintendo" },
       { question: "Quelle console Sega proposait une manette avec un écran intégré ?", answers: ["Saturn", "Dreamcast", "Game Gear", "Nomad"], correct: "Dreamcast" },
       { question: "Quel jeu est connu pour avoir provoqué la 'crise du jeu vidéo' de 1983 ?", answers: ["Pac-Man", "E.T. the Extra-Terrestrial", "Donkey Kong Jr.", "Adventure"], correct: "E.T. the Extra-Terrestrial" },
       { question: "Quel streamer francophone est à l’origine de la Z LAN ?", answers: ["ZeratoR", "Kameto", "Doigby", "Squeezie"], correct: "ZeratoR" },
       
    // CULTURE GEEK
       {
        question: "Qu'a perdu Albator lors d'un combat contre les humanoïdes ?",
        answers: ["Un oeil", "Un bras", "Une main", "Une jambe"],
        correct: "Un oeil"
        },
        {
        question: "Quelle fée et compagne de Link l'aide à trouver les points faibles de ses ennemis ?",
        answers: ["Navi", "Onox", "Rauru", "Saria"],
        correct: "Navi"
        },
        {
        question: "Aussi jaune qu'un citron, quel âge a Pac-Man dans le jeu vidéo du même nom ?",
        answers: ["30 ans", "60 ans", "40 ans", "50 ans"],
        correct: "30 ans"
        },
        {
        question: "Dans le jeu vidéo culte « Doom », quelle est l'arme la plus puissante ?",
        answers: ["BFG 9000", "Evil 2000", "Final 4000", "RPG 5000"],
        correct: "BFG 9000"
        },
        {
        question: "Comment appelle-t-on un lanceur de sorts dans le jeu « Donjons et Dragons » ?",
        answers: ["Casteur", "Mage", "Nécromancien", "Clerc"],
        correct: "Casteur"
        },
        {
        question: "Quelle est la nationalité du personnage de Vega dans « Street Fighter II » ?",
        answers: ["Espagnole", "Japonaise", "Russe", "Chinoise"],
        correct: "Espagnole"
        },
        {
        question: "Quel a été le premier jeu vidéo de combat à intégrer des Easter Eggs ?",
        answers: ["Mortal Kombat", "Street Fighter", "Tekken", "Killer Instinct"],
        correct: "Mortal Kombat"
        },
        {
        question: "Selon la société Sanrio, quel est l'âge réel du personnage Hello Kitty ?",
        answers: ["35 ans", "25 ans", "15 ans", "5 ans"],
        correct: "35 ans"
        },
        {
        question: "Qui est le propriétaire de la boutique « The Android's Dungeon and Baseball » ?",
        answers: ["Jeff Albertson", "Ned Flanders", "Barney Gumble", "Frank Grimes"],
        correct: "Jeff Albertson"
        },
        {
        question: "Qui fut le premier anti-héros de la littérature espagnole ?",
        answers: ["Don Quichotte", "Pantagruel", "Gargantua", "Tom Jones"],
        correct: "Don Quichotte"
        },
        
    // SPORT - JOs
       {
        question: "En quelle année les Jeux olympiques se sont-ils déroulés à Paris pour la première fois ?",
        answers: ["1900", "1908", "1920", "1928"],
        correct: "1900"
        },
        {
        question: "Lequel de ces sports ne figure pas parmi les épreuves disputées en pentathlon moderne ?",
        answers: ["Cyclisme", "Natation", "Tir au pistolet", "Course à pied"],
        correct: "Cyclisme"
        },
        {
        question: "Quel chirurgien orthopédiste a été élu en 2001 président du Comité international olympique ?",
        answers: ["Jacques Rogge", "Jean-Claude Killy", "Marc Hodler", "René Fasel"],
        correct: "Jacques Rogge"
        },
        {
        question: "Quelle est la première ville à avoir accueilli trois fois les Jeux olympiques d'été ?",
        answers: ["Londres", "Lausanne", "Los Angeles", "Liverpool"],
        correct: "Londres"
        },
        {
        question: "Dans quelle discipline olympique le parcours est-il toujours triangulaire ?",
        answers: ["Voile", "Canoë-kayak", "Aviron", "Triathlon"],
        correct: "Voile"
        },
        {
        question: "En 1980, le pays hôte a totalement boycotté les Jeux olympiques de Moscou ?",
        answers: ["Norvège", "Suède", "Grande-Bretagne", "France"],
        correct: "États-Unis"
        },
        {
        question: "Quel nageur olympique de Guinée équatoriale a connu une célébrité éphémère ?",
        answers: ["Éric Moussambani", "Bill Kirby", "Jens Kruppa", "Ian Thorpe"],
        correct: "Éric Moussambani"
        },
        {
        question: "Quel animal a représenté la mascotte des Jeux olympiques de Moscou en 1980 ?",
        answers: ["Un ours", "Un renne", "Un élan", "Un loup"],
        correct: "Un ours"
        },
        {
        question: "Combien de médailles olympiques ont été distribuées aux Jeux de 2012 ?",
        answers: ["4 700", "3 500", "2 900", "5 600"],
        correct: "3 500"
        },
        {
        question: "En quelle année les Jeux olympiques ont-ils été télévisés pour la première fois ?",
        answers: ["1936", "1947", "1952", "1963"],
        correct: "1936"
        },
       
    // SPORT - football
        {
        question: "Dans quel club improbable le Brésilien Adriano a-t-il failli signer en décembre 2014 ?",
        answers: ["Le Havre", "Reims", "Grenoble", "Angers"],
        correct: "Le Havre"
        },
        {
        question: "Quel attaquant italien a raté un penalty en finale de Copa America en 2015 ?",
        answers: ["Gonzalo Higuaín", "Edinson Cavani", "Antonio Di Natale", "Francesco Totti"],
        correct: "Gonzalo Higuaín"
        },
        {
        question: "Quel est le prénom de Mbokani, passé à Monaco en 2010-2011 ?",
        answers: ["Dieumerci", "Javier", "Ahmed", "Tidiane"],
        correct: "Dieumerci"
        },
        {
        question: "Dans lequel de ces clubs le défenseur Adil Rami n'a-t-il pas joué ?",
        answers: ["Cologne", "Lille", "Valence", "Séville"],
        correct: "Cologne"
        },
        {
        question: "Quel joueur est devenu à 26 ans le deuxième meilleur buteur de l'histoire du Mexique ?",
        answers: ["Chicharito", "Villa", "Alonso", "Silverio"],
        correct: "Chicharito"
        },
        {
        question: "Quel entraîneur lillois a plus convaincu par ses chemises que sur le banc ?",
        answers: ["Hervé Renard", "Philippe Redon", "Denis Renaud", "Antoine Redin"],
        correct: "Hervé Renard"
        },
        {
        question: "Pour quel problème Loïc Rémy n'a-t-il pu rejoindre Liverpool en juillet 2014 ?",
        answers: ["Cardiaque", "Pulmonaire", "Cervical", "Dentaire"],
        correct: "Cardiaque"
        },
        {
        question: "Quel club a recruté Fernandinho en 2013 et Fernando en 2014 ?",
        answers: ["Manchester City", "Liverpool", "Chelsea", "Arsenal"],
        correct: "Manchester City"
        },
        {
        question: "Quel joueur de l'Olympique Lyonnais a placé 36 coups francs de suite en 2013 et 2014 ?",
        answers: ["Clément Grenier", "Fabio Grosso", "André Gillon", "Marco Grassi"],
        correct: "Clément Grenier"
        },
        {
        question: "De quel autre sport l'attaquant Zlatan Ibrahimović est-il ceinture noire ?",
        answers: ["Taekwondo", "Judo", "Karaté", "Budo"],
        correct: "Taekwondo"
        },

        {
        question: "Quel ukrainien a trafiqué son passeport pour jouer à l'ASSE en Grèce ?",
        answers: ["Maksym Levytskyi", "Artem Dovbyk", "Bohdan Butko", "Denys Holaydo"],
        correct: "Maksym Levytskyi"
        },
        {
        question: "Qui a trouvé la mort durant un match Cameroun-Colombie en 2003 ?",
        answers: ["Marc-Vivien Foé", "Bill Tchato", "Timothée Atouba", "Modeste M'Bami"],
        correct: "Marc-Vivien Foé"
        },
        {
        question: "Qui a été élu meilleur espoir de la Ligue 1 à l'issue de la saison 2002-2003 ?",
        answers: ["Lionel Mathis", "Sidney Govou", "Jérémy Toulalan", "Hatem Ben Arfa"],
        correct: "Lionel Mathis"
        },
        {
        question: "À partir de quelle année Mourinho est-il devenu « A Special One » ?",
        answers: ["2004", "2006", "2008", "2002"],
        correct: "2004"
        },
        {
        question: "Quel ancien joueur de football roux du PSG avait pour prénom Igor ?",
        answers: ["Igor Yanovski", "Igor Akinfeev", "Igor Chalimov", "Igor Denissov"],
        correct: "Igor Yanovski"
        },
        {
        question: "Qui a été élu meilleur joueur de football de la décennie 2000 ?",
        answers: ["Koji Nakata", "Naohiro Takahara", "Seiichiro Maki", "Yoichi Doi"],
        correct: "Zinedine Zidane"
        },
        {
        question: "Quelle équipe de football à relancé la mode du marcel en 2002 ?",
        answers: ["Cameroun", "Algérie", "Grèce", "Bolivie"],
        correct: "Cameroun"
        },
        {
        question: "Quel est le seul joueur à être passé du Bayern Munich à l'Olympique lyonnais ?",
        answers: ["Giovane Élber", "Thomas Linke", "Diego Contento", "Hans Nowak"],
        correct: "Giovane Élber"
        },
        {
        question: "Selon Zinedine Zidane, quel milieu de terrain était le meilleur du monde ?",
        answers: ["Paul Scholes", "Wayne Rooney", "Frank Lampard", "Paul Robinson"],
        correct: "Paul Scholes"
        },
        {
        question: "Après avoir joué à la Juventus, où David Trezeguet a-t-il signé ?",
        answers: ["Alicante", "Baniyas", "River Plate", "Pune City"],
        correct: "Alicante"
        },
       
       {
        question: "Dans quel club improbable le Brésilien Adriano a-t-il failli signer en décembre 2014 ?",
        answers: ["Le Havre", "Reims", "Grenoble", "Angers"],
        correct: "Le Havre"
        },
        {
        question: "Quel attaquant italien a raté un penalty en finale de Copa America en 2015 ?",
        answers: ["Gonzalo Higuaín", "Edinson Cavani", "Antonio Di Natale", "Francesco Totti"],
        correct: "Gonzalo Higuaín"
        },
        {
        question: "Quel est le prénom de Mbokani, passé à Monaco en 2010-2011 ?",
        answers: ["Dieumerci", "Javier", "Ahmed", "Tidiane"],
        correct: "Dieumerci"
        },
        {
        question: "Dans lequel de ces clubs le défenseur Adil Rami n'a-t-il pas joué ?",
        answers: ["Cologne", "Lille", "Valence", "Séville"],
        correct: "Cologne"
        },
        {
        question: "Quel joueur est devenu à 26 ans le deuxième meilleur buteur de l'histoire du Mexique ?",
        answers: ["Chicharito Villa", "Alonso", "Silverio", "Hugo Sánchez"],
        correct: "Chicharito Villa"
        },
        {
        question: "Quel entraîneur lillois a plus convaincu par ses chemises que sur le banc ?",
        answers: ["Hervé Renard", "Philippe Bergeroo", "René Girard", "Antoine Kombouaré"],
        correct: "Hervé Renard"
        },
        {
        question: "Pour quel problème Loïc Rémy n'a-t-il pu rejoindre Liverpool en juillet 2014 ?",
        answers: ["Cardiaque", "Pulmonaire", "Cervical", "Dentaire"],
        correct: "Cardiaque"
        },
        {
        question: "Quel club a recruté Fernandinho en 2013 et Fernando en 2014 ?",
        answers: ["Manchester United", "Chelsea", "Liverpool", "Arsenal"],
        correct: "Manchester City"
        },
        {
        question: "Quel joueur de l'Olympique Lyonnais a placé 36 coups francs de suite en 2013 et 2014 ?",
        answers: ["Clément Grenier", "Fabio Grosso", "Chris Jullien", "Marco Griezmann"],
        correct: "Clément Grenier"
        },
        {
        question: "De quel autre sport l'attaquant Zlatan Ibrahimović est-il ceinture noire ?",
        answers: ["Taekwondo", "Judo", "Karaté", "Budo"],
        correct: "Taekwondo"
        },
       
    // Sport - général
       { question: "Quel est le record du monde du 100 mètres masculin (chronométré) ?", answers: ["9.58s", "9.69s", "9.72s", "9.74s"], correct: "9.58s" },
       { question: "En quelle année la WWE a-t-elle été fondée (sous le nom WWF) ?", answers: ["1972", "1963", "1984", "1955"], correct: "1963" },
       { question: "Quel club de football a remporté le plus de Ligues des champions ?", answers: ["AC Milan", "Liverpool", "Real Madrid", "Bayern Munich"], correct: "Real Madrid" },
       { question: "Combien de tours compte un marathon officiel ?", answers: ["1", "2", "4", "Aucun, c'est une seule distance"], correct: "Aucun, c'est une seule distance" },
       { question: "Qui a été le tout premier champion olympique de l'ère moderne en 1896 ?", answers: ["Spyridon Louis", "James Connolly", "Pierre de Coubertin", "Carl Schuhmann"], correct: "James Connolly" },
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

    // HISTOIRE
        {
        question: "Quel droit adopté en 1792 a été rétabli par la loi Naquet en 1884 ?",
        answers: ["Droit au divorce", "Droit à la retraite", "Droit au vote", "Droit à l'euthanasie"],
        correct: "Droit au divorce"
        },
        {
        question: "Quel roi a fait installer les premières boîtes aux lettres dans Paris ?",
        answers: ["Louis XIV", "Henri IV", "Charles IX", "François II"],
        correct: "Louis XIV"
        },
        {
        question: "À quel fruit les caricaturistes comparaient-ils la tête du roi Louis-Philippe ?",
        answers: ["Poire", "Banane", "Fraise", "Citron"],
        correct: "Poire"
        },
        {
        question: "Quel était l'emblème du régime de Vichy en France pendant la guerre ?",
        answers: ["Francisque", "Fleur de lys", "Croix de Lorraine", "Cosse de genêts"],
        correct: "Francisque"
        },
        {
        question: "De quel roi de France le duc de Sully fut-il le ministre ?",
        answers: ["Henri IV", "Louis XIV", "Charles IX", "François II"],
        correct: "Henri IV"
        },
        {
        question: "Quel roi de la dynastie mérovingienne fut conseillé par saint Eloi ?",
        answers: ["Dagobert", "Sigebert", "Caribert", "Childebert"],
        correct: "Dagobert"
        },
        {
        question: "Combien de prisonniers y avait-il dans la Bastille le 14 juillet 1789 ?",
        answers: ["7", "47", "167", "1257"],
        correct: "7"
        },
        {
        question: "Quelle expression a été utilisée pour la première fois à propos du Père Joseph ?",
        answers: ["Éminence grise", "Suprême rouge", "Stratège bleu", "Béruier noir"],
        correct: "Éminence grise"
        },
        {
        question: "Quel roi, connu sous le titre de comte d'Artois, a succédé à Louis XVIII ?",
        answers: ["Charles X", "Henri V", "François II", "Jean II"],
        correct: "Charles X"
        },
        {
        question: "Quel évêque a baptisé Clovis à Reims un 25 décembre ?",
        answers: ["Saint Rémi", "Saint Paul", "Saint Justin", "Saint André"],
        correct: "Saint Rémi"
        },
        {
        question: "Quelle est l'année de la nomination d'Hitler comme chancelier du Reich ?",
        answers: ["1933", "1923", "1943", "1913"],
        correct: "1933"
        },
        {
        question: "En quelle année le Japon a-t-il battu l'Empire russe durant la bataille de Tsushima ?",
        answers: ["1905", "1915", "1925", "1935"],
        correct: "1905"
        },
        {
        question: "En quelle année la visite de Nixon à Pékin a-t-elle marqué la fin de l'isolement chinois ?",
        answers: ["1972", "1962", "1952", "1982"],
        correct: "1972"
        },
        {
        question: "En quelle année l'Irlande du Sud, alors britannique, est-elle devenue indépendante ?",
        answers: ["1921", "1911", "1901", "1931"],
        correct: "1921"
        },
        {
        question: "En quelle année a eu lieu la Conférence de Bandung pour la décolonisation ?",
        answers: ["1955", "1965", "1945", "1975"],
        correct: "1955"
        },
        {
        question: "Quelle est l'année de l'abdication de Guillaume II et de l'exécution du tsar Nicolas II ?",
        answers: ["1918", "1928", "1938", "1908"],
        correct: "1918"
        },
        {
        question: "Quelle est l'année du putsch manqué d'Hitler et de la faillite de l'économie allemande ?",
        answers: ["1923", "1933", "1943", "1913"],
        correct: "1923"
        },
        {
        question: "En quelle année les Britanniques ont-ils quitté l'Inde, ancienne colonie d'Asie ?",
        answers: ["1947", "1957", "1937", "1967"],
        correct: "1947"
        },
        {
        question: "La République Populaire de Chine fut proclamée en quelle année ?",
        answers: ["1949", "1939", "1929", "1919"],
        correct: "1949"
        },
        {
        question: "Quand Churchill a-t-il dit : « Nous sommes en face d'une catastrophe de première grandeur » ?",
        answers: ["1938", "1948", "1958", "1928"],
        correct: "1938"
        },
   ],

};
