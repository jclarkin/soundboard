(() => {
  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.keyCode) {
      const audio = window.document.querySelector(`audio[data-key='${e.keyCode}']`);
      const key = window.document.querySelector(`.key[data-key='${e.keyCode}']`);

      if (!audio) return;
      audio.currentTime = 0; // Rewind if already being played
      audio.play();

      if (!key) return;
      key.classList.add('playing');
    }
  });
  window.document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', e => {
      if (e.propertyName != 'transform') return;
      e.target.classList.remove('playing');
    });
  });
})();
