/* 
Activité : gestion des contacts
*/
console.log("Bienvenue dans le gestionnaire des contacts") //affichage de menu de bienvinue


var Contacts = { // Création d'un classe prototype pour tout les contactes
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function () { // fonction de déscription de cotacte
        var description = "Nom: " + this.nom.toUpperCase() + "\n" + "Prenom: " + this.prenom;
        return description;
    }
};
// Creation de deux objets par defaut et initialisation d'un objet qui sera crée dans la fonction createContact
var contact1 = Object.create(Contacts);
contact1.init("Nelsonne", "Mélodie");

var contact2 = Object.create(Contacts);
contact2.init("Lévisse", "Carole");

var addContact = Object.create(Contacts);

function createContact() { // Ici je crée la fonction qui va ajouter chaque nouveau contact dans l'objet allContacts
    for (var i = 0; i < allContacts.length; i++) {
        this.nom = "Entrez votre nom: ";
        this.prenom = "Entrez votre prenom: ";
        addContact.init(prompt(this.nom), prompt(this.prenom));
        allContacts.push(addContact.decrire());
        // console.log(allContacts); decommenter pour afficher le tableau avec les contactes
        break;
    }
}



function action() { // Fonction simple qui affiche les options disponibles 
    var optionONe = " 1: Lister les contacts\n";
    var optionTwo = "2: Ajouter un nouveau contact\n";
    var optionThree = "0: Quitter\n";
    console.log(optionONe, optionTwo, optionThree);
}

var allContacts = []; // Je crée un objet vide qui sera rempli grâce la fonction createContact
allContacts.push(contact1.decrire()); // J'insère les 2 contacts par defaut avec push
allContacts.push(contact2.decrire());



function showOptions() { // Fonction qui gère la boucle du programme en fonction de l'option et affiche les résultats
    while (option !== 0) {
        action();
        var option = prompt("Choisissez une action" ,"");// variable vide qui prend la valeur saissie par l'utilisateur
        if (option == "1") {
            console.log("Voici la liste de tout vos contacts:"); // Affiche la liste des contacts en foction le chox 1

            for (var i = 0; i < allContacts.length; i++) {
                console.log(allContacts[i]);
            }
            
        } else if (option == "2") {
            createContact(); // Appele la fonction qui crée le contact en fonction le choix 2
            console.log("Le nouveau contact a été ajouté");

        } else if (option == "0") { // Quitte le programme et ferme la boucle en fonction le choix 0
            console.log("Au revoir");
            break;
        }
    }
}
showOptions(); // Appele de la fonction
