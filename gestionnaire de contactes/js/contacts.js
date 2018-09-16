/* 
Activité : gestion des contacts
*/
console.log("Bienvenue dans le gestionnaire des contacts")


var Contacts = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function () {
        var description = "Nom: " + this.nom.toUpperCase() + "\n" + "Prenom: " + this.prenom;
        return description;
    }
};

var contact1 = Object.create(Contacts);
contact1.init("Nelsonne", "Mélodie");

var contact2 = Object.create(Contacts);
contact2.init("Lévisse", "Carole");

var addContact = Object.create(Contacts);

function createContact() {
    for (var i = 0; i < allContacts.length; i++) {
        this.nom = "Entrez votre nom: ";
        this.prenom = "Entrez votre prenom: ";
        addContact.init(prompt(this.nom), prompt(this.prenom));
        allContacts.push(addContact.decrire());
        break;
    }
}



function action() {
    var optionONe = " 1: Lister les contacts\n";
    var optionTwo = "2: Ajouter un nouveau contact\n";
    var optionThree = "0: Quitter\n";
    console.log(optionONe, optionTwo, optionThree);
}

var allContacts = [];
allContacts.push(contact1.decrire());
allContacts.push(contact2.decrire());


function showOptions() {
    while (option !== 0) {
        action();
        var option = Number(prompt("Choisissez une action"));
        if (option === 1) {
            console.log("Voici la liste de tout vos contacts:");

            for (var i = 0; i < allContacts.length; i++) {
                console.log(allContacts[i]);
            }
            
        } else if (option === 2) {
            createContact();
            console.log("Le nouveau contact a été ajouté");

        } else if (option === 0) {
            console.log("Au revoir");
            break;
        }
    }
}
showOptions();
