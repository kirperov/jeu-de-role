// TODO : ajoutez ici la définition des objets nécessaires


var Client = { // création d'un objet qui sera un prototype pour les autres
    initClient: function (name, argent) {// initialisation d'une méthode pour initialiser les parametres de nos clients
        this.name = name;
        this.argent = argent;
    }
}


var CompteBancaire = Object.create(Client);// création d'un objet qui sera un prototype pour les comptes bancaires qui est lui même est crée à partir d'un objet prototype Client


var compte1 = Object.create(CompteBancaire); // création d'un compte 1 qui sera un compte à débiter
compte1.initCB = function(name, argent) {
    this.initClient(name, argent);
}

compte1.initCB("Alex", 100); // attribution des données à compte 1 


var CompteEpargne = Object.create(Client); // Création d'un compte d'epargne


var compte2 = Object.create(CompteEpargne); // création d'un compte 2 et affectation d'un nouvau paramatre le taux d'intetet 
compte2.initCE = function (name, argent, interets) { // affectation d'un nouvau parametre interets
    this.initClient(name, argent);
    this.interets = interets; // déclaration de parametre interets
}


compte2.initCE("Marco", 50, 0.05); // Initialisation des données à compte 2

CompteBancaire.decrire = function () { // création d'un objet qui décrit le client de compte bancaire
    var description = "Titulaire " + this.name + " ,solde " + this.argent; // déclaration d'une variable qui garde tout les données de ce compte
    return description;// le retour de résultat de cette variable
}

CompteEpargne.decrire = function() { // Créatino d'un objet pour décrire le compte d'epargne
    var description = "Titulaire " + this.name + " ,solde " + this.argent; // attribution de données de ce compte d'epargné pour recuperer les données
    return description;// retour de cestte variable pour que la fonction soit utilisable
}


console.log("Voici l'état initial des comptes :"); // affichage de l'etat de début des comptes 

console.log(compte1.decrire()); // affichage de compte 1

console.log(compte2.decrire()); // affichage de compte 2


var montant = Number(prompt("Entrez le montant à transférer entre les comptes :")); // variable qui garde la valeur saisie par l'utilisateur

CompteBancaire.debiter = function () { // fonction qui calcule le montant à débiter sur le compte 1 
    compte1.argent = compte1.argent - montant;
}

compte1.debiter(montant); // l'application de cette fontion qui execute le code de calcule

CompteEpargne.crediter = function () { // création d'une fonction qui calcule le montatn à affecter sur le compte2 
    compte2.argent += montant;
}

compte2.crediter(montant); // execution de la fonction


// Calcule et ajoute les intérêts au solde du compte
CompteEpargne.ajouterInterets = function () { // création de la fonction avec le calcul de l'interet à affecter à un compte 2 donc d'epargne
    compte2.argent += compte2.interets * compte2.argent ;
    
}
compte2.ajouterInterets(); // application de la fonction

// Affichage des comptes avec les nouvelles valeurs 
console.log("Voici l'état final des comptes après transfert et calcul des intérêts :"); 

console.log(compte1.decrire());

console.log(compte2.decrire());
