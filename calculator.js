let calculationDigits = document.querySelectorAll(".calc")
let calcStr = '';
let displayStr = ''
let screen = document.getElementById("screen")
calculationDigits.forEach(letter => {
    letter.addEventListener("click", () => {
        calcStr += letter.dataset.digit
        displayStr += letter.innerText
        console.log(calcStr)
        screen.innerHTML = displayStr
    })
})
console.log(eval(3**3))
document.querySelector(".equal").addEventListener("click", () => {
    screen.innerText = eval(calcStr);
    calcStr = ""
    displayStr = ""
})

document.getElementById("clearAll").addEventListener("click",()=>{
    calcStr =  ""
    screen.innerText = "0"
})

document.getElementById("clear").addEventListener("click",()=>{
    calcStr = calcStr.slice(0,-1)
    displayStr = displayStr.slice(0,-1)
    screen.innerText = displayStr
})



