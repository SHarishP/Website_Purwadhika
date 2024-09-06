/* Tugas 7 - Setiawan Harish P 
Tampilkan bilangan acak antara 1-100 di browser di HTML
*/

let ranNum = Math.floor(Math.random() * 100) +1;
console.log(ranNum);
document.getElementById("angka").innerHTML = ranNum;
