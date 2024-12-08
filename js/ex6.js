console.log("Piersol's Output from HW 6 Example 6");

const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

let miniDictionary = () => {

  let dl = document.createElement("dl")
  words.forEach(w => {

    let dt = document.createElement("dt")
    dt.innerHTML = `<strong>${w.term}</strong>`

    let dd = document.createElement("dd")
      dd.textContent = w.definition

      dl.appendChild(dt)
      dl.appendChild(dd)
    })
    document.getElementById("content").appendChild(dl)
  }
  
  
  miniDictionary ()