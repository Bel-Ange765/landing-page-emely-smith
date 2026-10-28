const inputText = document.getElementById("inputText");
const shiftInput = document.getElementById("shift");
const result = document.getElementById("result");

function cesar(text, shift) {
    return [...text].map((character) => {
        const code = character.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
        }

        return character;
    }).join("");
}

function getShift() {
    const shift = Number(shiftInput.value);

    if (!Number.isInteger(shift) || shift < 1 || shift > 25) {
        result.textContent = "Veuillez choisir un décalage entre 1 et 25.";
        return null;
    }

    return shift;
}

document.getElementById("encryptBtn").addEventListener("click", () => {
    const shift = getShift();
    if (shift !== null) {
        result.textContent = cesar(inputText.value, shift);
    }
});

document.getElementById("decryptBtn").addEventListener("click", () => {
    const shift = getShift();
    if (shift !== null) {
        result.textContent = cesar(inputText.value, -shift);
    }
});