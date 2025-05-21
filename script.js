//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Add more sound names if needed

const buttonsContainer = document.getElementById('buttons');

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

// Add a stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);
