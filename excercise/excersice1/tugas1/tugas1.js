/* Tugas 1 -Setiawan Harish P
    Terdapat nilai x = 4, y = 3, dan z = 2
    Berapakah nilai w jika w = ((x+y*z)/(x*y))^z?
    Tampilkan nilainya dalam console.log
*/

// Membuat variabel x, y, z, dan w
    let x, y, z, w;
    x = 4, y = 3, z = 2;

// Membuat variabel untuk dapat menangkap nilai dari rumus untuk perhitungan (x+y*z)
    let rumus1 = (x+y*z);
    console.log(`Nilai rumus1 = ${rumus1}`)

// Membuat variabel untuk dapat menangkap nilai dari rumus untuk perhitungan (x*y)
    let rumus2 = (x*y);
    console.log(`Nilai rumus2 = ${rumus2}`)
    
// Membuat variabel untuk menangkap rumus1/rumus2
    let rumusFinal = rumus1/rumus2
    console.log(`Nilai rumusFinal = ${rumusFinal}`)

// Masukkan rumus pada variabel w dengan menggunakan Math.pow()
    w = Math.pow(rumusFinal,z);

// keluarkan hasilnya pada console.log
    console.log(`Nilai w adalah = ${w}`);