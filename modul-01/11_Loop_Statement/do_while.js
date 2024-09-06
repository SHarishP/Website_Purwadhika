// Do While Loop
// Syntax Do While Loop
// do {
//     // task
// } while (condition) {
    
// }
/* 
    Alur Proses WWhile Loop
    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition 
        a. condition : true, memproses task yang ada
        b. condition : false, keluar dari block loop
    3. Setelah menyelesaikan task yang ada di dalam block loop, memodifikasi nilai pada variabel init (modification)
    4. Kembali ke langkah 2
*/

/* 
    Alur Proses DO WHILE
    1. Membuat variabel init
    2. Menjalankan task, menjalankan modification
    3. Evaluasi Condition
        a. condition : true, kembali ke step 2
        b. condition : false, keluar dari block do while
*/

// Menampilkan angka 1 - 5 dengan DO While
let number = 1;
do {
    console.log(`Number Do While: ${number}`);
    number++
} while (number <= 5);
console.log(`End of Do While`);

// Menampilkan angka 1 - 5 dengan While

number = 1;
while (number <= 5) {
    console.log(`Number While ${number}`);
    number++
}
console.log(`End of While`);

// Perbedaan DO WHILE dan WHILE adalah ketika init sudah false, maka DO WHILE akan menjalankan task terlebih dahulu, baru kemudian cek kondisi

// Kapan menggunakan Do WHILE dan kapan menggunakan WHILE?
// TIDAK ADA KONDISI KHUSUS kapan penggunaan DO WHILE maupun WHILE

// Menampilkan angka GANJIL DAN GENAP pada DO WHILE
console.log('\nMemunculkan GANJIL dan GENAP menggunakan DO WHILE');
let _num = 0;
let maxNum = 15;
do {
    if (_num % 2 === 1) {
        console.log(`${_num} adalah GANJIL`);
    } else {
        console.log(`${_num} adalah GENAP`);
    }
    _num++;
} while (_num <= maxNum);