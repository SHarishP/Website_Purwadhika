// Variabel-variabel yang ada di dalam Object, disebut dengan Property. 
// Function adalah kode yang memiliki sepasang tanda kurung. 
// Contoh funtion adalah typeof()
// Object juga memiliki funtion yang disebut juga dengan Method. 
// Contoh method adalah console.log(). Ini berarti object Console mempunyai Method yang bernama log()

// Object Math
// Object Math mempunyai properthy PI
Math.PI;
console.log(Math.PI);
// Object Math mempunyai method abs() untuk membuat number menjadi bilangan absolut
// Hasil dari Math.abs() bisa disimpan dalam variabel
var num1 = -2.5;
var result1 = Math.abs(num1);
console.log(result1);
// Power, merupakan method dari object Math, untuk memangkatkan value
var powResult = Math.pow(8,3);
console.log(powResult);
// sqrt (Square Root), merupakan method dari Object Math untuk mengakar 2 kan sebuah number
var sqrtResult = Math.sqrt(64);
console.log(sqrtResult);
// cbrt (Cube Root), merupakan method dari Object Math untuk mengakar 3 kan sebuah number
var cbrtResult = Math.cbrt(8);
console.log(cbrtResult);
// round, membulatkan number sesuai aturan matematika
var round1 = Math.round(4.7);
var round2 = Math.round(4.2);
console.log("Nilai round1 = " +round1+ " dan nilai round2 ="+round2);
// floor, selalu membulatkan number kebawah
var floor1 = Math.floor(4.9);
var floor2 = Math.floor(4.4);
console.log("Nilai floor1 = " +floor1+ " dan nilai floor2 ="+floor2);
// ceiling, selalu membulatkan number keatas
var ceiling1 = Math.ceil(4.6);
var ceiling2 = Math.ceil(4.2);
console.log("Nilai ceiling1 = " +ceiling1+ " dan nilai ceiling2 ="+ceiling2);
// Max, method Math untuk mencari nilai maksimal
var maxRes = Math.max(1,3,5);
console.log("Nilai maximal adalah "+maxRes);
// Min, Metho Math untuk mencari nilai minimal 
var minRes = Math.min(12,5,99);
console.log("Nilai minimal adalah "+minRes);

// Math.random() adalah method pada object Math untuk memberikan nilai random antara 0.0 - 9.9, dengan 18 digit dibelakang koma
console.log("\nPenggunaan Math.random()");
console.log("Dengan menggunakan Math.random(), maka akan muncul nilai 0.0 - 9,9 : " + Math.random());
// mengambil angka random dari 0-9
console.log("Mengambil angka random dari 0-9");
var ran1 = Math.random() * 10;
ran1 = Math.floor(ran1);
console.log("Maka nilai yang muncul dari 0-9 adalah :" +ran1);
// mengambil angka random dari 1-10
console.log("Mengambil angka random dari 1-10")
var ran2 = Math.random() *10;
ran2 = Math.floor(ran2) +1;
console.log("Maka nilai yang muncul dari 1-10 adalah :" +ran2);
// mengambil angka random dari 1-100
console.log("Mengambil angka random dari 1-100")
var ran3 = Math.random() *100;
ran3 = Math.floor(ran3) + 1;
console.log("Maka nilai yang muncul dari 1-100 adalah :" +ran3);


