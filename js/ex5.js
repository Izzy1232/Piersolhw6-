console.log("Piersol's Output from HW 6 Example 5");

let createTable = () => {
  let table = document.createElement("table")
  for (i = 1; i <13; i++ ) {
    let row = document.createElement('tr')
    let cell = document.createElement('td')
    let cellText = document.createTextNode (`${i}`)
    cell.appendChild(cellText)
    row.appendChild(cell)
    table.appendChild(row)
    
    if (i % 4 === 0) {
      cell.style.backgroundColor = "lightblue"
    }

    cell.style.textAlign = "center"
  }
  let output = document.getElementById('output')
  output.appendChild(table)
}  

createTable()
