/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto. */

//* recupero elementi html
var studentsInfo = document.getElementById('students-info');
var studentsName = document.getElementById('nome');
var studentsSurname = document.getElementById('cognome');
var studentsAge = document.getElementById('eta');

//* Creazione oggetto students
var students = {
    name: 'Daniele',
    surname: 'Pipino',
    age: 21,
};

//* Creazione del ciclo che permette di stampare le proprietà dell'oggetto
var text = '';
for (var key in students) {
    text += key + ' ' + students[key] + ' ';
}

studentsInfo.innerText = text;