var timer = 10;
var score = 0;
var hitrn = 0;
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 147; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".p-bottom").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".p-bottom").innerHTML = `<h1>Game Over!</h1>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector(".p-bottom").addEventListener("click", function (dets) {
  var clikednum = Number(dets.target.textContent);
  if (clikednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
