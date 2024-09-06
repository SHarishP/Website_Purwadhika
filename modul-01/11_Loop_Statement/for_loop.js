// FOR LOOP
// Syntax FOR LOOP
/* 
    1. Membuat variabel sebagai acuan (init)
    2. Mengevaluasi condition
        a. true : menjalankan task (Langkah - 3)
        b. false : keluar dari Loop
    3. Menjalankan task
    4. Menjalankan modification, kembali ke langkah 2
*/

// for (init , condition, modification){
//     task
// }

// Menampilkan angka 1 sampai 5 dengan FOR LOOP
for (let i = 1; i <= 5; i++){
    console.log(`Number : ${i}`);
}

// Menampilkan angka genap
for (let i = 0; i <= 5; i++) {
    if(i % 2 === 0) {
        console.log(`${i} adalah GENAP`);
    }
}