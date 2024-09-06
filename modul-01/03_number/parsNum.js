/* Parsing Type Data
    Adalah merubah tipe data yang mulanya string seperti "123.45" menjadi tipe data integer atau float
    Begitu juga sebaliknya, kita dapat mengubah value dengan tipe data Integer / Float menjadi string
    Funtion yang digunakan adalah
    toString() , parseInt(), dan parsFloat()
*/
var awal = "123.456"
console.log("Nilai awal adalah " + awal);
console.log("Tipe data dari nilai awal adalah " + typeof(awal));
// Merubah nilai awal menjadi integer
var _int = parseInt(awal);
console.log("\nSetelah melakukan parsing dengan parseInt(), nilainya adalah "+_int+", dengan tipe data " +typeof(_int));
// Merubah nilai awal menjadi float
var _float = parseFloat(awal);
console.log("Setelah melakukan parsing dengan parseFloat(), nilainya adalah "+_float+", dengan tipe data " +typeof(_float));

// Merubah dari tipe data number to string
var numInt = 345;
var numFlt = 3.14;
console.log("\nNilai awal adalah " + numInt +" dan "+numFlt);
console.log("Tipe data adalah " + typeof(numInt) +" dan "+typeof(numFlt));
var _string1 = numInt.toString();
console.log("\nSetelah melakukan toString(), nilainya adalah "+_string1+", dengan tipe data " +typeof(_string1));
var _string2 = numFlt.toString();
console.log("Setelah melakukan toString(), nilainya adalah "+_string2+", dengan tipe data " +typeof(_string2));








