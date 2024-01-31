// Make functions
// let num1 = ""
// let num2 = ""

let num = ""
let solve = ""
let expressionInput = document.querySelector("#expression");

function errorCondition() {
    if (num.length >= 15) {
        expressionInput.textContent = 'error'
    }

}

// const add = num1 + num2
// const subtract = num1 - num2
// const divide = num1 / num2
// const multiply = num1 * num2

// console.log(add)
// console.log(subtract)
// console.log(divide)
// console.log(multiply)

// Make buttons work

let one = document.querySelector('#oneBtn')
one.addEventListener ('click', () => {
    solve += "1";
    num += "1";
    expressionInput.textContent = num;
    errorCondition();
})

let two = document.querySelector('#twoBtn')
two.addEventListener ('click', () => {
    solve += "2";
    num += "2";
    expressionInput.textContent = num;
    errorCondition();
})

let three = document.querySelector('#threeBtn')
three.addEventListener ('click', () => {
    solve += "3";
    num += "3";
    expressionInput.textContent = num;
    errorCondition();
})

let four = document.querySelector('#fourBtn')
four.addEventListener ('click', () => {
    solve += "4";
    num += "4";
    expressionInput.textContent = num;
    errorCondition();
})

let five = document.querySelector('#fiveBtn')
five.addEventListener ('click', () => {
    solve += "5";
    num += "5";
    expressionInput.textContent = num;
    errorCondition();
})

let six = document.querySelector('#sixBtn')
six.addEventListener ('click', () => {
    solve += "6";
    num += "6";
    expressionInput.textContent = num;
    errorCondition();
})

let seven = document.querySelector('#sevenBtn')
seven.addEventListener ('click', () => {
    solve += "7";
    num += "7";
    expressionInput.textContent = num;
    errorCondition();
})

let eight = document.querySelector('#eightBtn')
eight.addEventListener ('click', () => {
    solve += "8";
    num += "8";
    expressionInput.textContent = num;
    errorCondition();
})

let nine = document.querySelector('#nineBtn')
nine.addEventListener ('click', () => {
    solve += "9";
    num += "9";
    expressionInput.textContent = num;
    errorCondition();
})

let zero = document.querySelector('#zeroBtn')
zero.addEventListener ('click', () => {
    solve += "0";
    num += "0";
    expressionInput.textContent = num;
    errorCondition();
})


let decimal = document.querySelector('#decimalBtn')
decimal.addEventListener ('click', () => {
    solve += ".";
    num += ".";
    expressionInput.textContent = num;
    errorCondition();
})

// Make operator buttons
let subtract = document.querySelector('#subBtn')
subtract.addEventListener ('click', () => {
    solve += " - ";
    num = "";
    expressionInput.textContent = num;
    console.log(solve)
    console.log(num)
}  )

let multiply = document.querySelector('#multiBtn')
multiply.addEventListener ('click', () => {
    solve += " × "
    expressionInput.textContent = "";
})




