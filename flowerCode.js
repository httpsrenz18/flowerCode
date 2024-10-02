onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


const audio = document.getElementById('audio');

function playAudio() {
    audio.play();
}


document.addEventListener('DOMContentLoaded', () => {
});