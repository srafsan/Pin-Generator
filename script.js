let inputNumber, pinNumber;
let current = parseInt(document.getElementById('tries-left').innerText);

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach(function (button) {
    // *Calculate
    button.addEventListener('click', function (event) {
        const clickButtonValue = event.target.value;

        if (clickButtonValue === '=' && display.value !== '') {
            inputNumber = display.value;
            display.value = '';
        }
        else if (clickButtonValue === 'B' && display.value !== '') {
            let ttext = display.value;
            display.value = ttext.substring(0, ttext.length - 1);
        }
        else if (clickButtonValue === 'C')
            display.value = '';
        else
            display.value += clickButtonValue;
    });
});

document.querySelector('.submit-btn').addEventListener('click', function (event) {
    if (pinNumber == inputNumber) {
        document.getElementById('success-notify').style.display = 'block';
        document.getElementById('failure-notify').style.display = 'none';
    }
    else {
        document.getElementById('failure-notify').style.display = 'block';
        document.getElementById('success-notify').style.display = 'none';
        console.log(current);
        current--;

        if (current === 0)
            window.location.reload();

        document.getElementById('tries-left').innerText = current;
    }

});

const pinButton = document.getElementById('generate-btn');
const pinDisplay = document.getElementById('pin-display');

// *Random Number Generator
pinButton.addEventListener('click', function (event) {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    pinDisplay.value = randomNumber;
    pinNumber = pinDisplay.value;
});