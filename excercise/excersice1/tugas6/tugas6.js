/* Tugas 6 - Setiawan Harish P
Jarak A & B = 120 Km. A berjalan 60 km/h dari timur. B berjalan 40 km/h dari barat. A&B start pukul 9 WIB. Jam berapa A&B bertabrakan?
*/

/* 
jarak A ke B = 120 Km
kecepatan A = 60 kph 
kecepatan B = -40 kph (karena bergerak berlawanan)
A & B berangkat pukul 9 WIB
Berapa waktu yang dibutuhkan untuk bertabrakan?
Menggunakan Persamaan GLB (Gerak Lurus Beraturan)
jarakA = jarakAwalA + KecepatanA * t
jarakB = jarakAwalB + KecepatanB * t

jarakA = 0 + 60 * t
jarakB = 120 - 40 * t => 120 adalah jarak dari B ke A
Apabila bertabrakan maka jarakA == jarakB, maka
60t = 120-40t
100t = 120
t = 1.2 h
Masukkan kedalam Code!
*/

// Buat variabel kecepatan A, kecepatan B, jarakAwalA, jarakAwalB, waktu tabrakan, jam keberangkatan, jam akhir
let jarakAB, velA, velB, totDur, totVel, crashTime, deptTime
jarakAB = 120;
velA = 60;
velB = 40;
deptTime = new Date(`2024-08-28T09:00:00`)

// Masukkan variabel dan rumus untuk mendapatkan nilai 100 km/h
totVel = velA+velB;

// Masukkan variabel dan rumus untuk mendapatkan nilai t
totDur = jarakAB / totVel;
console.log(`Waktu yang dibutuhkan adalah ${totDur} jam`);

// konversi ke menit
totDur *= 60;
console.log(`Waktu yang dibutuhkan adalah ${totDur} menit`);

// konversi ke milisecond (x60000)
totDur *= 60000
console.log(`Waktu yang dibutuhkan adalah ${totDur} milisecond`);

// Hitung waktu tabrakan
// Masukkan nilai crashTime
crashTime = new Date(deptTime.getTime() + totDur);
// Ubah crashTime menjadi waktu
console.log(`Tabrakan terjadi pada ${crashTime.toLocaleTimeString('id-ID')}`);





