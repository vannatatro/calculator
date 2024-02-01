
let allHistory = " "
let answer = ''
let rounded = ''
let num = ''
let solve = ''
let expressionInput = document.querySelector("#expression");

function errorCondition() {
    if (num.length >= 15) 
        expressionInput.textContent = 'error';

    if (String(rounded).length >= 15) 
        expressionInput.textContent = 'error'
    
    if ((String(answer).split('.')[0]).length >=5)
     expressionInput.textContent = 'error'
}


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
    if (num.split('.').length > 2) {
        expressionInput.textContent = 'error';
    }
})

// Make operator buttons
let add = document.querySelector('#plusBtn')
add.addEventListener ('click', () => {
    if (solve == "") {
        solve = placeholder
    }
    solve += " + ";
    num = '';
    expressionInput.textContent = num;
})

let subtract = document.querySelector('#subBtn')
subtract.addEventListener ('click', () => {
    if (solve == "") {
        solve = placeholder
    }
    solve += " - ";
    num = "";
    expressionInput.textContent = num;
}  )

let multiply = document.querySelector('#multiBtn')
multiply.addEventListener ('click', () => {
    if (solve == "") {
        solve = placeholder
    }
    solve += " × "
    num = "";
    expressionInput.textContent = "";
})

let divide = document.querySelector('#divideBtn')
divide.addEventListener ('click', () => {
    if (solve == "") {
        solve = placeholder
    }
    solve += " ÷ ";
    num = "";
    expressionInput.textContent = num;
})

function roundToTwo(number) {
    // errorCondition();
  return +(Math.round(number + "e+5") + "e-5");
}


let equals = document.querySelector("#equalBtn")
equals.addEventListener ('click', () => {
    let arraySolve = solve.split(' ');
        let num1 = Number(arraySolve[0]);
        let num2 = Number(arraySolve[2]);
    if (solve.includes("+")) {
        answer = num1 + num2;
        let number = answer;
        let rounded = roundToTwo(number);
        expressionInput.textContent = rounded;
        errorCondition();
        placeholder = answer

    }
    if (solve.includes("-")) {
        answer = num1 - num2;
        let number = answer;
        let rounded = roundToTwo(number);
        expressionInput.textContent = rounded;
        errorCondition();
        placeholder = answer

    }
    if (solve.includes("×")) {
        answer = num1 * num2;
        let number = answer;
        let rounded = roundToTwo(number);
        expressionInput.textContent = rounded;
        errorCondition();
        placeholder = answer

    }
    if (solve.includes("÷")) {
        answer = num1 / num2;
        let number = answer;
        let rounded = roundToTwo(number);
        expressionInput.textContent = rounded;
        errorCondition();
        placeholder = answer

    }

    solve += " = ";
    solve += answer;
    console.log(typeof(solve))
    allHistory += solve + '\n \n';
    textHistory = document.querySelector("#history");
    textHistory.textContent = allHistory;
    solve = ""
    num = ""
})


// Delete Buttons
let ac = document.querySelector('#acBtn')
ac.addEventListener ('click', () => {
    solve = solve.slice(0, -1);
    num = num.slice(0, -1);
    expressionInput.textContent = num;
})

let ce = document.querySelector('#ceBtn')
ce.addEventListener ('click', () => {
    solve = ""
    num = ""
    answer = ""
    expressionInput.textContent = num;
})