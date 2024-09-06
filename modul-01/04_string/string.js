// String / text
"Happy Weekend";
'Good Morning';
"1234";
"True";
console.log(typeof("1234"));

// Penggunaan petik dua ("") dan petik ('')
// Wait I'll be there in a second
var greet = "Wait i'll be there in a second";
console.log(greet);
// menggunakan escape character (\)
var greet2 = 'Wait i\'ll be there in a second';
console.log(greet2);
// I am "Okay"
var text = 'I am "Okay"';
console.log(text);
// menggunakan escape character (\)
var text2 = "I am \"Okay\"";
console.log(text2);

// Escape Character - New Line
// Membuat baris baru layaknya "Enter"
console.log("\nBaris baru menggunakan escape Character");
console.log("Initial : Hallo Guys!");
console.log("Setelah penambahan escape charachter menjadi :");
console.log("Hallo \nGuys!");

// Escape Character - Tab
// Membuat Jarak layaknya tombol Tab
console.log("\nMemberikan Tab dengan menggunakan escape Character");
console.log("Initial : Hallo Guys!");
console.log("Setelah penambahan escape charachter menjadi :");
console.log("Hallo\tGuys!");

// Concatenate String
var firstName = "Max";
var lastName = "Verstappen";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Concatenate String with Number
var a = "8";
var b = 12;
var c = a+b; //Maka b akan diubah menjadi string oleh JS secara internal
console.log(c);
// jika menggunakan operator yang lain, maka string akan diubah menjadi number
var d = a-b;
var e = a*b;
var f = a/b;
console.log(d);
console.log(e);
console.log(f);

// backtic (`) dibawah tombol escape
var intro = `My full name is ${firstName} ${lastName}`;
console.log(intro);