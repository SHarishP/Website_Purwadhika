///////////
/* CLASS */
///////////

/* 
    CLASS adalah Blueprint / Template untuk membuat object, dengan class akan mempermudah dalam membuat object.
    CLASS digunakan saat ada proses perulangan dalam membuat object baru.

*/

// Contoh penggunaan tanpa CLASS

// const kuroky = {
//     name: 'Kuro Salehi',
//     age : 28,
//     nationality : 'Germany',
//     position : 'Captain',
//     team : 'Nigma'
// };
const ceb = {
    name: 'Sebastian Deb',
    age : 28,
    nationality : 'French',
    position : 'Coach',
    team : 'OG'
};
const puppey = {
    name: 'Clement Ivanov',
    age : 30,
    nationality : 'Estonia',
    position : 'Captain',
    team : 'Team Secret'
}
/* 
    Tanpa Class, akan mempersulit kita jika kita akan membuat objek yang banyak. Maka dari itu digunakan Class
    berikut Sytax dari CLASS
*/

class Player{
/* 
    Pada TYPESCRIPT, sebelum  constructor harus mendeclare 'key' nya terlebih dahulu. Dan type sudah terdeclare di Interface
*/

    constructor(name, age, nationality, position, team) {
        this.name = name;
        this.age = age;
        // jika ingin menambahkan property baru :
        this.nationality = nationality
        this.position = position;
        this.team = team;
    }

    intro () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

const dendi = new Player('Danil Ishutin', 30, 'Ukraine', 'Captain', 'B8');
const kuroky = new Player('Kuro Salehi', 28, 'German', 'Captain', 'Nigma');
console.log(dendi);
console.log(kuroky);
dendi.intro();
kuroky.intro();