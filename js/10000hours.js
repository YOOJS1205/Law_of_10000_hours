const StartButton = document.querySelector('.start');
const ResultBox = document.querySelector('.result');
const ToBeInput = document.querySelector('.tobe-input');
const TimeInput = document.querySelector('.time-input');
const TimeResult = document.querySelector('.time');
const ToBeResult = document.querySelector('.tobe-content');
const GoButton = document.querySelector('.go');
const Modal = document.querySelector('.modal');
const GoTraining = document.querySelector('.go-training');

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

GoButton.addEventListener('click', () => {
    Modal.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
})

GoTraining.addEventListener('click', () => {
    Modal.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
})