const phrases = [
  "Hola, ¿cómo estás?",
  "¿Qué planes tienes para hoy?",
  "Me gusta mucho el helado",
  "¿Te gustaría ir al cine conmigo?",
  "La lluvia es muy refrescante"
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
