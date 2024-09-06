// Loop Statement
// Adalah sebuah statement yang memungkinkan kita untuk mengulang suatu task
// While / Do While / For Loop

/* 
    Aturan Utama
    Berlaku untuk segala jenis Loop : while, do while, for

    "Selama 'condition' bernilai 'true', maka 'task' yang ada pada Loop akan dikerjakan"
*/

/* 
    Alur Proses
    Alur A : While dan For -> Mempunyai alur proses yang sama
    Alur B : Do While
*/

// While Loop
/* Syntax
    while (condition) {
        task
    }
*/

// Menampilkan angka 1 - 5 menggunakan while Loop
/* 
    Alur Proses WWhile Loop
    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition 
        a. condition : true, memproses task yang ada
        b. condition : false, keluar dari block loop
    3. Setelah menyelesaikan task yang ada di dalam block loop, memodifikasi nilai pada variabel init (modification)
    4. Kembali ke langkah 2
*/
let _num = 1; // merupakan initial (init)
while (_num <= 5){ //merupakan condition
    // Task
    console.log(`Number : ${_num}`);
    _num++
}
console.log("Selesai Loop");

// While Loop Dua Langkah
console.log('\nWhile Loop dua langkah');
// Membuat variabel init
var number = 0;
// Mengevaluasi condition
while (number <= 10){
    // Menampilkan informasi pada terminal / console
    console.log(`Number : ${number}`);
    // Menjumlahkan 'number'dengan dua
    number += 2;
    // Kembali mengevaluasi condition
}
// Dijalankan setelah selesai keluar dari Loop
console.log('Selesai Loop');

// // Menampilkan nilai genap
// // Nilai genap adalah nilai yang 'habis' dibagi dua
// // Jika dimoduluskan dua, hasilnya adalah 0
// console.log('\nMemunculkan bilangan genap');
// // init
// let numInit = 0;
// // condition
// while (numInit <= 5){
//     // Evaluasi nilai, apakah merupakan bilangan genap
//     // Jika setelah dimodoluskan 2 menghasilkan nol, maka nilai terssebut termasuk bilangan genap
//     if(numInit % 2 === 0){
//         // Menampilkan bilangan genap pada console / terminal
//         console.log(`${numInit} adalah bilangan genap`);
//     }
//     // modification
//     // Menjumlhkankan 'number' dengan satu
//     numInit++
// }
// // Dijalankan setelah keluar dari loop
// console.log('Selesai Loop');

// // Menampilkan niai ganjil
// // Nilai ganjil adalah nilai yang ' tidak habis' dibagi dua
// // Jika dimoduluskan dua, hasilnya adalah 1
// console.log('\nMemunculkan bilangan ganjil');
// // init
// let numInit2 = 0;
// // condition
// while (numInit2 <= 5){
//     // Evaluasi nilai, apakah merupakan bilangan ganjil
//     // Jika setelah dimodoluskan 2 menghasilkan 1, maka nilai terssebut termasuk bilangan ganjil
//     if(numInit2 % 2 !== 0){
//         // Menampilkan bilangan genap pada console / terminal
//         console.log(`${numInit2} adalah bilangan ganjil`);
//     }
//     // modification
//     // Menjumlhkankan 'number' dengan satu
//     numInit2++
// }
// // Dijalankan setelah keluar dari loop
// console.log('Selesai Loop');

// Menampilkan nilai Ganjil dan Genap
console.log('\nMemunculkan bilangan GANJIL dan GENAP');
let numInit = 0;
while (numInit <= 5){
    if (numInit % 2 == 1) {
        console.log(`${numInit} adalah GANJIL`);
    } else {
        console.log(`${numInit} adalah GENAP`);
    }
    numInit++
}
