/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto. */

//* recupero elementi html
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

for (var key in students) {
    studentsName.innerText = students.name;
    studentsSurname.innerText = students.surname;
    studentsAge.innerText = students.age;
}