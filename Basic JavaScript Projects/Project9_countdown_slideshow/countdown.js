//countdown.js



const startingMinutes = 10;
let time = startingMinutes * 60;

//countdown timer

const countdownEl = document.getElementById("countdown");
let refreshInterval = setInterval(updateCountdown, 1000);//update every 1 second..


function updateCountdown() {
    const minutes = Math.floor(time / 60);
      let seconds = time % 60;

    seconds = seconds < 10 ? ' 0 ' + seconds : seconds;

    countdownEl.innerHTML = minutes+ ":" + seconds;
    time--;
    time = time < 0 ? 0:time; //to avoid getting negative numbers
}