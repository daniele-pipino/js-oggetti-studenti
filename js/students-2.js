/*ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//* --------------------------------SUDDIVIDIONE DELLA TRACCIA------------------------------

//* 1- Creare un array di oggetti studenti
//* 2- Creare un ciclo for in per girare nell'array di oggetti
//* 3- Creare 3 prompt che permettano all'utente di inserire un nuovo oggetto studente nella lista con nome cognome ed età
//* 4- Stampare tutti i dati degli utenti in pagina
//* --------------------------------SVOLGIMENTO TRACCIA---------------------------------------

// recupero elementi html
var studentsName = document.getElementById('nome');
var studentsSurname = document.getElementById('cognome');
var studentsAge = document.getElementById('eta');
// Creazione array di studenti 

var students = [
    // vari studenti
    {
        nome: 'Gianni',
        cognome: 'Palaggiano'
    },
    {
        nome: 'Daniele',
        cognome: 'Pipino',
    },
    {
        nome: 'Massimo',
        cognome: 'Saracino'
    }

]

// Creazione dei prompt

var studentName = prompt('Inserisci il nome del nuovo studente');
//todo Validazione da fare
var studentSurname = prompt('Inserisci il cognome del nuovo studente');
//todo Validazione da fare
var studentAge = parseInt(prompt("Inserisci l'eta del nuovo studente"));
//todo Validazione da fare

// Dati nuovo studente
var newStudent = {

    nome: studentName,
    cognome: studentSurname,
    age: studentAge,

}

// Inserimento nuovo utente nella lista di quelli gia esistenti
students.push(newStudent);
