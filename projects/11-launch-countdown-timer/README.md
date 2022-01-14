# 🎯 Frontend Mentor - Launch Countdown Timer Challenge

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## 📜 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## 📝 Overview

### The challenge

- Your challenge is to build out this countdown timer and get it looking as close to the design as possible.
- Your users should be able to:
  - See hover states for all interactive elements on the page
  - See a live countdown timer that ticks down every second (start the count at 14 days)
  - **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

<img src="./assets/screenshot.png">

### Links

- Solution URL: [Link](https://github.com/anushkachauhxn/frontend-mentor-projects/tree/main/projects/11-launch-countdown-timer)
- Live Site URL: [Link](https://anushkachauhxn.github.io/frontend-mentor-projects/projects/11-launch-countdown-timer/)

## 💡 My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

I learnt a lot about CSS 3D Transforms and JS Time Functions.

#### 😎 Proud of this JS:

```js
async function flipCard(section, newValue) {
  const card1 = section.querySelector(".card1"),
    card2 = section.querySelector(".card2"),
    card2Front = section.querySelector(".card2 .card-face-front"),
    card2Back = section.querySelector(".card2 .card-face-back"),
    card3 = section.querySelector(".card3");

  var val1, val2;
  
  val1 = newValue.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
  if (newValue === 0) {
    if (section === hours) {
      val2 = (23).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    } else {
      val2 = (59).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    }
  } else {
    val2 = (newValue - 1).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
  }

  // Step #0
  card2.classList.add("is-flipped");
  let delayRes = await delay(1000); // 1sec for the animation

  // Step #1
  card3.innerHTML = val1;

  // Step #2
  card2.style.display = "none";

  // Step #3
  card2Front.innerHTML = val1;
  card2Back.innerHTML = val2;

  // Step #4
  card2.classList.remove("is-flipped");
  let delayRes2 = await delay(100); // we need some time between removing the flip class and displaying the element

  // Step #5
  card2.style.display = "block";

  // Step #6
  card1.innerHTML = val2;
}
```

#### 🧠 Algorithm for flipping a Card:

<img width="420px" src="https://user-images.githubusercontent.com/59930625/149552059-fad972e7-f866-47cd-8d6c-172580e47c05.jpeg">

Take 3 cards - Card1, Card2 (with front and back for 3D tranform) & Card3

When changing a number on the board:

1. Flip Card2 (front face to back face)
2. Change Card3 -> new value
   - This makes Card1 and Card3 both have the same 'new' value.
3. Remove Card2 from display
4. Change values of Card2 to accomodate the new values
   - Card2 Front -> new value
   - Card2 Back -> new value - 1 (for next flip)
5. Remove 'is-flipped' class to put it in its 'unflipped' original position
   - Now it is ready for next flip
6. Display Card2 (with changed values)
7. Change Card1 -> new value - 1
   - Card2 covers it so we can change the value for next flip.

### 🔮 Continued development

In the future, I would like to refine the visuals in this project. I feel that the animations could be smoother with more effort.

### 🔎 Useful resources

- [Intro to CSS 3D Transforms - Card Flip](https://3dtransforms.desandro.com/card-flip)

- [How to set time delay in javascript?](https://stackoverflow.com/a/49813472/12302691)

- [How to format numbers by prepending 0 to single-digit numbers?](https://stackoverflow.com/a/31466357/12302691)

## ⭐ Author

- GitHub - [@anushkachauhxn](https://github.com/anushkachauhxn)
- Behance - [@anushka_creates](https://www.behance.net/anushka_creates)

- LinkedIn - [@anushka-chauhan](https://www.linkedin.com/in/anushka-chauhan)
- Twitter - [@anushka_creates](https://twitter.com/anushka_creates)
