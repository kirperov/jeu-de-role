var Personnage = { // Modèle pour tous les personnages
    init: function (nom, sante, force) { // on crée une mèthode pour dire comment on va créer un Personnage
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },

    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + "attaque " + cible.nom + "et fait " + degats + " de dégâts ");

            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
            console.log(cible.nom + "a encore " + cible.sante + " de santé");
        } else {
            cible.sante = 0;
            console.log(cible.nom + "est mort.");
        }
        } else {
            console.log(this.nom + "ne peut pas attaquer car " + cible.nom + " est mort!");
        }

    }
};

// Creation Objet Player avec une prototype Personnage pour pouvoir créer des joueurs
var Player = Object.create(Personnage); // Player prend une modèle Personnage
Player.initPlayer = function (nom, sante, force) { // On initialise une mèthode
    this.init(nom, sante, force); // on ajoute en propriété equvalent this.nom = nom; this.sante = sante; this.force = force;
    this.xp = 0; // on ajoute une nouvelle propriété pour cette objet uniquement
};

//création d'une déscription de l'objet pour les joueurs
Player.decrire = function () {
    var description = this.nom + " a " + this.sante + " de santé, " + " a " + this.force + " de force " + " et a " + this.xp + " de XP "; // defonotion de la variable qui prend les données des joueurs
    return description; // retourne une variable avec la description
};

// Combattre un adversaire 
Player.combattre = function (adversaire) {
    this.attaquer(adversaire); 
    if (adversaire.sante === 0) {
        console.log("l'ennemi " + adversaire.nom  + " est battu " + this.nom + " gagne " + adversaire.valeur + " de XP" );
        this.xp += adversaire.valeur;
    }
}

//Création d'un objet Adversaire qui va permettre de créer des monstres
var Adversaire = Object.create(Personnage); // Creation d'un objet Adversaire en utilisant le modèle Personnage
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) { // Initialisation d'une méthode comment l'Adversaire va être crée
    this.init(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

// Création d'un premiere joueur en utilisant un objet Player
var playerOne = Object.create(Player);
playerOne.initPlayer("Kirill ", 20000, 50); // Définition de nom, santé et force
// Player 1 describe
console.log(playerOne.decrire()); //Affichege de la déscription avec la fonction descrire


//Player 2 init 

var playerTwo = Object.create(Player);
playerTwo.initPlayer("John ", 2000, 40);
// Player 2 describe
console.log(playerTwo.decrire());


// Monstre init
var monstre = Object.create(Adversaire);
monstre.initAdversaire("Kzerg ", 80, 23, "Orque", 10);
// describe Monstre
console.log("Le monstre " + monstre.nom + " arrive " + "ça race est " + monstre.race);


monstre.attaquer(playerOne);
monstre.attaquer(playerTwo);

playerOne.combattre(monstre);
playerTwo.combattre(monstre);

console.log(playerOne.decrire());
console.log(playerTwo.decrire());