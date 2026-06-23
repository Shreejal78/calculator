let calculationDigits = document.querySelectorAll(".calc")
let calcStr = '';
let displayStr = ''
let ans = ""
let screen = document.getElementById("screen")
calculationDigits.forEach(letter => {
    letter.addEventListener("click", () => {
        calcStr += letter.dataset.digit
        displayStr += letter.innerText
        console.log(calcStr)
        screen.innerHTML = displayStr
    })
})
document.querySelector(".equal").addEventListener("click", () => {
    ans = eval(calcStr)
    screen.innerText = ans;
    calcStr = ""
    displayStr = ""
    calcStr += ans
    displayStr += ans

})
console.log(eval('60'))
document.getElementById("clearAll").addEventListener("click", () => {
    calcStr = ""
    displayStr = ""
    screen.innerText = "0"
})

document.getElementById("clear").addEventListener("click", () => {
    calcStr = calcStr.slice(0, -1)
    displayStr = displayStr.slice(0, -1)
    if (displayStr == "") {
        screen.innerText = "0"
    } else {
        screen.innerText = displayStr
    }
    
    
})


