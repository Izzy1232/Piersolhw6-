console.log("Piersol's Output from HW 6 Example 2");

const displayText400 = () => {

  const x = Array.from(document.getElementsByClassName("400level"))
  x.forEach(course => console.log(course.textContent))
}

displayText400();
