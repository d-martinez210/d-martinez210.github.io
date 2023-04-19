const phrases = [
      "Hola Eli",
      "¿Cómo estás?",
      "Hay que vernos en estos dias"
];

let phraseIndex = 0;
const buttonContent = document.getElementById('btn-content');

function nextPhrase() {
  const phrase = phrases[phraseIndex];
  phraseIndex++;
  if (phraseIndex >= phrases.length) {
    phraseIndex = phrases.length;
  }
  return phrase;
}

const button = document.getElementById('circle-btn');
button.addEventListener('click', () => {
  if (phraseIndex <= phrases.length) {
    buttonContent.textContent = nextPhrase();
  }
});
