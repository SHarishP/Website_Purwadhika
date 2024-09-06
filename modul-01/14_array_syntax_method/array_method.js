///////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
//////////////////////////////////////////////

/* 
    Kelebihan penggunaan 'array.push()' dan 'array.pop()' daripada insert new value pada 'array[n]'
    adalah apabila kita memiliki banyak data pada array dan kita tidak tahu index terakhir, maka lebih mudah
    jika kita menggunakan 'array.push()' dan 'array.pop()'. Karena akan langsung merujuk ke index terakhir
    daripada suatu array
*/

let things = ['book', 'pen', 'clock'];
things.push('jacket');
console.table(things);
// Kita juga bisa menambahkan lebih dari SATU data pada array saat menggunakan array.push()
things.push('apple', 'banana');
console.table(things);
/* 
Kita juga bisa menambahkan lebih dari satu TIPE DATA pada array saat menggunakan 'array.push()'.
Tetapi, lebih baik jika kita hanya menggunakan satu tipe data saja, khususnya pada saat penggunaan TYPESCRIPT.
Karena TYPESCRIPT menjaga konsistensi tipe data
*/
things.push('pencil', 3, true);
console.table(things);

/* 
array.pop() hanya dapat menghilangkan data pada array yang paling belakang
*/
things.pop(); // mengeluarkan true
things.pop(); // mengeluarkan 3
console.table(things);


/////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
/////////////////////////////////////////////////

console.log('\nSHIFT dan UNSHIFT');
let things2 = ['book', 'pen', 'clock'];
things2.unshift('jacket');
// Kita juga bisa menambahkan lebih dari SATU data dan lebih dari satu TIPE DATA pada array saat menggunakan array.unshift() 
things2.unshift('apple', 'banana');
things2.unshift('pencil', 3, true);
console.table(things2);
/* 
array.shift() hanya dapat menghilangkan data pada array yang paling belakang
*/
things2.shift();
things2.shift();
console.table(things2);

//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan Data
//////////////////////////////////////////
/* 
    Syntax method 'array.splice()'
    array.splice(index, amount, new data)
    index : merupakan index awal dimulainya operasi
    amount : jumlah data yang inin dihapus mulai dari  'index' 
    new data : data baru yang akan ditambahkan ke array

    NOTE : 
    Penghapusan data array menggunakan .splice() membuat data pada array maju satu index ke depan sesuai data yang kosong.
*/

// Menghapus data
console.log('\nArray method .splice()');
let things3 = ['book', 'pen', 'clock', 'papper'];
console.table(things3);
console.log('Menghapus nilai "pen" dan "clock"');
things3.splice(1,2);
console.table(things3);
console.log('Menghapus nilai "book", "pen" dan "clock"');
things3 = ['book', 'pen', 'clock', 'papper'];
things3.splice(0,3);
console.table(things3);
console.log('Menghapus nilai "pen" saja');
things3 = ['book', 'pen', 'clock', 'papper'];
things3.splice(1,1);
console.table(things3);

// Penambahan Data
console.log('\nPenambahan data pada array menggunakan .splice()');
things3 = ['book', 'pen', 'clock', 'papper'];
things3.splice(1, 0, 'pencil'); //Jika parameter amount = 0, maka kita tidak menghapus data apapun
// Kita juga bisa menambahkan lebih dari SATU data dan lebih dari satu TIPE DATA
things3.splice(3, 0, 'magazine', 1987);
console.table(things3);

// Menamambah dan Menghapus data disaat yang bersamaan
console.log('\nMenambah dan Menghapus data pada array menggunakan .splice()');
things3 = ['book', 'pen', 'clock', 'papper'];
things3.splice(1, 2, 'door');
console.table(things3);
console.log('Menghapus value "door" dan menambahkan "middle" dan "double"');
things3.splice(1, 1, 'middle', 'double');
console.table(things3);

//////////////////////////////////////////////////////////////
// DELETE : Menghapus data, dan indexnya akan berisi UNDEFINED
//////////////////////////////////////////////////////////////
console.log('\nMenghapus data pada array menggunakan "delete"');
things3 = ['book', 'pen', 'clock', 'papper'];
delete things3[0];
delete things3[2];
console.log(things3);


