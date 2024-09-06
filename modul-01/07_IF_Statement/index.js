// Jika condition bernilai true, task akan dijalankan
// if (condition) {
//     task
// }

// Jika kondisi hujan : kenakan jas hujan
let rain = true;
// Jika rain bernilai true, jalankan task
if(rain){
    console.log("Kenakan Jas Hujan");
}

// Jika tidak bersalah : dibebaskan
let guilty = false;
// Untuk membalikkan nilai true, menggunakan negasi "Not"
if (!guilty){
    /* Maksud dari kondisi ini adalah apabila tidak bersalah, maka akan dibebaskan
    jika dilihat dari global value guilty = false, berarti orang itu tidak bersalah.
    Tetapi If statement hanya akan menjalankan perintah if jika condition bernilai "true".
    Maka diperlukan oprator negasi  */
    console.log(`Guilty : ${guilty}`);
    /* Dilihat dari console.log nilai guilty tetap "false" */
    console.log("Anda dibebaskan");
}

// Jika umur sudah mencapai 18 atau lebih : dapat membuat SIM
let age = 18;
// Jika age > 18 atau age == 18 keatas
if (age >=18){
    console.log("Permohonan diterima, silahkan lanjutkan ke proses berikutnya.");
    
}