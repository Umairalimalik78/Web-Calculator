let input = document.getElementById('userInput')
let output = document.getElementById('calcOutput')
let dotCount = 0

function displayInput(num) {
    let operators = ['+', '-', '/', '*', '%']
    let lastLetter = input.value[input.value.length - 1]

    if (operators.includes(lastLetter) && operators.includes(num)) {
        input.value = input.value.slice(0, -1) + num
        return
    }
    if (num === '.') {
        dotCount++
        if (dotCount > 1) {
            return
        }
    }
    input.value += num

}

function clearAllInput() {
    input.value = ''
    output.innerHTML = ''
}

function clearOneInput() {
    input.value = input.value.slice(0, -1)
}

function calculate() {
    try {
        let result = parseFloat(eval(input.value.replace(/%/g, '/100')).toFixed(10))
        output.innerHTML = result
    } catch {
        output.innerHTML = "Error"
    }
}
