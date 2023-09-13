let display = document.getElementById("display")
let calcString = ""
let calcArray
let calc

let concat = (buttonNum) => {
    calcString += buttonNum
    display.innerText = calcString
}

let findCalc = (calcString) => {
if (calcString.includes("-")) {
    calcArray = calcString.split("-")
    calc = Number(calcArray[0]) - Number(calcArray[1])
    return calc
} else if (calcString.includes("+")) {
    calcArray = calcString.split("+")
    calc = Number(calcArray[0]) + Number(calcArray[1])
    return calc
} else if (calcString.includes("/")) {
    calcArray = calcString.split("/")
    calc = Number(calcArray[0]) / Number(calcArray[1])
    return calc
} else if (calcString.includes("*")) {
    calcArray = calcString.split("*")
    calc = Number(calcArray[0]) * Number(calcArray[1])
    return calc
    }
}

let displayAnswer = (calc) => {
    display.innerText = calc
    calcString = ""
    calcString += calc
}