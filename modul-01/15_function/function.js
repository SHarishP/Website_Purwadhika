///////////////////////////////
// WITHOUT PARAMETER AND RETURN
///////////////////////////////

/* 
    Penjelasan mudahnya adalah :
    input : parameter
    output : return, return adalah keyword yang digunakan untuk mengeluarkan output
*/

let fullName = () => {
    let firstName = 'Isaac';
    let lastName = 'Newton';

    console.log(`Hallo, nama lengkap saya adalah ${firstName} ${lastName}`);
    // Function ini tidak memiliki output
}
// Membuktikan bahwa fullname() tidak memiliki output
let result = fullName();
console.log(result);


