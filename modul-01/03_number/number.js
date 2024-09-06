// Arithmatica Operation
var a, b, c;
a =23; b = 3; c=3.14; 

// Addition / Penjumlahan
var addOne = a+b+c;
console.log("Penjumlahan dari " +a+" + "+b+" + "+c +" adalah "+ addOne);

// Substraction / Pengurangan
var subOne = a-b-c;
console.log("\nPengurangan dari " +a+" - "+b+" - "+c +" adalah "+ subOne);

// Multiplication
var multOne = a*b*c;
console.log("\nHasil Perkalian dari " +a+" * "+b+" * "+c +" adalah "+ multOne);

// Divison / Pembagian
var divOne = a/b/c;
console.log("\nHasil pembagian dari " +a+" / "+b+" / "+c +" adalah "+ divOne);

// Perintah kurung buka dan kurung tutup
// Untuk mendahulukan operasi matematika, dapat juga menggunakan () contoh
var operasi = (a+b) - (a-b) * c;
console.log("\nHasil dari ("+a+" + "+b+") - ("+a+" - "+b+") * "+c+" adalah "+ operasi);


// Modulus
// Operasi Artitmatika untuk mencari hasil dari sisa pembagian

var modTwo = 10%2;
var modThree = 10%3;
var modFour = 10%4;
console.log("\nSisa hasil pembagian dari 10 % 2 adalah" + modTwo);
console.log("Sisa hasil pembagian dari 10 % 3 adalah" + modThree);
console.log("Sisa hasil pembagian dari 10 % 4 adalah" + modFour);

// Increment
// Increment adalah operasi Aritmatika untuk menambahkan 1 pada value
console.log("\nIncrement, nilai awal adalah "+a);
a++;
console.log("Nilai setelah increment pertama adalah " +a);
a++;
console.log("Nilai setelah increment kedua adalah " +a);

// Decrement
// Decrement adalah operasi aritmatika untuk mengurangi 1 pada value
console.log("\nDecrement, nilai awal adalah "+b);
b--;
console.log("Nilai setelah decrement pertama adalah "+b);
b--;
console.log("Nilai setelah decrement kedua adalah "+b);

