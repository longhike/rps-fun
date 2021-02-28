//                      0    1    2
let possibleAnswers = ["r", "p", "s"];

let myScore = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

function runGame() {
      let myInput = window.prompt("Do you want to enter r p or s (or q to quit):");
      if (myInput === "q") {
          window.alert("Ok, bye!")
      } else {
          round(myInput)
      }      
}

runGame()

function round(functionMyInput) { 
    let randomNum = Math.floor(Math.random() * 3);
    let compInput = possibleAnswers[randomNum];
    if (functionMyInput === compInput) {
      myScore.ties = myScore.ties + 1;
    } else {
      if (functionMyInput === "r" && compInput === "p") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.losses = myScore.losses + 1;
      }
      if (functionMyInput === "r" && compInput === "s") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.wins = myScore.wins + 1;
      }
      if (functionMyInput === "p" && compInput === "s") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.losses = myScore.losses + 1;
      }
      if (functionMyInput === "p" && compInput === "r") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.wins = myScore.wins + 1;
      }
      if (functionMyInput === "s" && compInput === "r") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.losses = myScore.losses + 1;
      }
      if (functionMyInput === "s" && compInput === "p") {
          console.log(`my input: ${functionMyInput}`)
          console.log(`comp input: ${compInput}`)
          myScore.wins = myScore.wins + 1;
      }
    }
    window.alert(`wins: ${myScore['wins']}\nlosses: ${myScore['losses']};\nties: ${myScore['ties']}`)
    runGame()
  }