/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto. */


//* Creazione oggetto students

var students = {
    name: 'Daniele',
    surname: 'Pipino',
    age: 21,
};

//* Creazione del ciclo che permette di stampare le proprietà dell'oggetto

for (var key in students) {
    console.log(key, students[key]);
}