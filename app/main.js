const counterInput = document.getElementById('counterInput');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) + 1;
    updateColor();
});

decrementBtn.addEventListener('click', () => {
    counterInput.value = parseInt(counterInput.value) - 1;
    updateColor();
});

resetBtn.addEventListener('click', () => {
    counterInput.value = 0;
    updateColor();
});

function updateColor() {
    const value = parseInt(counterInput.value);
    if (value > 0) {
        counterInput.classList.remove('gray', 'red');
        counterInput.classList.add('green');
    } else if (value < 0) {
        counterInput.classList.remove('gray', 'green');
        counterInput.classList.add('red');
    } else {
        counterInput.classList.remove('green', 'red');
        counterInput.classList.add('gray');
    }
}

updateColor();

function showMessage(text) {
    document.getElementById('message').textContent = text;
}

