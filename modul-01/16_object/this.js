//////////////////
/* THIS KEYWORD */
//////////////////

/* 
    Banyak digunakan pada objek dan class, contoh penggunaan :
    'this' berfungsi untuk memanggil property pada sebuah objek di dalam method pada objek tersebut / objek yang sama
*/

const person = {
    firstName : 'Topias',
    lastName : 'Taavitsainen',
    nickname : 'Topson',
    greet : function(time) {console.log(`Good ${time}`)},
    intro: function(time) {
        // console.log(`My first name is ${firstName}`); // expect error, karena 'firstName dianggap sebagai parameter pada function ini
        // Melainkan tulis berikut untuk dapat mengaksses property 'firstName' :
        // console.log(`My first name is ${this.firstName}`);
        
        // memanggil method greet pada method intro
        this.greet(time);
        console.log(`My first name is ${this.firstName}`);

    },
    /* 
        Pada method dibawah, 'this' memanggil objek itu sendiri. Penggunaan 'this' tidak boleh menggunakan arrow function.
    */
    test: function() {console.log(this)}
    // test : () => console.log(this); // expect error

}
person.intro('Evening');
person.test();