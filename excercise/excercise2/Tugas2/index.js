// BMI Calculator
// Membuat variabel untuk memenerima input dari User berupa berat badan dan tinggi badan
let weightUser = prompt('Masukkan berat badan anda (Kg)');
let heightUser = prompt('Masukkan tinggi badan anda (cm)');
heightUser /= 100;
// Membuat variabel untuk rumus BMI
const bmi = weightUser / Math.pow(heightUser, 2);
heightUser *= 100;
// Memunculkan di window.alert
window.alert(`Berat badan anda : ${weightUser} Kg,\nTinggi badan anda : ${heightUser} cm,\nMaka BMI anda adalah ${bmi} `)

if (bmi < 18.5){
    window.alert(`Berat badan anda kurang`);
} else if(bmi >= 18.5 && bmi <= 24.9){
    window.alert(`Berat badan anda ideal`);
} else if(bmi >= 25 && bmi <= 29.9){
    window.alert(`Berat badan anda berlebih`);
} else if(bmi >= 30 && bmi <= 39.9){
    window.alert(`Berat badan anda sangat berlebih`);
} else if (bmi > 39.9 ){
    window.alert(`Anda Obesitas`);
}