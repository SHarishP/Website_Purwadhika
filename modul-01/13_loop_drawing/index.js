//////////////////////////
// Drawing Horizontal Line
//////////////////////////

/////////////////////////////////////
// Menjumlahkan 0 + 1 + 2 + 3 + 4 + 5
/////////////////////////////////////

// Variabel yang akan menyimpan hasil penjumlahan
let number = 0;
// Loop sebanyak Lima kali dengan menyediakan angka 1 - 5
for (let i = 0; i <= 5; i++) {
    // Menjumlahkan nilai terakhir 'number' dengan nilai 'i'
    number += i;
}
// Menampilkan hasil penjumlahan
console.log(number);

///////////////////////////
// Membuat Garis Horizontal
///////////////////////////

// *****
console.log('\nMembuat Garis Horizontal')
// Variabel yang akan menampung hasil akhir
let stars = '';
// Loop sebanyak Lima kali
for (let i = 0; i < 5; i++) {
    // Akan menambahkan nilai terakhir pada variabel dengan Satu bintang
    stars += ' * ';
}
// Menampilkan hasil akhir dari Variabel Stars
console.log(stars);

/////////////////////////
// Membuat Garis Vertical
/////////////////////////
console.log('\nMembuat Garis Vertical');
let vertStars = '';
// Loop sebanyak Lima kali
for (let i = 0; i < 5; i++) {
    // Setiap Loop akan menambahkan '*' dan '\n'
    vertStars += ' * ' + '\n';
}
// Menampilkan hasil akhirnya
console.log(vertStars);

//////////////////
// Membuat Persegi
//////////////////
console.log('\nMembuat Persegi');
let persegi = '';
let rows = 3;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++){
        persegi += ' * '
    }
    persegi += '\n'
}
console.log(persegi);

/////////////////////////////
// Membuat Segitiga Siku-Siku
/////////////////////////////
console.log('\nMembuat Segitiga Siku - Siku');
// Konsep
// *
// * *
// * * *
// * * * *
// * * * * *
let segSiku = ''
let baris = 5;
// Loop i digunakan untuk menentukan banyaknya baris
for (let i = 1; i <= baris; i++) {
    // Loop j digunakan untuk menentukan banyaknya bintang per baris
    for (let j = 1; j <= i; j++) {
        segSiku += ' * ';
    }
    segSiku += '\n';
}
console.log(segSiku);