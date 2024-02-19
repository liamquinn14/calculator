
let display = document.getElementById("display")
let calcString = ""
let calcArray
let calc
let answered = false

let makeTrue = () => {
    answered = true
}

let makeFalse = () => {
    answered = false
}

let concat = (buttonNum) => {
if (calcString.length < 12) {
    if (answered === true && buttonNum === "-" || answered === true && buttonNum === "+" || answered === true && buttonNum === "/" || answered === true && buttonNum === "*") {
        calcString = calcString + buttonNum
        display.innerText = calcString
    } else if (answered === true && typeof Number(buttonNum) === "number") {
        display.innerText = buttonNum
        calcString = display.innerText
    } else if (calcString.includes("-") || calcString.includes("+") || calcString.includes("/") || calcString.includes("*")) {
    if (buttonNum === "-" || buttonNum === "+" || buttonNum === "/" || buttonNum === "*") {
        display.innerText = findCalc(calcString) + buttonNum
        calcString = display.innerText
    } else {
        calcString += buttonNum
        display.innerText = calcString
    }
} else {
    calcString += buttonNum
    display.innerText = calcString
    }
}
}
    
let findCalc = (calcString) => {
    if (calcString.endsWith("/0")) {
        calc = 69
        return calc
} else if (calcString.includes("+")) {
    calcArray = calcString.split("+")
    calc = Number(calcArray[0]) + Number(calcArray[1])
    if (calc.toString().length > calc.toFixed(4).length) {
        calc = calc.toFixed(4)
        return calc
    }
    return calc
} else if (calcString.includes("/")) {
    calcArray = calcString.split("/")
    calc = Number(calcArray[0]) / Number(calcArray[1])
    if (calc.toString().length > calc.toFixed(4).length) {
        calc = calc.toFixed(4)
        return calc
    }
    return calc
} else if (calcString.includes("*")) {
    calcArray = calcString.split("*")
    calc = Number(calcArray[0]) * Number(calcArray[1])
    if (calc.toString().length > calc.toFixed(4).length) {
        calc = calc.toFixed(4)
        return calc
    }
    return calc
} else if (calcString.includes("-")) {
    if (calcString.split("-").length > 2) {
        calcArray = [calcString.split("-")[1], calcString.split("-")[2]]
        calc = - Number(calcArray[0]) - Number(calcArray[1])
        if (calc.toString().length > calc.toFixed(4).length) {
            calc = calc.toFixed(4)
            return calc
        }
        return calc
    } else {
        calcArray = calcString.split("-")
        calc = Number(calcArray[0]) - Number(calcArray[1])
        if (calc.toString().length > calc.toFixed(4).length) {
            calc = calc.toFixed(4)
            return calc
        }
        return calc
    }
}
}

let displayAnswer = (calc) => {
    display.innerText = calc
    calcString = ""
    calcString += calc
}

let reset = () => {
    calcString = ""
    display.innerText = 0
}

let charactersRemaining = document.getElementById("characters-remaining")

let genCharactersRemaining = (calcString) => {
    return charactersRemaining.innerText = (12 - calcString.length) + " characters remaining"
}
