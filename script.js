const textArray = ["Data Analyst", "Web Developer", "Problem Solver"];
let typingElement = document.querySelector(".typing-text");
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[arrayIndex].length) {
    typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
