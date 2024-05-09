
const buttonsEl = document.querySelectorAll("button");
const inputEl = document.querySelector("#natija");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonPressed = buttonsEl[i].textContent;
        if (buttonPressed === "C") {
            natijatoza();
        } else if (buttonPressed === '=') {
            natija();
        } else {
            hisob(buttonPressed);
        }
    });
}

function natijatoza() {
    inputEl.value = "";
}

function natija() {
    inputEl.value = evaluateExpression(inputEl.value);
}

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Invalid Expression';
    }
}

function hisob(buttonPressed) {
    inputEl.value += buttonPressed;
}
