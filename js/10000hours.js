const StartButton = document.querySelector('.start');
const ResultBox = document.querySelector('.result');
const ToBeInput = document.querySelector('.tobe-input');
const TimeInput = document.querySelector('.time-input');
const TimeResult = document.querySelector('.time');
const ToBeResult = document.querySelector('.tobe-content');

var toBe = '';
var time = 0;

TimeInput.addEventListener('input', e => {
    time = e.target.value;
});

ToBeInput.addEventListener('input', e => {
    toBe = e.target.value;
})

StartButton.addEventListener('click', () => {
    ResultBox.classList.remove('hidden');
    TimeResult.innerText = Math.round(10000 / time);
    ToBeResult.innerText = toBe;
});