let iChoose = document.querySelectorAll(".mychoice");
let imgMe = document.getElementById("imgMyChoice");
let imgPc = document.getElementById("imgPcChoice");
let pcChoose = document.getElementById("pc");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let typeChoice = document.getElementById("typeChoice");
let myChoice = "make a choice";

typeChoice.addEventListener("keydown", typeIn);
function typeIn(event) {
  if (event.key === "Enter") {
    let allCap = typeChoice.value.toUpperCase();
    console.log(allCap);
    if (allCap === "ROCK") {
      imgMe.innerHTML =
        '<i class="far fa-7x fa-hand-rock fa-flip-vertical"></i>';
      myChoice = "ROCK";
    } else if (allCap === "PAPER") {
      imgMe.innerHTML =
        '<i class="far fa-7x fa-hand-paper fa-flip-vertical"></i>';
      myChoice = "PAPER";
    } else if (allCap === "SCISSOR") {
      imgMe.innerHTML =
        '<i class="far fa-7x fa-hand-scissors fa-rotate-270"></i>';
      myChoice = "SCISSOR";
    } else {
      result.innerHTML = "Invalid choice";
    }
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
    return myChoice;
  }
}

iChoose.forEach(ready);
function ready(rps) {
  rps.addEventListener("click", choose);
}
function choose() {
  myChoice = this.innerHTML;
  console.log(myChoice);

  if (myChoice === "ROCK") {
    imgMe.innerHTML = '<i class="far fa-7x fa-hand-rock fa-flip-vertical"></i>';
  } else if (myChoice === "PAPER") {
    imgMe.innerHTML =
      '<i class="far fa-7x fa-hand-paper fa-flip-vertical"></i>';
  } else {
    imgMe.innerHTML =
      '<i class="far fa-7x fa-hand-scissors fa-rotate-270"></i>';
  }
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissor").disabled = true;
  return myChoice;
}

pcChoose.addEventListener("click", set);
function set() {
  if (myChoice === "make a choice") {
    result.innerHTML = "Please make a choice";
  } else {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      imgPc.innerHTML = '<i class="far fa-7x fa-hand-rock"></i>';
      pcChoice = "ROCK";
    } else if (random === 1) {
      imgPc.innerHTML = '<i class="far fa-7x fa-hand-paper"></i>';
      pcChoice = "PAPER";
    } else {
      imgPc.innerHTML =
        '<i class="far fa-7x fa-hand-scissors fa-rotate-90"></i>';
      pcChoice = "SCISSOR";
    }
    document.getElementById("pc").disabled = "true";

    go(pcChoice);
  }
}
function go() {
  if (myChoice === "ROCK") {
    if (pcChoice === "ROCK") {
      result.innerHTML = "It's a draw";
    } else if (pcChoice === "PAPER") {
      result.innerHTML = "You lose";
    } else {
      result.innerHTML = "You win";
    }
  } else if (myChoice === "PAPER") {
    if (pcChoice === "PAPER") {
      result.innerHTML = "It's a draw";
    } else if (pcChoice === "SCISSOR") {
      result.innerHTML = "You lose";
    } else {
      result.innerHTML = "You win";
    }
  } else {
    if (pcChoice === "SCISSOR") {
      result.innerHTML = "It's a draw";
    } else if (pcChoice === "ROCK") {
      result.innerHTML = "You lose";
    } else {
      result.innerHTML = "You win";
    }
  }
}

reset.addEventListener("click", empty);
function empty() {
  pcChoice = "";
  myChoice = "make a choice";
  typeChoice.value = "";
  imgMe.innerHTML = '<i class="far fa-7x fa-question-circle"></i>';
  imgPc.innerHTML = '<i class="far fa-7x fa-question-circle"></i>';
  result.innerHTML = "Please make a choice";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissor").disabled = false;
  document.getElementById("pc").disabled = false;
}
