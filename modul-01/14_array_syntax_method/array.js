///////////////
// Syntax Array
//////////////

let things = ['books', 'pen', 'clock'];
// Menampilkan Array dalam bentuk tabel di console.
console.table(things);

let random = [23, 'Michael', true, 3.14];

//////////////
// Access Data
//////////////

console.log(`things 0 : ${things[0]}`);
console.log(`random 0 : ${random[0]}`);
console.log(`random 1 : ${random[1]}`);

//////////////
// Change Data
//////////////

console.table(things);
things[0] = 'paper';
things[2] = 'shoes';
console.table(things);

///////////////////
// Create New Index
///////////////////

things[3] = 'towel';
console.table(things);

things[5] = 'glass';
console.log(things);

//////////////////
// Length of Array
//////////////////

console.log(`Lenght dari Array things ; ${things.length}`);