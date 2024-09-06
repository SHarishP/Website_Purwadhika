////////////////////////////////////////////
// SLICE : Mengcopy sebagian data dari Array
////////////////////////////////////////////

/* 
    .slice() syntax
    array.slice(start index, end index)
    start index : index awal dari data yang akan dicopy
    end index : index akhir dari data yang akan dicopy (tidak termasuk / tidak ikut tercopy)
*/

let fruits = ['apple', 'banana', 'cherry', 'lemon', 'watermelon'];
console.table(fruits);
// copy banana dan cherry
let banCherry = fruits.slice(1,3); // index ke 3 "lemon", tidak ikut tercopy
console.table(banCherry);
// copy banana, cherry, dan watermelon
let banCheMon = fruits.slice(2,5);
/* 
    Jika kita hanya menulis start indexnya saja, maka akan mengcopy data array dari start index sampai dengan index terakhir
*/
banCheMon = fruits.slice(2); // 2 adalah start index
console.table(banCheMon);

/* 
    Method yang mengubah nilai asli :
        1. push
        2. pop
        3. shift
        4. unshift
        5. splice

    Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru) :
        1. slice
        2. includes
        3. indexof
*/

////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
////////////////////////////////////////////////////////////////////
/* 
    Note :
        Bersifat CASE SENSITIVE
*/
console.log('\nPenggunaan Includes pada Array');

let colors = ['black', 'grey', 'white', 'red', 'green', 'blue'];
let colRed = colors.includes('red');
console.log(colRed);
let colPurple = colors.includes('purple');
console.log(colPurple);
let colRedCapital = colors.includes('RED');
console.log(colRedCapital);

/////////////////////////////////////////////////////
// INDEXOF : Mencari Index dari suatu data pada array
/////////////////////////////////////////////////////
/* 
    Note :
        Bersifat CASE SENSITIVE
*/
console.log('\nPenggunaan INDEXOF pada Array');
colors = ['black', 'grey', 'white', 'red', 'green', 'blue'];
let idxRed = colors.indexOf( 'red');
console.log(idxRed)
let idxGrey = colors.indexOf( 'grey');
console.log(idxGrey)
// Jika data yang dicari tidak ada. IndexOf akan mengembalikan nilai -1
let idxPurple = colors.indexOf('purple');
console.log(idxPurple);

