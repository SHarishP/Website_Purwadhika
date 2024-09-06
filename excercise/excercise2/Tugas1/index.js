let userNum = prompt('Masukkan angka anda');
if(userNum%2===0){
    window.alert(`Nilai ${userNum} merupakan bilangan Genap`);
    console.log(`Nilai ${userNum} merupakan bilangan Genap`)
} else if(userNum % 2 !== 0){
    window.alert(`Nilai ${userNum} merupakan bilangan Ganjil`);
    console.log(`Nilai ${userNum} merupakan bilangan Ganjil`);
}else {
    window.alert(`Anda salah memasukkan input!`);
    console.log(`Anda salah memasukkan input!`);
}