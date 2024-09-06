//////////////
/* FOR EACH */
//////////////

/* 
    PEMAHAMAN TERKAIT DIRECT ARGUMENT DAN DIRECT CALLBACK
*/

// Direct Argument
let addition = (a, b) => {
    return a + b;
};
addition (2, 5); // Berikut merupakan DIRECT ARGUMENT

// Direct Callback
// Berikut adalah penulisan Callback pada umunya
let direct = (arr, cb) => {
    return cb(arr); // Kita memanggil function lain di dalam function kita
};

let nums = [1, 2, 3];
// let lenFn = (ary) => {
//     return ary.length;
// };
// let result = direct (nums, lenfn)
// console.log(result);
// Penulisan Direct CallBack adalah sebagai berikut :
let result = direct (nums, (ary) => { //Jadi kita langsung menulis callback function, di dalam parameter function 'direct'
    return ary.length;
})
console.log(result)
/* 
    NOTE : Kita banyak menggunakan direct callback pada For Each, Map, Sort, dan Filter
*/

/////////////
/* ForEach */
/////////////
console.log(`\nPembahasan ForEach`)
// For Each : Loop
nums = [1, 2, 3];
let cb = (val) => {
    console.log(`Loop ${val}`);
}
nums.forEach(cb);
// Jika kita ingin menggunakan DIRECT CALLBACK, maka kita dapat melakukan berikut
nums.forEach((val) => {
    console.log(`Loop direct ${val}`);
});
/* 
    Function Callback yang akan dimasukkan ke dalam ForEach, bisa terdiri dari 3 parameter 
    ketiga parameter terdiri dari Value, Index, dan Array
*/
// forEach : value on index
nums = ['A', 'B', 'C'];
let cb2 = (val, idx) => {
    console.log(`Index ke ${idx} : ${val}`);
}
nums.forEach(cb2);
// Jika kita ingin menggunakan direct callback :
nums.forEach((val, idx) => {
    console.log(`Direct CB: Index ke ${idx} : ${val}`);
});

// forEach : third argumnent
let days = ['sunday', 'monday', 'tuesday'];
days.forEach((val, idx, arr) => {
    console.log(`val : ${val}`);
    console.log(`idx : ${idx}`);
    console.log(`arr : ${arr}`);
});

/* For Each : multiple by two */
nums = [2, 5, 7];
let result2 = [];
nums.forEach((val) => {
    result2.push(val *2);
})
console.log(result2)

/* forEach ; higest and lowest */
nums = [39, 101, 1, 5, 25, 13];
let min, max;

nums.forEach((val, idx) => {
    if (idx == 0) {
        min = max = val;    // Membuat nilai pembanding terlebih dahulu
    } else if(val < min) {  // Membandingkan dengan nilai yang sudah ada
        min = val;          // Mereplace nilai min awal dengan nilai min yang baru (yang lebih kecil)
    } else if(val > max) {  // Membandingkan dengan nilai yang sudah ada
        max = val;          // Mereplace nilai max awal dengan nilai max yang baru
    }
});
console.log(`Min : ${min}\nMax: ${max}`);

//////////////////////////////////////////////////////////////////
// Sebuah Function yang dapat memisahkan nilai genap dan ganjil //
//////////////////////////////////////////////////////////////////

let array1 = [11, 22, 34, 41, 52, 63, 71, 86];
let array2 = [[11, 41, 63, 71], [22, 34, 52, 86]];
let arr1Genap = [], arr1Ganjil = [];
let arr2Genap = [], arr2Ganjil = [];

array1.forEach((val) => {
    if (val % 2 !== 0) {
        arr1Ganjil.push(val);
    } else {
        arr1Genap.push(val);
    }
})
console.log(`Ganjil : ${arr1Ganjil}`);
console.log(`Genap : ${arr1Genap}`);
console.log(array2[1]);
// Cara ke 2
console.log('\nCara ke dua');
let oddEven = (numbers) => {
    let odds = [], evens = [];
    numbers.forEach((number) => {
        if (number % 2 == 1){
            odds.push(number);
        } else {
            evens.push(number);
        }
    });
    return [odds, evens];
}
let result3 = oddEven([11, 22, 34, 41, 52, 63, 71, 86]);
console.log(result3);
console.table(result3);

array2.forEach((subArray) => {
    subArray.forEach((number) => {
        if (number % 2 !== 0) {
            arr2Ganjil.push(number);
        } else {
            arr2Genap.push(number);
        };
    });
});
console.log(`Nilai Ganjil = ${arr2Ganjil}`);
console.log(`Nilai Genap = ${arr2Genap}`);