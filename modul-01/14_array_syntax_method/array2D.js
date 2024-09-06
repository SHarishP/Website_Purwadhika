////////////////////////////////////
// ARRAY 2 D : Array di dalam array
////////////////////////////////////

// Jika kita mempunyai data yang banyak, kita bisa menuliskan array seperti berikut
let vert = [
    121342535346,
    132134214256,
    46547785698,
    537568569,
]

let things = [
    ['red pen', 'blue pen'],
    ['analog clock', 'digital clock'],
    ['futsal shoes', 'badminton shoes']
];
console.table(things)

// cara mengambil 'blue pen' saja
console.log(things[0][1]);

// Menambahkan data pada Array 2D
console.log('\nMemodifikasi value pada array')
things.push(['apple', 'banana']);
console.table(things);
things.unshift(['laptop', 'personal computer']);
console.table(things);
// remove data terakhir
things.pop();
// remove data pertama
things.shift()
console.table(things);

// Merubah value pada array 2D
things = [
    ['red pen', 'blue pen'],
    ['analog clock', 'digital clock'],
    ['futsal shoes', 'badminton shoes']
];

// merubah data pada index
things[1] = ['blue car', 'red car'];
console.table(things);
// merubah SATU data pada index
things[1][0] = 'black car';
console.table(things);