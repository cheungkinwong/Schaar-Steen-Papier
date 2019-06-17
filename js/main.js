let iChoose = document.querySelectorAll(".mychoice");
let imgMe = document.getElementById("imgMyChoice");
let imgPc = document.getElementById("imgPcChoice");
let pcChoose = document.getElementById("pc");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let myChoice = "make a choice";

iChoose.forEach(ready);
function ready(rps) {
  rps.addEventListener("click", function() {
    myChoice = rps.innerHTML;
    if (myChoice === "ROCK") {
      imgMe.innerHTML = '<i class="far fa-hand-rock fa-rotate-90"></i>';
    } else if (myChoice === "PAPER") {
      imgMe.innerHTML = '<i class="far fa-hand-paper fa-rotate-90"></i>';
    } else {
      imgMe.innerHTML =
        '<i class="far fa-hand-scissors fa-flip-horizontal"></i>';
    }
    return myChoice;
  });
}

pcChoose.addEventListener("click", set);
function set() {
  if (myChoice === "make a choice") {
    result.innerHTML = "Please make a choice";
  } else {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      imgPc.innerHTML = '<i class="far fa-hand-rock fa-rotate-270"></i>';
      pcChoice = "ROCK";
    } else if (random === 1) {
      imgPc.innerHTML = '<i class="far fa-hand-paper fa-rotate-270"></i>';
      pcChoice = "PAPER";
    } else {
      imgPc.innerHTML = '<i class="far fa-hand-scissors "></i>';
      pcChoice = "SCISSOR";
    }
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
  imgMe.innerHTML = "";
  imgPc.innerHTML = "";
  result.innerHTML = "";
}
