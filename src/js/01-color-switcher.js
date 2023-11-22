const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId;

refs.start.addEventListener('click', () => {
    refs.start.disabled = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
})

refs.stop.addEventListener('click', () => {
    refs.start.disabled = false;
    clearInterval(intervalId);
})