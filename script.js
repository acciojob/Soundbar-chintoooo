const sounds = ['sound1', 'sound2', 'sound3', 'sound4', 'sound5', 'sound6'];

const buttonsContainer = document.getElementById('buttons');

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  });
}

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
    if (audio) {
      audio.play().catch(e => console.error(`Error playing ${sound}:`, e));
    }
  });

  buttonsContainer.appendChild(btn);

  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  audio.onerror = () => console.error(`Audio file ${sound}.mp3 could not be loaded.`);
  document.body.appendChild(audio);
});

const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);
