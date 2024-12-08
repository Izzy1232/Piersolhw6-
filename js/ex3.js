console.log("Piersol's Output from HW 6 Example 3");

const style = () => {
  const paragraphs = document.querySelectorAll('p')
  paragraphs.forEach(paragraph => {
      paragraph.style.fontWeight = 'bold'
      paragraph.style.backgroundColor = 'yellow'
  })
}

style();
