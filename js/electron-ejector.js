// Browser version of the Electron Ejector.
// Hammer and threshold values match hit_action() in electronejector.py.
(function () {
  var screen = document.getElementById('ee-screen');
  if (!screen) return;

  var IMAGES = screen.getAttribute('data-base');
  var METALS = [
    { name: 'caesium', file: 'cs.png', alt: 'Caesium, threshold 1.9 eV', threshold: 1 },
    { name: 'potassium', file: 'k.png', alt: 'Potassium, threshold 2.3 eV', threshold: 2 },
    { name: 'cerium', file: 'ce.png', alt: 'Cerium, threshold 2.9 eV', threshold: 3 }
  ];
  var HAMMERS = { red: 1, green: 2, violet: 3 };
  var LED_MS = 1500;
  var ANIMATION_MS = 5000;

  var leds = document.getElementById('ee-leds');
  var status = document.getElementById('ee-status');
  var hit = document.getElementById('ee-hit');
  var hammerButtons = document.querySelectorAll('.ee-hammer');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var metalIndex = -1;
  var hammer = null;
  var runs = 0;
  var timers = [];

  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  function setLeds(fraction, ms) {
    leds.style.transition = ms ? 'clip-path ' + ms + 'ms linear' : 'none';
    leds.style.clipPath = 'inset(' + (100 - fraction * 100) + '% 0 0 0)';
  }

  function showMetal() {
    var metal = METALS[metalIndex];
    screen.src = IMAGES + metal.file;
    screen.alt = metal.alt;
  }

  function showAnimation(ejected) {
    runs += 1; // a fresh URL restarts the GIF
    screen.src = IMAGES + (ejected ? 'happy.gif' : 'sad.gif') + '?run=' + runs;
    screen.alt = ejected ? 'Animation: a photon ejects an electron.' : 'Animation: a photon fails to eject an electron.';
  }

  function reset() {
    timers.forEach(clearTimeout);
    timers = [];
    setLeds(0, 0);
    if (metalIndex >= 0) showMetal();
    hit.disabled = metalIndex < 0 || !hammer;
    if (metalIndex < 0) status.textContent = 'Press Select to choose a metal.';
    else if (!hammer) status.textContent = 'Now plug in a hammer.';
    else status.textContent = 'Press Hit!';
  }

  document.getElementById('ee-select').addEventListener('click', function () {
    metalIndex = (metalIndex + 1) % METALS.length;
    reset();
  });

  hammerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      hammer = button.getAttribute('data-hammer');
      hammerButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      reset();
    });
  });

  hit.addEventListener('click', function () {
    var metal = METALS[metalIndex];
    var name = hammer;
    var fraction = Math.min(HAMMERS[name] / metal.threshold, 1);
    var ejected = fraction === 1;
    var message = ejected
      ? 'Electron ejected! A ' + name + ' photon has enough energy to free an electron from ' + metal.name + '.'
      : 'No electron. A ' + name + ' photon doesn\'t have enough energy for ' + metal.name + ', and more of them wouldn\'t help.';

    reset();
    hit.disabled = true;

    function finish() {
      status.textContent = message;
      hit.disabled = false;
    }

    if (reducedMotion) {
      setLeds(fraction, 0);
      finish();
      return;
    }

    status.textContent = '...';
    setLeds(fraction, LED_MS * fraction);
    later(function () {
      showAnimation(ejected);
      finish();
      later(showMetal, ANIMATION_MS);
    }, LED_MS * fraction + 200);
  });
})();
