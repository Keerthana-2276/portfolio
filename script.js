const typingText = document.querySelector('.typing-text');
const textArray = [
    "AI & Computer Vision Enthusiast",
    "Dalit Committee Coordinator @ AICUF",
    "Passionate Developer & Researcher"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    let displayedText = currentText.substring(0, charIndex);

    typingText.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
