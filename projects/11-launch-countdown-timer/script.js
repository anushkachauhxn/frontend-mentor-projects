const days = document.querySelector('main section.days'),
      hours = document.querySelector('main section.hours'),
      minutes = document.querySelector('main section.minutes'),
      seconds = document.querySelector('main section.seconds');

var currentDays = 13,
    currentHours = 23,
    currentMinutes = 59,
    currentSeconds = 59;

window.onload = () => {
    getStarted();
    changeSeconds();
}

function getStarted() {
    flipCard(days, currentDays);
    flipCard(hours, currentHours);
    flipCard(minutes, currentMinutes);
    flipCard(seconds, currentSeconds);
}

async function changeSeconds() {
    const delayTime = 1 * 1000; // 1 sec in milliseconds

    while (currentSeconds >= 0) {
        flipCard(seconds, currentSeconds);
        let delayRes = await delay(delayTime);
        
        currentSeconds--;
        if (currentSeconds < 0) {
            if (currentMinutes === 0 && currentHours === 0 && currentDays === 0) {
                return;
            }
            currentSeconds = 59;
            changeMinutes();
        }
    }
}

function changeMinutes() {
    currentMinutes--;
    if (currentMinutes < 0) {
        if (currentHours === 0 && currentDays === 0) {
            return;
        }
        currentMinutes = 59;
        changeHours();
    }
    flipCard(minutes, currentMinutes);
}

function changeHours() {
    currentHours--;
    if (currentHours < 0) {
        if (currentDays === 0) {
            return;
        }
        currentHours = 23;
        changeDays();
    }
    flipCard(hours, currentHours);
}

function changeDays() {
    currentDays--;
    if (currentDays < 0) {
        return;
    }
    flipCard(days, currentDays);
}


/* ---------------------- FLIPPING A CARD ---------------------- */
async function flipCard(section, newValue) {
    const card1 = section.querySelector('.card1'),
          card2 = section.querySelector('.card2'),
          card2Front = section.querySelector('.card2 .card-face-front'),
          card2Back = section.querySelector('.card2 .card-face-back'),
          card3 = section.querySelector('.card3');

    var val1, val2;
    val1 = newValue.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if (newValue === 0) {
        if (section === hours) {
            val2 = (23).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        } else {
            val2 = (59).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        }
    } else {
        val2 = (newValue - 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
    
    // Step #0
    card2.classList.add('is-flipped');
    let delayRes = await delay(1000); // 1sec for the animation

    // Step #1
    card3.innerHTML = val1;

    // Step #2
    card2.style.display = "none";

    // Step #3
    card2Front.innerHTML = val1;
    card2Back.innerHTML = val2;
    
    // Step #4
    card2.classList.remove('is-flipped');
    let delayRes2 = await delay(100); // we need some time between removing the flip class and displaying the element
    
    // Step #5
    card2.style.display = "block";

    // Step #6
    card1.innerHTML = val2;
}

// Delay Function
function delay(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delay);
    });
}
