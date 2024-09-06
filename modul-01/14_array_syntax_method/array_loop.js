/////////////////////////////////////////////////////////////////////////////
// LOOP WITH ARRAY : Melakukan Looping untuk memproses setiap data pada array
/////////////////////////////////////////////////////////////////////////////

/* 
    Result
    Terdapat 5 kategori film :
    Horror
    Sci-Fi
    Thriller
    Adventure
    Animation
*/

let categories = ['Horror', 'Sci-Fi', 'Thriller', 'Adventure', 'Animation'];
let listCat = `Terdapat ${categories.length} kategori film :\n`;
let info;
for (let i = 0; i < categories.length; i++) {
    listCat += `${categories[i]}\n`
}
console.log(listCat);