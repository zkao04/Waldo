var waldo = document.querySelector("img");
var playground = document.querySelector(".WhereWaldoBelong");
var score = 0;

function randomPlace(person){
  person.style.left = ((Math.random() *  playground.offsetWidth) + 80 ) + "px"
  person.style.top = ((Math.random() * playground.offsetHeight) +  133 ) + "px"
}

function waldoAppears(){
  score ++
  document.querySelector("#score").innerHTML = score
  waldo.style.opacity = 1
  alert ("Congrats! You've found Waldo")
  randomPlace(waldo)
}

waldo.addEventListener("click", waldoAppears)
randomPlace(waldo)
// function
