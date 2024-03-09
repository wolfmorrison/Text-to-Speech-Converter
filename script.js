// Function to speak the provided text
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Speak the text
    synth.speak(utterance);
}

// Event listener for the "Speak" button
document.getElementById('speakBtn').addEventListener('click', () => {
    const textToSpeak = document.getElementById('textToSpeak').value.trim();
    if (textToSpeak !== '') {
        speak(textToSpeak);
    } else {
        alert('Please enter some text to speak.');
    }
});
