/////////
// FILTER
/////////

/* 
    1. Callback function akan me-return suatu boolean.
    2. Call back me-return true : value yang sedang di proeses akan disimpan ke array baru.
    3. Callback me-return false : value yang sedan diproeses akan diabaikan.
    4. Filter akan me-return array baru.
*/

/* Off Filyter */

let numbers = [1, 2, 3, 4, 5];
// Versi Pertama
let numResult = numbers.filter((number => {
    if (number % 2 ==1 ) {
        return true;
    } else {
        return false;
    }
}))
// Versi Kedua
let filterResult = numbers.filter((number) => {
    return number % 2 == 1; // true or false
})
console.log(filterResult); // menghasilkan [1, 3, 5];

/* Character Length Filter -> mengambil kata yang terdiri dari 5 character*/
console.log('\nCharacter Filter');
let words = ['Koro Sensei', 'Jin Mori', 'Eren', 'Tanjirou', 'Zorro'];
let lenResult = words.filter((word) => {
    // Saat satu string memiliki lebih dari 5 karakter
    return word.length > 5;
})
console.log(lenResult);


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buat Function yang akan memfilter sesorang yang memiliki umur lebih dari 30 atau tinggal di Jakarta //
// [                                                                                                   //
//     ['John',43, 'Jakarta'],                                                                         //
//     ['Baby', 21, 'Jakarta'],                                                                        //
//     ['Tony', 34, 'Surabaya'],                                                                       //
//     ['Justin', 29, 'Banjarmasih'],                                                                  //
// ];                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let persons = [
    ['John',43, 'Jakarta'], 
    ['Baby', 21, 'Jakarta'],    
    ['Tony', 34, 'Surabaya'],   
    ['Justin', 29, 'Banjarmasih'],
];

let ageAddress = (arr) => {
    return arr.filter((val) => {
        return val[1] > 30 || val [2] == 'Jakarta';
    })
}

let result = ageAddress(persons);
console.table(result);