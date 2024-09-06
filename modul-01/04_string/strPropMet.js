// String juga mempunyai Property dan Method
var x = "Hello World!";
// .length ==> Property untuk menghitunng banyaknya karakter pada String
console.log(`Panjang dari String "Hello World" adalah ${x.length} karakter`);

// .indexOf() ==> Method untuk mengetahui suatu posisi karakter pada string yang dimulai dari Index 0
var searchIdx = 'W'
var resultOne = x.indexOf(searchIdx);
console.log(`Maka Index dari Karakter ${searchIdx} adalah ${resultOne}`);

// .substr(a,b) ==> Method untuk mengambil bagian karakter dari String, (a = start index, b = how many character)
var substrA = 6;
var lengthSub = 3;
var resultTwo = x.substr(substrA,lengthSub);
console.log(`Karakter yang diambil dari index ${substrA} sebanyak ${lengthSub} adalah ${resultTwo}`);

// .slice(a,b) ==> Method untuk mengambil bagian karakter dari String, (a = start index, b = end of index)
var sliceA = 2; 
var sliceEnd = 7;
var resultThree = x.slice(sliceA, sliceEnd);
console.log(`Karakter yang diambil dari index no-${sliceA} sampai dengan index no-${sliceEnd} adalah ${resultThree}`);

// .split('') ==> Method untuk memotong string menjadi Array
var resultFour = x.split(' ');
console.log(`Displit hingga membentuk array sbb:`);
console.log(resultFour);

// .toUpperCase() ==> Method untuk merubah String menjadi Uppercase semua
var resultFive = x.toUpperCase();
console.log(`Setelah menggunakan .toUpperCase menjadi ${resultFive}`);

// .toLowerCase() ==> Method untuk merubah String menjadi Lowercase semua
var resultSix = x.toLowerCase();
console.log(`Setelah menggunakan .toLowerCase menjadi ${resultSix}`);

// .replace('a','b') ==> Method untuk mereplace bagian dari string dengan karakter baru (a = karakter yang akan di replace, b = karakter yang mereplace)
// .replace(/l/g,'b') ==> Method untuk mereplace bagian dari string dengan karakter baru (l = karakter yang akan di replace, \g = global select , b = karakter yang mereplace)
var replacedChar = 'l';
var newChar = 'n'
var resultSeven = x.replace(replacedChar, newChar);
var result8 = x.replace(/l/g,newChar);
console.log(`Mereplace Character "${replacedChar}" dgn "${newChar}" sehingga menjadi ${resultSeven}`);
console.log(`Mereplace Character "l" dgn "${newChar}" sehingga menjadi ${result8}`);

// .include() ==> Method untuk mencari kata tertentu pada String dengen mengembalikan nilai boolean
var lookChar = "shit"
var result9 = x.includes(lookChar);
console.log(`Apakah karakter "${lookChar}" terdapat pada string "${x}", jawabannya ${result9}`);
