/* Tugas 4 - Setiawan Harish P
Berapa Tahun, bulan, minggu dan hari untuk 485 hari?
Note:
1 Bulan = 30 hari;
1 Tahun = 360 hari;
*/

// Buat variabel untuk menyimpan total hari, tahun, bulan, minggu, dan hari
let sumDay, year, month, week, day;
sumDay = 485;

// Hitung jumlah tahun dengan total hari / 360 hari dan bulatkan kebawah
year = Math.floor(sumDay / 360);

// Hitung bulan dengan sisa pembagian tahun / bulan (30hari) dan bulatkan kebawah
month = Math.floor((sumDay%360)/30)

// Hitung minggu dengan sisa pembagian bulan / 1 minggu (7hari) dan bulatkan kebawah
week = Math.floor((sumDay % 360 % 30)/7)

// Hitung hari dari sisa pembagian minggu dan bulatkan kebawah
day = Math.floor(sumDay % 360 % 30 % 7)

// Tampilkan pada console
console.log(`${sumDay} hari berarti ${year} tahun, ${month} bulan, ${week} minggu, ${day} hari.`)