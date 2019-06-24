let iChoose = document.querySelectorAll(".mychoice");
let imgMe = document.getElementById("imgMyChoice");
let imgPc = document.getElementById("imgPcChoice");
let pcChoose = document.getElementById("pc");
let reset = document.getElementById("reset");
let result = document.getElementById("result");
let typeChoice = document.getElementById("typeChoice");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let pc = document.getElementById("pc");
let myChoice = "make a choice";

typeChoice.addEventListener("keyup", typeIn);
function typeIn(event) {
  if (event.key === "Enter") {
    let allCap = typeChoice.value.toUpperCase();
    allCap === "ROCK"
      ? chooseRock()
      : allCap === "PAPER"
      ? choosePaper()
      : allCap === "SCISSOR"
      ? chooseScissor()
      : allCap === "SPOCK"
      ? chooseSpock()
      : (result.innerHTML = "Invalid Choice");
    disable();
    return myChoice;
  }
}

iChoose.forEach(ready);
function ready(rps) {
  rps.addEventListener("click", choose);
}
function choose() {
  myChoice = this.innerHTML;
  if (myChoice === "ROCK") {
    chooseRock();
  } else if (myChoice === "PAPER") {
    choosePaper();
  } else {
    chooseScissor();
  }
  disable();
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
      pc.innerHTML = "ROCK";
    } else if (random === 1) {
      imgPc.innerHTML = '<i class="far fa-7x fa-hand-paper"></i>';
      pcChoice = "PAPER";
      pc.innerHTML = "PAPER";
    } else {
      imgPc.innerHTML =
        '<i class="far fa-7x fa-hand-scissors fa-rotate-90"></i>';
      pcChoice = "SCISSOR";
      pc.innerHTML = "SCISSOR";
    }
    pc.disabled = true;
    pc.style.color = "blue";
    go(pcChoice);
  }
}

let chooseRock = () => {
  imgMe.innerHTML = '<i class="far fa-7x fa-hand-rock fa-flip-vertical"></i>';
  rock.style.color = "blue";
  myChoice = "ROCK";
};

let choosePaper = () => {
  imgMe.innerHTML = '<i class="far fa-7x fa-hand-paper fa-flip-vertical"></i>';
  paper.style.color = "blue";
  myChoice = "PAPER";
};

let chooseScissor = () => {
  imgMe.innerHTML = '<i class="far fa-7x fa-hand-scissors fa-rotate-270"></i>';
  scissor.style.color = "blue";
  myChoice = "SCISSOR";
};

let chooseSpock = () => {
  imgMe.innerHTML =
    '<i class="far fa-7x fa-hand-spock fa-flip-horizontal"></i>';
  myChoice = "SPOCK";
};

let disable = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
  typeChoice.disabled = true;
};

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
  } else if (myChoice === "SCISSOR") {
    if (pcChoice === "SCISSOR") {
      result.innerHTML = "It's a draw";
    } else if (pcChoice === "ROCK") {
      result.innerHTML = "You lose";
    } else {
      result.innerHTML = "You win";
    }
  } else if (myChoice === "SPOCK") {
    result.innerHTML = "Live long and prosper";
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
  rock.disabled = false;
  rock.style.color = "black";
  paper.disabled = false;
  paper.style.color = "black";
  scissor.disabled = false;
  scissor.style.color = "black";
  typeChoice.disabled = false;
  pc.style.color = "black";
  pc.disabled = false;
  pc.innerHTML = "COMPUTER";
}
