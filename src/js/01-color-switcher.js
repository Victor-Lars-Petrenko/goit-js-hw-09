const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId;

start.addEventListener('click', evt => {
    start.disabled = true;
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
})

stop.addEventListener('click', e => {
    start.disabled = false;
    clearInterval(intervalId);
})