//////////////////////////////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara ascending (0 - 9 / a - z)
//////////////////////////////////////////////////////////////////////

let animals = ['anoa', 'dragon', 'cameleon', 'bird', 'cat'];
console.table(animals);
animals.sort(); // Tidak membutuhkan variabel untuk menampung hasil sort
console.table(animals);

// Jika .sort() digunakan pada number, hasilnya akan aneh. Mak dari itu dibutuhkan penggunaan syntax yang lain
let numbers = [32, 11, 41, 2]
numbers.sort();
console.table(numbers); // nilainya akan menjadi 11, 2, 32, 41

///////////////////////////////////////////////
// REVERSE : Membalikkan urutan data pada array
///////////////////////////////////////////////
console.log('\nMembalikkan urutan data pada array menggunakan REVERSE');
let days = ['sunday', 'monday', 'tuesday', 'wednesday'];
console.table(days);
days.reverse();
console.table(days);

////////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pada array dengan karakter tertentu
////////////////////////////////////////////////////////////////
console.log('\nMenggabungkan data pada array dengan JOIN');
days = ['sunday', 'monday', 'tuesday', 'wednesday'];
// Menggabungkan data pada array dengan dengan '-' 
let joinDash = days.join(' - ');
console.log(joinDash);
let joinComma = days.join(', ');
console.log(joinComma);

////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
////////////////////////////////////////////////////////
console.log('\nPenggunaan CONCAT pada array')
let fruits = ['apple', 'banana', 'cherry', 'lemon', 'watermelon'];
animals = ['anoa', 'dragon', 'cameleon', 'bird', 'cat'];
days = ['sunday', 'monday', 'tuesday', 'wednesday'];
// days + fruits
let dayFruits = days.concat(fruits);
console.table(dayFruits);
// fruits + animals
let fruitAnim = fruits.concat(animals);
console.table(fruitAnim);
// days = animals + fruits
let allOfThem = days.concat(animals, fruits);
console.table(allOfThem);

