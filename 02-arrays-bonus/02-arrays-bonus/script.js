const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers=teachers.reverse();
for(let i=0; i<reversedTeachers.length; i++){
console.log(reversedTeachers[i]);
}



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// Creazione dell'array 'longNames' con solo i nomi di lunghezza >= 5
const longNames = teachers.filter(teacher => teacher.length >= 5);

console.log(longNames);






// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;