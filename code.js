// Make functions
let num1 = 6
let num2 = 3

var input = "error"
let expressionInput = document.querySelector("#expression")
expressionInput.textContent = input

const add = num1 + num2
const subtract = num1 - num2
const divide = num1 / num2
const multiply = num1 * num2

console.log(add)
console.log(subtract)
console.log(divide)
console.log(multiply)

// Make buttons work

let one = document.querySelector('#oneBtn')
one.addEventListener ('click', () => {
    console.log('1')
})

let two = document.querySelector('#twoBtn')
two.addEventListener ('click', () => {
    console.log('2')
})

let three = document.querySelector('#threeBtn')
three.addEventListener ('click', () => {
    console.log('3')
})

let four = document.querySelector('#fourBtn')
four.addEventListener ('click', () => {
    console.log('4')
})

let five = document.querySelector('#fiveBtn')
five.addEventListener ('click', () => {
    console.log('5')
})

let six = document.querySelector('#sixBtn')
six.addEventListener ('click', () => {
    console.log('6')
})

let seven = document.querySelector('#sevenBtn')
seven.addEventListener ('click', () => {
    console.log('7')
})

let eight = document.querySelector('#eightBtn')
eight.addEventListener ('click', () => {
    console.log('8')
})

let nine = document.querySelector('#nineBtn')
nine.addEventListener ('click', () => {
    console.log('9')
})

let zero = document.querySelector('#zeroBtn')
zero.addEventListener ('click', () => {
    console.log('0')
})


let decimal = document.querySelector('#decimalBtn')
decimal.addEventListener ('click', () => {
    console.log('.')
})