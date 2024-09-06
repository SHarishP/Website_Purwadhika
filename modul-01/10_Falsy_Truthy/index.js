// Falsy and Truthy Values
// Falsy Values terdiri dari 0, "", undefined, null, NaN
let _valfals = 0;
let resultfals = Boolean(_valfals);
console.log("Berikut adalah Falsy Values");
console.log(`${_valfals}, mempunyai nilai boolean ${resultfals}`);

// Truthy Values
// Truethy Values terdiri dari selain Falsy Values, [], dan {}
let _valtrue = 1;
let resulttrue = Boolean(_valtrue);
console.log("\nBerikut adalah Truthy Values");
console.log(`${_valtrue}, mempunyai nilai boolean ${resulttrue}`);

// Jika menggunakan logical statement
let value ="";
console.log('\nTruthy & Falsy Values mengguanakan Logic Statement');
if(value){
    console.log(`${value}, merupakan Truthy Values`);
} else {
    console.log(`${value}, merupakan Falsy Values`);
};