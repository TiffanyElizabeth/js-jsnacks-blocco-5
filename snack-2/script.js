const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// estrai tutti i nomi (crea un nuovo array - MAP)
const names = people.map(people => people.name);

// stampa in console tutti i nomi
console.log(names.join( ));