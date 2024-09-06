/* Tugas 8 - Setiawan Harish P */
// Membuat variabel harga buah-buahan, input, dan total harga
let harApel, harAnggur, harJeruk, inpApel, inpAnggur, inpJeruk, sumApel, sumAnggur, sumJeruk, sumAll;

// Memasukkan harga buah-buahan
harApel = 10000;
harAnggur = 15000;
harJeruk = 20000;

// Membuat input User
inpApel = prompt("Masukkan Jumlah Apel");
inpAnggur = prompt("Masukkan Jumlah Anggur");
inpJeruk = prompt("Masukkan Jumlah Jeruk");

// Menghitung total harga tiap buah
sumApel = harApel * inpApel;
sumAnggur = harAnggur * inpAnggur;
sumJeruk = harJeruk * inpJeruk;

// Menghitung total harga
sumAll = sumApel + sumAnggur + sumJeruk;

// Memunculkan di window.alert
window.alert(`Untuk ${inpApel} buah Apel, ${inpAnggur} buah Anggur, dan ${inpJeruk} buah Jeruk,
    anda harus membayar Rp. ${sumAll},-`);
