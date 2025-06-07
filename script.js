const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erreur';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    const val = button.getAttribute('data-value');
    if (val) {
        button.addEventListener('click', () => appendValue(val));
    }
});

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculate);
