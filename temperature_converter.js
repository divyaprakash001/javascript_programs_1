// question 2 :- to convert celsius to farenheit and vice versa.

// let temp = Number(prompt("Enter the temperature"))
let celsius;
let faren;
function celsiusToFaren(celsius) {
    celsius = Number(prompt("Enter temperature in celsius :- "));
    faren = (celsius*9/5) + 32; 
    console.log(`The temperature in farenheit is ${faren}`);
}

function farenToCelsius(celsius) {
    faren = Number(prompt("Enter temperature in farenheit :- "));
    celsius = (faren-32)* 5/9; 
    console.log(`The temperature in celsius is ${celsius}`);
}
celsiusToFaren(celsius);
farenToCelsius(faren);
