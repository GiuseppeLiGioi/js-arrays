const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = "Giuseppe";
teachers[3]=fourthTeacher;
for(let i=0; i < teachers.length; i++){
  console.log(teachers[i]); // il quarto nome sarà Giuseppe.
}

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const fifth = "Patrick";
teachers[4] = fifth;
for(let i=0; i < teachers.length; i++){
  console.log(teachers[i]); // il quinto nome sarà Patrick.
}

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher); //ultimo insegnate: Luca

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher); //primo insegnate: Nathan

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
for(let i=0; i < teachers.length; i++){
  console.log(teachers[i]); // ultimo nome: Vanessa.
}


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
for(let i=0; i < teachers.length; i++){
  console.log(teachers[i]); // primo nome: Sarah.
}

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;
for(let i=0; i < teachers.length; i++){
  if(teachers[i] === "Lewis"){
    const lewisIndex = i;
    console.log(lewisIndex); //indice di lewis nell'array teachers: 5.

  }

}


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length;
if(isTeachersEmpty > 0){
  console.log("l'array è pieno")
}
  else{
    console.log("l'array è vuoto")
  }
