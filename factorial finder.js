// question 3 :- factorial of a number

let num = Number(prompt("Enter the number you want to find the factorial :- "));
let factorial = 1;

for(num; num>=1; num--)
{
    factorial = factorial*num;
}
console.log(`The factorial os ${num} is ${factorial}`);