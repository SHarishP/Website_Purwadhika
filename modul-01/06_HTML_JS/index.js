// Mengambil Input dari USER dengan menggunakan Prompt
var nama = prompt("Masukkan Nama Anda!");
var hoby = prompt("Masukkan Hoby Anda!");
var address = prompt("Masukkan Alamat Anda");

// Menggabungkan input menjadi satu kalimat
var word = `Hallo ${nama}\nHobby anda adalah ${hoby}\nCuaca hari ini di ${address}, sedang baik!`

// Menampilkan input user di console.log
console.log(nama);
console.log(hoby);
console.log(address);

// Menampilkan pesan dengan menggunakan windows.alert
window.alert(word);