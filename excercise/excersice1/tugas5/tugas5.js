/* Tugas 5 - Setiawan Harish Pradana 
Saar ini, jumlah usia Andi & Budi = 49 Th, dengan rasio usia Andi & Budi = 0.4, Berapa usia Andi & Budi 2 Tahun lagi?
*/

// Buat variabel untuk umur Andi & Budi, Jumlah Usia, dan Perbandingan Usia
let andi, budi, sumUmur, ratUmur;

sumUmur = 49;
ratUmur = 0.4;

// Cari umur Andi dan Budi
/* andi / budi = 0.4
    andi = 0.4xbudi
    andi + budi = 49, maka
    0.4budi + budi = 49 ==> 1.4 budi = 49
                                budi = 49/1.4 = ...
    andi = 0.4 x .... = 
*/
budi = sumUmur/(ratUmur+1);
andi = ratUmur * budi;
console.log(`Umur saat ini adalah Budi ${budi} Th dan Andi ${andi} Th.`);

// Cari umur 2 tahun lagi
let andi2, budi2;
andi2 = 2 + andi;
budi2 = 2 + budi;
console.log(`Maka 2 tahun lagi usia Andi adalah ${andi2} Th, dan Budi adalah ${budi2} Th`);
