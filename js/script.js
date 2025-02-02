// header
let logoHeader = document.querySelector("header");
//domcontentloader does not wait for stylesheet to load
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    //moves the header up 100vh and stays for 3 secs
    logoHeader.style.top = "-100vh";
  }, 3000);
});

// dark mode
// function darkM is linked to the button on the lightbulb picture
function darkM() {
  //this selects the section and switches it to dark-mode class css code.
  let darkMode = document.querySelector("section");
  darkMode.classList.toggle("dark-mode");
  // selects the lightbulb light picture and switches it to the dark picture.
  let lightOn = document.querySelector(".light-bulb");
  lightOn.classList.toggle("bulb-off");
  // selects tv light and switches to tv dark
  let tvImg = document.querySelector(".tv-img");
  tvImg.classList.toggle("tv-black");
  //selects textarea and switches to class questbTest
  let questText = document.querySelector("textarea");
  questText.classList.toggle("questbText");
  // selects light tape into dark tape
  let questImg = document.querySelector(".tape");
  questImg.classList.toggle("tapeDark");
  // selects light button into dark button
  let enterB = document.querySelector(".enterButton");
  enterB.classList.toggle("enterDbutton");
  // on click it makes the light bulb click sound
  clickSound = new Audio("media/clickswitch.mp3");
  clickSound.volume = 0.25;
  clickSound.play();
}

// Question & Answers
function randomAnswers(max_number) {
  // rounds number and randomizes number * max_number
  return Math.round(Math.random() * max_number);
}

// button = enter button and answer = Answer
let button = document.querySelector(".enterButton");
let answer = document.querySelector(".ansText");

button.addEventListener("click", function () {
  //random of 20 number answers
  let randomNum = randomAnswers(19);
  let answerResult = "";

  // random answers

  if (randomNum == 0) {
    answerResult = "My reply is NO!";
  } else if (randomNum == 1) {
    answerResult = "Don't count on it";
  } else if (randomNum == 2) {
    answerResult = "My sources say no";
  } else if (randomNum == 3) {
    answerResult = "Very doubtful";
  } else if (randomNum == 4) {
    answerResult = "Outlook not so good";
  } else if (randomNum == 5) {
    answerResult = "Better not tell you now";
  } else if (randomNum == 6) {
    answerResult = "Cannot predict now (⌯ᵕɪᵕ⌯)zzZ";
  } else if (randomNum == 7) {
    answerResult = "Ask again later (⌯ᵕɪᵕ⌯)zzZ";
  } else if (randomNum == 8) {
    answerResult = "Reply hazy try again (⌯ᵕɪᵕ⌯)zzZ";
  } else if (randomNum == 9) {
    answerResult = "Concentrate and ask again (⌯ᵕɪᵕ⌯)zzZ";
  } else if (randomNum == 10) {
    answerResult = "Outlook good";
  } else if (randomNum == 11) {
    answerResult = "Most likely";
  } else if (randomNum == 12) {
    answerResult = "Signs point to YES!";
  } else if (randomNum == 13) {
    answerResult = "As I see it, yes";
  } else if (randomNum == 14) {
    answerResult = "YES!";
  } else if (randomNum == 15) {
    answerResult = "You may rely on it";
  } else if (randomNum == 16) {
    answerResult = "Without a doubt";
  } else if (randomNum == 17) {
    answerResult = "Yes, definitely";
  } else if (randomNum == 19) {
    answerResult = "It is decidedly so";
  } else {
    answerResult = "It is certain";
  }
  //function so I can set a timer
  function answers() {
    answer.innerHTML = answerResult;
  }

  // timed answer

  setTimeout(function () {
    answers();
  }, 1000);
});

function sound() {
  meow = new Audio("media/shortmeow.mp3");
  meow.volume = 0.1;
  meow.play();
}

// typewriter

var i = 0;
let text = ["Yes or No Questions!"];
let speed = 150;
// Looks at the h1 class and then starts text location [0] and adds a letter if its not != text[0] length. Sets a timer for the text
typeWriter = () => {
  document.querySelector(".questHeading").innerHTML = text[0].substring(0, i);
  if (i++ != text[0].length) setTimeout(typeWriter, speed);
  window.addEventListener("load", typeWriter);
};

const section = document.querySelector(".bgDisplay");

section.style.display = "none";

setTimeout(function () {
  // Set the style of the element to visible
  section.style.display = "block";
}, 3000);

setTimeout(function () {
  typeWriter();
}, 3000);
