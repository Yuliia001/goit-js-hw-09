const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
const { startBtn, stopBtn, body } = refs;

startBtn.addEventListener('click', handlerChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

let timeId = 0;

function handlerChangeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timeId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
}
function stopChangeColor() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




