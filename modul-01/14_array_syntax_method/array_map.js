/////////
/* MAP */
/////////

/* 
    1. Callback function harus me-return suatu nilai (tipe data apapun), dimana setiap nilai yuang direturn akan 
    masuk ke dalam array baru yang dibuat oleh function map secara internal, bukan karena kita yang menulis kodenya.

    2. Map akan me-return array baru yang sudah berisi niali yang di return oleh callback function.
*/

/* Multiple by two : For Each */
let numbers = [1, 2, 3];
let arrResult = [];
numbers.forEach((number) => {
    arrResult.push(number * 2);
})
console.log(arrResult);

/* Multiple by two : Map */
numbers = [1, 2, 3];
let mapResult = numbers.map((number) => { // Penggunaan map harus membuat array baru
    return number * 2;
})
console.log(`map: ${arrResult}`);

/* Man or Woman */ 
let persons = [
    ['Janette', 'Woman'],
    ['Kim Shin', 'Man'],
    ['Tony', 'Man'],
];
let mapResult2 = persons.map((person)=> {
    let name = person[0];
    if(person[1] == 'Woman') {
        return `Mrs. ${name}`
    } else {
        return `Mr. ${name}`
    }
})
console.log(mapResult2)
//////////////////////////////////////////////////////////////////
// Sebuah Function yang dapat menentukan nilai genap dan ganjil //
//////////////////////////////////////////////////////////////////

let nums = [1, 2, 3, 4];
let oddEven = (numbers) => {
   let mapResult3 = numbers.map((number) => {
        if(number % 2 == 1) {
            return [number, 'Ganjil'];
        } else {
            return [number, 'Genap'];
        }
    })
    return mapResult3;
};
console.table(oddEven(nums));