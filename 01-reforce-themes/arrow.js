// Traditional function 
function sum ( a, b ) {
    return a + b;
}
console.log(sum (5, 10));


// -- arrow function


const sum1 = ( a, b ) => {
    return a + b;
}
console.log(sum1 (5, 10));


// when your body have a line and this line is the return 
const sum2 = ( a, b ) =>  a + b;
console.log(sum2 (5, 10));


// -- 


const gretting = () => 'Hellow word';

console.log(gretting());