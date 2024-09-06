/////////////////////
/* SORT (ADVANCES) */
/////////////////////

/* String */
let words = ['red', 'apple', 'rain', 'cat', 'green'];
words.sort();
console.log(words);

/* Numbers */
let numbers = [23, 47, 13, 3, 9, 240];
numbers.sort(); 
console.log(numbers); 
/* Jika kita melakukan sorting number seperti berikut, menghasilkan nilai yang salah
    Karena method sort mengurutkan seperti karakter string
*/
//Jika ingin memalkukan sort number secara ascending, lakukan berikut :
/* 
    Membuat callback function yang akan dimasukkan ke array.sort() dengan ketentuan :
    1. Callback function memiliki dua parameter;
    2. Callback function harus me-return nilai dari salah satu kondisi :
        1. return < 0, a akan berada didepan b
        2. return 0, posisi a dan b tidak berubah
        3. return > 0, b akan berada didepan a
*/
console.log('\nSort Number yang benar');
let asc = (a, b) => {
    return a - b;
}
let dsc = (a, b) => {
    return b - a;
}
numbers.sort(dsc);
console.log(numbers);

/////////////////////////////////////////////////////////////////////////////////////////////////
// Buat Function yang akan mensorting array 2 dimensi ini berdasarkan nama, dan umur (ascending)/
// Jika ada nama yang sama, maka gunakan umurnya.
// let persons = [
//     ['John', 44],
//     ['John', 43],
//     ['Baby', 21],
//     ['Justin', 29],
// ]
/////////////////////////////////////////////////////////////////////////////////////////////////

/* Clue : comparison between character */

let persons = [
    ['John', 44],
    ['John', 43],
    ['Baby', 21],
    ['Justin', 29],
]

let personsSort = (arr) => {
    arr.sort((a, b) => {
        if(a[0] < b[0]) {
            return -1
        } else if (a[0] > b[0]) {
            return 1
        } else {
            return a[1] - b[1]
        }
    })
    return arr;
};

let result = personsSort(persons);
console.table(result);