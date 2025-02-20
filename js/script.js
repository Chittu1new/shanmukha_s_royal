const originalText = "Mr.N0On3_S3c!";
const speed = 50; // Speed of random character changes
const letterRevealDelay = 120; // Delay before locking the correct letters
const backspaceSpeed = 50; // Speed of backspacing effect
const pauseBeforeBackspace = 3000; // Pause before starting backspace effect
const pauseBeforeRestart = 2000; // Pause before restarting animation
const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const textElement = document.getElementById("typing-text");

function getRandomChar() {
    return randomChars[Math.floor(Math.random() * randomChars.length)];
}

function typeEffect(index = 0) {
    if (index < originalText.length) {
        let randomTypingInterval = setInterval(() => {
            let tempText = textElement.textContent.split("");
            tempText[index] = getRandomChar();
            if (index + 1 < originalText.length) tempText[index + 1] = getRandomChar();
            textElement.textContent = tempText.join("");
        }, speed);

        setTimeout(() => {
            clearInterval(randomTypingInterval);
            let finalText = textElement.textContent.split("");
            finalText[index] = originalText[index];
            if (index + 1 < originalText.length) finalText[index + 1] = originalText[index + 1];
            textElement.textContent = finalText.join("");
            typeEffect(index + 2); // Move forward in pairs of two letters
        }, letterRevealDelay * 3); // Fast transition
    } else {
        setTimeout(() => {
            backspaceEffect(originalText.length - 1); // Start backspace effect
        }, pauseBeforeBackspace);
    }
}

function backspaceEffect(index) {
    if (index >= 0) {
        setTimeout(() => {
            let tempText = textElement.textContent.split("");
            tempText[index] = "";
            textElement.textContent = tempText.join("");
            backspaceEffect(index - 1);
        }, backspaceSpeed);
    } else {
        setTimeout(() => {
            typeEffect(0); // Restart animation
        }, pauseBeforeRestart);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    textElement.textContent = "";
    typeEffect();
});
