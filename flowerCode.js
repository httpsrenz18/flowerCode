onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


// Select the audio element
const audio = document.getElementById('audio');

// Function to play the audio
function playAudio() {
    audio.play();
}



// Optional: Add event listeners for any specific controls or interactions
document.addEventListener('DOMContentLoaded', () => {
    // Example: Automatically play audio when page loads
    // playAudio();
});