// If Else Statement
// Jika condition true, task 1 dijalankan
// Jika condition flase, task 2 dijalankan
// if (condition){
//     // task 1
// } else {
//     // task 2
// }

// Jika kondisi hujan : kenakan  jas hujan
// Jika konidisi tidak hujan : kenakan jaket
let rain = false;
if (rain){
    console.log(`Rain : ${rain}`);
    console.log("Kenakan jas hujan");
} else {
    console.log(`Rain : ${rain}`);
    console.log("Kenakan jaket");
}

// Jika tidak bersalah : dibebaskan
// Jika bersalah : dihukum
let guilty = true;
if (!guilty){
    console.log(`\nguilty : ${guilty}`);
    console.log("Anda Dibebaskan");
} else {
    console.log(`\nguilty : ${guilty}`);
    console.log("Anda dihukum")
}

// Jika sudah mencapai 18 : Diizinkan
// Jika belum mencapai 18 : Ditolak
let age = 18;
if (age >= 18){
    console.log(`\nage :${age}`);
    console.log(("Permohonan diterima"));
} else {
    console.log(`\nage :${age}`);
    console.log(("Permohonan ditolak"));

}

// If, Else If, Else
// if (condition1){
//     // condition1 : true
//     // task1
// } else if (condition2){
//     // jika condition 1 = false dan condition2 : true
//     // task2
// } else if (condition3){
//     // jika condition 1 & 2 = false dan condition3 : true
//     // task3
// } else {
//     // saat semua condition bernilai false
//     // task 4
// }

// Nilai Ujian
// Point : 85 - 100 : A
// Point : 75 - 84 : B
// Point : 60 - 74 : C
// Point : 0 - 59 : D
// Points : null : F

let points = 68;
let grade;
if(points >=85 && points <=100){
    // Point : 85 - 100 : A
    grade = "A";
} else if(points >=75 && points <=84){
    // Point : 75 - 84 : B
    grade = "B";
} else if(points >=60 && points <=74){
    // Point : 60 - 74 : C
    grade = "C";
} else if(points >=0 && points <=59){
    // Point : 0 - 59 : D
    grade = "D";
} else {
    // Points : null : F
    grade = "F";
}
console.log(`Nilai : ${points}\nGrade : ${grade}`);
