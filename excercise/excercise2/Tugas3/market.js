/* Tugas 8 - Setiawan Harish P */
// Membuat variabel harga buah-buahan, input, dan total harga
let harApel, harAnggur, harJeruk, inpApel, inpAnggur, inpJeruk, sumApel, sumAnggur, sumJeruk, sumAll;

// Menambahkan variabel stock untuk tiap produk
let stockApel, stockAnggur, stockJeruk;

// Memasukkan harga buah-buahan
harApel = 10000;
harAnggur = 15000;
harJeruk = 20000;

// Memasukkan jumlah stock buah-buahan
stockApel = 10;
stockAnggur = 8;
stockJeruk = 5;

// Membuat input User
inpApel = parseInt(prompt("Masukkan Jumlah Apel"));
inpAnggur = parseInt(prompt("Masukkan Jumlah Anggur"));
inpJeruk = parseInt(prompt("Masukkan Jumlah Jeruk"));

// Logic Statement terkait quantity
// Penentuan Quantity Apel
if(inpApel > stockApel){
    inpApel = stockApel;
    window.alert(`Stock apel tersisa ${stockApel}`);
} else if (inpApel <= stockApel){
    inpApel = inpApel;
}else {
    window.alert (`Wrong input`);
}
// Penentuan Quantity Anggur
if(inpAnggur >= stockAnggur){
    inpAnggur = stockAnggur;
    window.alert(`Stock anggur tersisa ${stockAnggur}`);
} else if(inpAnggur <= stockAnggur){
    inpAnggur = inpAnggur;
} else {
    window.alert(`Wrong input`);
}
// Penentuan Quantity Jeruk
if (inpJeruk >= stockJeruk){
    inpJeruk = stockJeruk;
    window.alert(`Stock jeruk tersisa ${stockJeruk}`);
} else if(inpJeruk <= stockJeruk){
    inpJeruk = inpJeruk;
} else {
    window.alert(`Wrong input`);
}

// Menghitung total harga tiap buah
sumApel = harApel * inpApel;
sumAnggur = harAnggur * inpAnggur;
sumJeruk = harJeruk * inpJeruk;

// Menghitung total harga
sumAll = sumApel + sumAnggur + sumJeruk;

// Memunculkan di window.alert
window.alert(`Untuk ${inpApel} buah Apel, ${inpAnggur} buah Anggur, dan ${inpJeruk} buah Jeruk,
    anda harus membayar Rp. ${sumAll},-`);

// Menerima input dari User untuk pembayaran
let bayarUser = parseInt(prompt('Masukkan nominal pembayaran anda (Rp)'));

if(bayarUser < sumAll){
    window.alert(`Pembayaran dibatalkan. Uang yang harus anda bayarkan kurang Rp. ${sumAll - bayarUser},-`);
} else if(bayarUser > sumAll){
    window.alert(`Terimakasih. Uang kembali untuk anda Rp. ${bayarUser - sumAll}`);
} else if(bayarUser = sumAll){
    window.alert(`Terimakasih`);
}else {
    window.alert(`Wrong Input`);
}

