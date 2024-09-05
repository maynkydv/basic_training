let num = randomValue(33,126) // Example numerical value
let asciiChar = String.fromCharCode(num);

console.log(asciiChar); // Output: 'A'

function randomValue(min, max){
    return Math.floor(Math.random() * (max - min +1) + min) ;
}
    