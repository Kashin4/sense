var makeItRain = function () {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 95) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 85) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 85) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
};

$(".splat-toggle.toggle").on("click", function () {
  $("article").toggleClass("splat-toggle");
  $(".splat-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".back-row-toggle.toggle").on("click", function () {
  $("article").toggleClass("back-row-toggle");
  $(".back-row-toggle.toggle").toggleClass("active");
  makeItRain();
});

$(".single-toggle.toggle").on("click", function () {
  $("article").toggleClass("single-toggle");
  $(".single-toggle.toggle").toggleClass("active");
  makeItRain();
});

makeItRain();

// ==============play button ====================

$(".control").on("click", function () {
  $(this).toggleClass("pause play");
});

// ============== player ===================

const player = document.querySelector(".control"),
  playBtn = document.querySelector(".play"),
  playBtn2 = document.querySelector(".play2"),
  playBtn3 = document.querySelector(".play3"),
  pauseBtn = document.querySelector(".pause"),
  sound = document.querySelector(".sound"),
  sound2 = document.querySelector(".sound2"),
  sound3 = document.querySelector(".sound3");


  // название песен


// Play 
function playSong() { 
  sound.play();
}
function pauseSong() {
  sound.pause();
}

// Play 2
function playSong2() {
  sound2.play();
}
function pauseSong2() {
  sound2.pause();
}

// Play 3
function playSong3() {
  sound3.play();
}
function pauseSong3() {
  sound3.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
playBtn2.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play2");
  if (isPlaying) {
    player.classList.remove('play2')
    pauseSong2();
  } else {
    player.classList.add("play2");
    playSong2();
  }
});

playBtn3.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play3");
  if (isPlaying) {
    player.classList.remove("play3");
    pauseSong3();
  } else {
    player.classList.add("play3");
    playSong3();
  }
});