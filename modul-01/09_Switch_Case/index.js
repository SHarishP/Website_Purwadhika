// Switch Case
// 1. Dapat memiliki condition lebih dari 1
// 2. Terdapat block code yang akan dijalankan saat semua conndition bernilai false (mirip dengan else)
// Syntax penulisan Switch Case
// Menyaman nilai yang disimnpan pada variabel "key" dengan "value" yanga da pada "case"
let tech = "CSS";
switch(tech){
    case "HTML" :
        // Task 1
        console.log("HTML berfungsi untuk membuat kerangka website");
        break //Jika tidak ada break, maka switch akan terus menjalankan task dibawahnya.
    case "CSS" :
        // Task 2
        console.log("CSS berfungsi untuk style website");
        break 
    case "Javascript" :
        console.log("Javascript berfungsi untuk mengolah data");
        break 
    default :
        // Task Default
        console.log(`Informasi mengenai ${tech} tidak ditemukan`);

} 
console.log("Keluar dari switch");

// menentukan bilangan ganji genap
let num = 99;
console.log("\nPenggunaan Switch yang benar")
switch (true) { //switch ini hanya akan melihat 2 nilai boolean true dan false. Maka hanya akan ada 2 Task (1Case dan default)
    case num % 2 === 0: //disini akan mengecek apakan "num % 2 === 0""akan tetap True? Jika tetap True akan menjalankan task dibawahnya
        console.log(`${num} merupakan bilangan GENAP`);
        break;
    default:
        console.log(`${num} merupakan bilangan ganjil`)
        break;
}
// Kenapa switch statement berikut salah? Karena :
console.log("\nPenggunaan Switch yang salah")
switch (num){
    case num % 2 === 0:
        console.log(`${num} merupakan bilangan GENAP`);
        break
    case num % 2 !== 0:
        console.log(`${num} merupakan bilangan GANJIL`);
        break
    default :
        console.log(`${num}, nilai tidak diketahui`);
}
/* Pada switch diatas, switch melihat nilai num. Kemudian switch melihat case1 dan 2, yang meruakan thruty value bernilai "TRUE".
Sedangkan switch tidak memahami num. Maka switch akan langsung menjalankan default.*/