function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1, num2;

const equals = document.querySelector(".equals");
const screen = document.querySelector("#bottom"); //lower screen
const topScr = document.querySelector("#top");
const clear = document.querySelector(".clear");
const clearE = document.querySelector(".clearE");
const del = document.querySelector(".delete");
const dot = document.querySelector(".dot");
const psm = document.querySelector(".psm");

let numbers = document.querySelectorAll(".number");
let signs = document.querySelectorAll(".sign");

equals.addEventListener("click", () => {
    if (topScr.textContent.includes('+') || topScr.textContent.includes('-') || topScr.textContent.includes('*') || topScr.textContent.includes('/')) {
        num1 = Number(topScr.textContent.slice(0, topScr.textContent.length - 2));
        num2 = Number(screen.textContent);
        let sign = topScr.textContent.charAt(topScr.textContent.length - 1);
        switch (sign) {
            case "+":
                topScr.textContent = `${add(num1, num2).toFixed(2)}`;
                break;
            case "-":
                topScr.textContent = `${subtract(num1, num2).toFixed(2)}`;
                break;
            case "*":
                topScr.textContent = `${multiply(num1, num2).toFixed(2)}`;
                break;
            case "/":
                topScr.textContent = `${divide(num1, num2).toFixed(2)}`;
                break;
        }
        screen.textContent = "0";
    }
    if (isNaN(Number(topScr.textContent)) || !isFinite(Number(topScr.textContent))){
        topScr.textContent = "";
    }
});


signs.forEach(sign => {
    sign.addEventListener("click", (e) => {
        if (topScr.textContent.length == 0) {
            topScr.textContent = `${screen.textContent} ${e.target.textContent}`;
            screen.textContent = "0";
        } else if (topScr.textContent.length > 0 && !(topScr.textContent.includes('+') || topScr.textContent.includes('-', topScr.textContent.length - 1) || topScr.textContent.includes('*') || topScr.textContent.includes('/'))) {
            topScr.textContent = `${topScr.textContent} ${e.target.textContent}`
        } else {
            num1 = Number(topScr.textContent.slice(0, topScr.textContent.length - 2));
            num2 = Number(screen.textContent);
            let signC = topScr.textContent.charAt(topScr.textContent.length - 1);
            switch (signC) {
                case "+":
                    topScr.textContent = `${add(num1, num2).toFixed(2)} ${e.target.textContent}`;
                    break;
                case "-":
                    topScr.textContent = `${subtract(num1, num2).toFixed(2)} ${e.target.textContent}`;
                    break;
                case "*":
                    topScr.textContent = `${multiply(num1, num2).toFixed(2)} ${e.target.textContent}`;
                    break;
                case "/":
                    topScr.textContent = `${divide(num1, num2).toFixed(2)} ${e.target.textContent}`;
                    break;
            }
            screen.textContent = "0";

        }
        if (isNaN(Number(topScr.textContent.slice(0, topScr.textContent.length - 2)))){
            topScr.textContent = "";
        }
    });
});

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (screen.textContent.length < 8) {
            screen.textContent = screen.textContent.concat(e.target.innerText);
        } else if (screen.textContent.length < 9 && screen.textContent.includes(".")) {
            screen.textContent = screen.textContent.concat(e.target.innerText);
        }
        if (screen.textContent.charAt(0) == "0" && screen.textContent.charAt(1) != ".") {
            screen.textContent = screen.textContent.slice(1);
        } else if (screen.textContent.charAt(0) == "-" && screen.textContent.charAt(1) == "0" && screen.textContent.charAt(2) != ".") {
            screen.textContent = screen.textContent.slice(0, 1) + screen.textContent.slice(2, screen.textContent.length);
        }
    });
});

psm.addEventListener('click', () => {
    if (screen.textContent.includes("-")) {
        screen.textContent = screen.textContent.slice(1);
    } else {
        screen.textContent = "-".concat(screen.textContent);
    }
});

dot.addEventListener('click', () => {
    if (!screen.textContent.includes(".")) {
        screen.textContent = screen.textContent.concat(".");
    }
});

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    if (screen.textContent.length == 0) {
        screen.textContent = "0";
    }
});

clearE.addEventListener('click', () => {
    screen.textContent = "0";
});
clear.addEventListener('click', () => {
    screen.textContent = "0";
    topScr.textContent = "";
});

