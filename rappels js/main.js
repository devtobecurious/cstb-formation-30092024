// Les plaies
// 1. pas typé, encourage meme des variables globales
// 2. interprété, on va souvent détecter les erreurs à l'exécution
// 3. le web, c'est N navigateurs, donc N possibles supports différents du js, et chaque version de chaque navigateur supporte une version du js
// 4. this, qui n'est pas objet !
// 5. undefined => pas null, tout est undefined de base
// 6. on peut rajouter des attributs à la volée

const wookieeAge = 1;
// wookieeAge = 2; // on ne peut pas car constante
let wookieeAgeBis = 2;
wookieeAgeBis = 'mon age';

function afficherAge(name) {
    console.info(name);
    console.info(this); 

    this.name = name;
}

afficherAge(1);
// afficherAge({ name: 'Chewie' });// this : c'est Window
const afficher = new afficherAge(2);
console.log('afficher', afficher);