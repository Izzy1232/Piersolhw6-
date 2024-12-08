console.log("Piersol's Output from HW 6 Example 7");

const contentDiv = document.getElementById("content")
function calculateSum() {
    const num1 = prompt("Enter the first integer:")
    const num2 = prompt("Enter the second integer:")
    contentDiv.innerHTML = ""
    if (isNaN(num1) || isNaN(num2) || num1.trim() === "" || num2.trim() === "") {
        const errorMessage = `Error! You must enter integers. You entered "${num1}" and "${num2}". Try again.`
        contentDiv.innerHTML = `<span style="color: red; font-weight: bold;">${errorMessage}</span>`
    } else {
        const sum = parseInt(num1, 10) + parseInt(num2, 10)
        contentDiv.innerHTML = `${num1} + ${num2} = <span style="color: red; font-weight: bold;">${sum}</span>`
    }
}


calculateSum()
