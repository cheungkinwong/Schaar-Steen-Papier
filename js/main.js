let iChoose = document.querySelectorAll(".mychoice");
let pcChoose = document.getElementById("pc");

iChoose.forEach(ready);
function ready(rps) {
  rps.addEventListener("click", function() {});
  console.log(rps, "rofl");
}

pcChoose.addEventListener("click", set);
function set() {
  let random = Math.floor(Math.random() * 3);
  let computerchoose;
  if (random === 0) {
    computerchoose = "rock";
    pcChoose.innerHTML = '<i class="far fa-hand-rock"></i>';
  } else if (random === 1) {
    computerchoose = "paper";
    pcChoose.innerHTML = '<i class="far fa-hand-paper"></i>';
  } else {
    computerchoose = "scissor";
    pcChoose.innerHTML = '<i class="far fa-hand-scissors"></i>';
  }
  console.log(computerchoose, random, "lmao");
}

function go() {
  if (mychoice === "rock") {
  }
}
