const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const initBtn = document.querySelector("#initBtn");
const stopBtn = document.querySelector("#stopBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isStop = false;

initBtn.addEventListener("click", initTimer)
stopBtn.addEventListener("click", stopTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

function initTimer() {
    interval = setInterval(() => {

        if(!isStop) {
            miliseconds += 10

            if(miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatMiliseconds(miliseconds)
        }

    }, 10)

    initBtn.style.display = "none";
    stopBtn.style.display = "block";
}

function stopTimer() {
    isStop = true;
    stopBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isStop = false;
    stopBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes, seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = '00'
    secondsEl.textContent = '00'
    milisecondsEl.textContent = '000'

    initBtn.style.display = "block";
    stopBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}