////////////////////
// PARAMETER (INPUT)
////////////////////

/* 
    Input = Parameter
        Tidak ada batasan dalam membuat parameter.
        Parameter bisa menerima inpit dengan type data apapun.
        Function 1 dan Funtion lainnya boleh memiliki nama parameter yang sama, karena bekerja pada scope nya masing2

    Output = Return
*/

let introduction = (name) => {
    console.log(`Halo, nama saya adalah ${name}`)
};
introduction('Nagisa');

let fullname = (firstName, lastName) => {
    console.log(`Halo, nama saya adalah ${firstName} ${lastName}`);
};
fullname('Kyojuro', 'Rengoku');

let addition = (num1, num2) => {
    result = num1 + num2;
    console.log(`Hasil penjumlahan ${num1} dan ${num2} adalah ${result}`);
}
addition(7,3);

let multiplication = (num1, num2) => {
    result = num1 * num2;
    console.log(`Hasil ${num1} * ${num2} adalah ${result}`);
}
multiplication(5,11);

/////////////////
// ARRAY CHECKING
/////////////////
// Mencari tahu panjang array dan menggabungkan data pada array
let days = ['sunday', 'monday', 'tuesday'];
/* 
    Expected Output
    Array ioni memiliki 3 data sebagai berikut : sunday, monday, tuesday
*/

let arrChecking = (arr) => {
    // Mencari tahu banyaknya data pada array ? array.length()
    let arrLen = arr.length;
    // Menggabungkan setiap data pada array dengan koma dan spasi ? spasi
    let arrJoin = arr.join(', ');
    console.log(`Array ini memiliki ${arrLen} data sebagai berikut : ${arrJoin}`);
};

// arrChecking(days);

///////////////////
// ARRAY CALCULATOR
///////////////////

let numbers = [1, 2, 3];
let arrCalculator = (arr, operation, operand) => {
    let arrResult = [];
    switch (operation) {
        case 'addition':
            for (let i = 0; i < arr.length; i++) {
                arrResult.push(arr[i] + operand);
            }
            console.log(`Before : ${arr}\nAfter : ${arrResult}`);
        break;

        case 'multiplication' :
            for (let i = 0; i < arr.length; i++) {
                arrResult.push(arr[i] * operand);
            }
            console.log(`Before : ${arr}\nAfter : ${arrResult}`);
        break;
        default:
            console.log(`Invalid Operation`);
        break;
    } 
}
arrCalculator(numbers, 'multiplication', 10);

//////////////////
// RETURN (OUTPUT)
//////////////////

/* 
    Return adalah keyword yang digunanakn untuk mengeluarkan nilai dari suatu function
*/

let basic = () => {
    return `I am the boss`;
}
// let hasil = basic();
// console.log(hasil);
// Bisa juga menggunakan
console.log(basic());

/* 
    Membuat function untuk mengeluarkan nilai random 1 - 10;
*/
console.log(`\nNilai Random`);

let oneToTenRandom = () => {
    let ran = Math.random();
    let ranMultiTen = ran * 10;
    let oneTen = Math.floor(ranMultiTen) +1;

    return oneTen;
};

var ranResult = oneToTenRandom();
console.log(ranResult);

///////////////////////////////////////
/* PARAMETER DAN RETURN PADA FUNCION */
///////////////////////////////////////

let pertambahan = (num1, num2) => {
    return num1 + num2;
}
console.log(pertambahan(9,8));

let namaLengkap = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(namaLengkap(`Robert`, `Downey`));


/* 
    Perbedaan Argument dan Parameter 
    Parameter adalah variabel yang berperan untuk menerima data yang akan masuk pada function :
    function paragument(a, b, c) {  ///a,b,c disini merupakan parameter
        return a + b + c
    }

    Argument adalah sebutan utnuk data yang masuk ke dalam sebuah function saat kita menjalankan sebuah function
    paragument(1,3,5) // 1,3,5 disini merupakan argument

*/

/* 
    DEFAULT PARAMETER 
    Sebuah parameter pada function yang berisi nilai tertentu (bukan dari user), sebagai nilai default.
    Jadi, ketika user tidak memasukkan argument pada function, default parameter lah yang akan digunakan.
    Tetapi, jika user memasukkan argument, maka nilai dari argument yang akan masuk ke parameter

    Tidak ada batasan dalam membuat DEFAULT PARAMETER
*/

let power = (num1, num2 = 2) => {
    let powResult = num1;
    for (let i = 1; i < num2; i++) {
        powResult *= num1;
    }
    return [num1, num2, powResult];
}
let hasilPow = power(2,3);
console.log(`${hasilPow[0]} pangkat ${hasilPow[1]} adalah ${hasilPow[2]}`);

// CARA MENSKIP ARGUMENT
let tambah = (a, b = 2, c) => {return a + b + c};
console.log(tambah(2, undefined, 3)); // Menggunakan undefined