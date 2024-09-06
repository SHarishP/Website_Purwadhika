///////////////////////////////////
// BREAK : Menghentikan Proses Loop
///////////////////////////////////

//////////////
// Print 1 - 3
//////////////

for (let i = 1; i <= 5; i++){
    
    if (i === 4){
        break
        /* 
        Ketika i = 4, maka proses Loop akan berhenti dan 
        tidak akan melanjutkan task dibawahnya, yaitu "console.log"
        */
    }
    console.log(`Loop :${i}`);
    
}

////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapat dibagi 5
////////////////////////////////////////////////////

while(true){
    let rand = Math.floor(Math.random() * 100);
    // Menampilkan angka random
    console.log(rand)
    if (rand % 5 === 0){
        break
    }

}