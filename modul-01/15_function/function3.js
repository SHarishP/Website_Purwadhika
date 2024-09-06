///////////////////////
/* CALLBACK FUNCTION */
///////////////////////
/* 
    Callback function adalah function yang digunkan sebagai argument pada function lainnya
*/
let addition = (num1, num2) => {
    return num1 + num2;
};
let multiplication = (num1, num2) => {
    return num1 * num2;
}
/* Calculator */
let calculator = (a, b, cb) => {
    return cb(a, b);
}
console.log(calculator(2, 5, addition)); // Pada nama function, tidak perlu menuliskan ()

/*  
Dengan menggunakkan console.log(calculator(2, 5, addition));
maka yang terjadi adalah masuk ke function calculator
let calculator = (a, b, cb) => {
    dimana a = 2 ,  b = 5, cb adalah addition
    return cb(a, b);
    kemudian dijalankan function addition(2,5) karena return diatas
    }
*/
console.log(calculator(2, 5, multiplication));


/* Array Calculator */
let arrCalculator = (arr, operand, cb) => {
    let arrResult = [];
    let operationResult;

    for (let i = 0; i < arr.length; i++) {
       operationResult = cb(arr[i], operand);
       arrResult.push(operationResult); 
    }

    return arrResult;
}

let numbers = [23, 12, 39];
let result = arrCalculator(numbers, 2, addition);
console.log(result);

////////////////////////////
/* CALLING OTHER FUNCTION */
////////////////////////////
console.log('\nCalling other function');
let first = () => {
    console.log('first');
};

let second = () => {
    first ();
    console.log('second');
};

second();

console.log('\nContoh lainnya dari Calling other function');
let add = (a, b) => {
    return a + b;
};
let sub = (a, b) => {
    return a - b;
};
let mul = (a, b) => {
    return a * b;
};
let calc2 = (num1, num2, operation) => {
    if (operation == 'add') {
        return add(num1, num2);
    } else if (operation == 'sub') {
        return sub(num1, num2);
    } else if (operation == 'mul') {
        return mul(num1, num2);
    } else {
        return 'Invalid Input'
    }
};

console.log(calc2(2, 3, 'add'));
console.log(calc2(2, 3, 'mul'));
console.log(calc2(2, 3, 'sub'));
console.log(calc2(2, 3, 'devide'));

////////////////////////
/* RECURSIVE FUNCTION */
////////////////////////
/* Function yang memanggil dirinya sendiri, dan tanpa LOOPING */
console.log('\nRECURSIVE FUNCTION');
let countdown = (counter) => {
    // counter = 5
    console.log(counter);
    // counter - 1 = 4
    counter--
    // countdown(4)
    if(counter >= 0){
        countdown(counter);
    }
}   

countdown(5);
