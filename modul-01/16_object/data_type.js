/////////////////////////////////
/*OBJECT FOR EVERY DATA TYPES  */
/////////////////////////////////

/////////////////////////////////////////
/* Primitive : string, number, boolean */
/////////////////////////////////////////

// String
const priString = 'Today is raining';
const objString = new String('Today is sunny');

console.log(priString.toUpperCase()); 
/* 
    Kenapa priString bisa menggunakan method toUpperCase? Karena JS merubah priString ke object terlebih dahulu,
    kemudian mengembalikan ke string
*/
console.log(objString.toLowerCase());

console.log(typeof priString);
console.log(typeof objString);

// Number
const priNumber = 37000;
const objNumber = new Number (39000);
console.log(priNumber);
console.log(objNumber);
console.log(priNumber.toLocaleString("id"));
console.log(objNumber.toLocaleString("id"));

console.log(typeof priNumber);
console.log(typeof objNumber);

// Boolean
const priBoolean = true;
const objBoolean = new Boolean(false);
console.log(typeof priBoolean);
console.log(typeof objBoolean);