////////////
/* OBJECT */
////////////

//Tata cara membuat variabel Object
/* 
    Pada membuat object, ada yang disebut dengan "Key Value Pair". Dimana pada contoh dibawah :
    Key adalah 'name', dan value adalah 'Kuroky'

    "Key Value Pair" memiliki DUA jenis penyebutan. Apabila :
    Value merupakan function, key disebut dengan 'Method',
    Value merupakan selain function, key disebut dengan 'Property'
*/

////////////////////////////////////////
/* MEMBUAT OBJECT DENGAN CARA LITERAL */
////////////////////////////////////////
const captain = {
    name : 'Kuroky',
    pets : ['cat', 'fox', 'bird'],
    active : true,
    height : 170,
    play : function (game) {
        console.log(`Playing ${game}`);
    },
};

/////////////////////////////////////////////////////
/* Terdapat 2 Cara dalam mengakses Key pada Object */
/////////////////////////////////////////////////////

/* Access with Dot (.) */

// console.log(captain.name);
// console.log(captain.pets);
// captain.play('Dota');

/* Access with bracket [] */
// console.log(captain['name']);
// console.log(captain['pets']);
// captain['play']('Dota');

////////////////////
/* Changing Value */
////////////////////
// Mengganti hewan yang dipelihara
// captain.pets = 'dog';
// captain.height = 169;
// captain.play = function(game) {console.log(`Let's play some ${game}`)};

// captain.play('Dota');

/////////////////
/* Add new Key */
/////////////////

/*
    Note : Pada Javascript, kita diperbolehkan menambah Key baru.
    Tetapi pada TYPESCRIPT kita harus membuat interface terlebih dahulu
*/

// captain.nationality = 'Germany';
// captain.greet = function (time) {console.log(`Good ${time}`)};
// console.log(captain);
// console.log(captain.nationality);
// captain.greet('Morning');

/////////////////
/* Destructure */
/////////////////

/* 
    Pemanggilan Property pada suatu Object, dapat dilakukan seperti berikut: 
    console.log(`My name is ${captain.name}, and i have ${captain.pets.length} pets`);
    TETAPI kekurangannya adalah kita harus selalu menulis nama Objeknya terlebih dahulu, kemudian baru memanggil Property.
    Hal tersebut sangat merepotkan apabila nama Objek nya berubah. Maka kita dapat memanggil property dengan cara berikut :
*/
const {name, pets} = captain;
console.log(name);
console.log(pets);
/* 
    Syntax const {name, pets} = captain; memiliki arti :
    kita akan membuat variabel const dengan mengambil Property dari Object 'captain'
    dan 
    jika kita mengambil property yang memang tidak ada di dalam objeknya, maka akan muncul undefined
*/
// const {name, pets, address} = captain;
// console.log(address) // expect 'undefined

// Setelah destructure, kita bisa menulis
console.log(`My name is ${name}, and i have ${pets.length} pets`);

//////////////////////////////////////
/* MEMBUAT OBJECT DENGAN CARA "NEW" */
//////////////////////////////////////

// 1. Buat variabel dan tambahkan new Object
const capitan = new Object();
// 2. Assign Property
capitan.name = 'Sebastian';
capitan.pets = ['owl', 'dog'];
capitan.play = function(game) {console.log(`Playing ${game}`)};
console.log(capitan);
