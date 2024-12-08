console.log("Piersol's Output from HW 6 Example 4");

const addLink = () => {
  
  let x = document.getElementById('links')
  let newItem = document.createElement('li')
  let newLink = document.createElement('a')
  
  newLink.textContent = 'College of Business'
  newLink.href = 'https://www.csulb.edu/college-of-business'
  
  newItem.appendChild(newLink)
  
  let isLink = document.getElementById('is')
  x.insertBefore(newItem, isLink)
}

addLink()
