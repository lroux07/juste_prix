let count = document.querySelector('#count');
let input = document.querySelector('#input');
let value = document.querySelector('#value');
let score = document.querySelector('#score');
let scoreCount = 0;

score.textContent = scoreCount;

let random = count.textContent = Math.floor(Math.random() * 100);

let inputValue;
input.addEventListener('change', (e) => {
    inputValue = e.target.value;

    if (parseInt(inputValue) === random) {
        alert('Bravo');
        random = count.textContent = Math.floor(Math.random() * 100);
        score.textContent = scoreCount += 1000;
    } else if(parseInt(inputValue) !== random && parseInt(inputValue) - random < 5) {
        score.textContent = scoreCount += 100;
    }
});