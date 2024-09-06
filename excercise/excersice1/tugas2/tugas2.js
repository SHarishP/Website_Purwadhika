/* Tugas2 - Setiawan Harish P
    Membuat program untuk dapat menerima Input dari User berupa angka dan mengkuadratkannya pada halamam Web.
    Hasil kuadtrat dimunculkan menggunakan alert
*/

// Buat variabel untuk dapat menyimpan input dari USER
let input = prompt("Silahkan masukkan angka berapapun");
        
// Buat pop up alert dengan isi Math.pow
window.alert(`nilai kuadrat dari ${input} adalah ${Math.pow(input,2)}`)