///////////////////////
// Function Declaration
///////////////////////
function firstStep() {
    let name = 'Ethan';
    console.log(`Segala sesuatu langkah yang besar, selalu dimulai dari satu langkah kecil. - ${name}`);
}
firstStep()

//////////////////////
// Function Expression
//////////////////////

let keepGoing = function() {
    console.log('Apapun yang terjadi, teruslah melangkah.');
}
keepGoing();

/* Perbedaan Declaration dan Expression */
/* Hoisted */
/* 
    Function Decrataion dapat dipanggil diawal meskpin function belum dibuat.
    Karena Javascript mengevaluasi leaf(), menyimpannya, dan mencari function lead()

    Function Expression tidak bisa melakukan HOISTING karena function Expression membutuhkan variabel.
    Sedangkan JS membaca Variabel dari atas kebawah
*/
// HOISTED
leaf();
function leaf () {
    console.log('Hijau Daun');
};
// Function Expression - NOT HOISTED
// let leaf = function () {
//     console.log('Hijau Daun');
// };

///////////////////////////////////////
// Arrow Function - Function Expression
///////////////////////////////////////

// Function Expression
let earth = function() {
    console.log(`Selamatkan Bumi`);
};

// Function Expression (Arrow)
let bumi = () => {
    console.log('Selamatkan Bumi');
} 