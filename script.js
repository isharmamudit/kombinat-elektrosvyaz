(function () {
  'use strict';

  /* ============ DIAL-UP SPLASH ============ */
  var DIALUP_LINES = [
    'INITIALIZING MODEM «URAL-96» ... OK',
    'DIALING +7 (343) 22-4-18 (LINE OF THE DEPARTMENT OF AUTOMATION) ...',
    'CARRIER DETECTED. HANDSHAKE V.34 ...',
    'CONNECTED AT 28800 BPS. QUALITY OF LINE: SUFFICIENT.',
    'REQUESTING INDEX.HTM (41 KB) ...',
    'LOADING PHOTOGRAPHS (PLEASE HAVE PATIENCE) ...',
    'WELCOME TO THE INTERNET PAGE OF THE KOMBINAT.'
  ];
  var DIALUP_DELAYS = [700, 900, 1100, 800, 900, 700, 600];

  function initDialup() {
    var el = document.getElementById('dialup');
    if (!el) return;

    var dialed = false;
    try { dialed = sessionStorage.getItem('ke4_dialed') === '1'; } catch (e) {}
    if (dialed) return;

    var linesEl = document.getElementById('dialup-lines');
    var percentEl = document.getElementById('dialup-percent');
    var timer = null;
    var step = 0;

    function render() {
      linesEl.innerHTML = '';
      for (var i = 0; i <= step; i++) {
        var line = document.createElement('div');
        line.textContent = DIALUP_LINES[i];
        linesEl.appendChild(line);
      }
      percentEl.textContent = Math.round(((step + 1) / DIALUP_LINES.length) * 100) + '%';
    }

    function end() {
      clearTimeout(timer);
      try { sessionStorage.setItem('ke4_dialed', '1'); } catch (e) {}
      el.hidden = true;
    }

    function advance() {
      step++;
      if (step >= DIALUP_LINES.length) { end(); return; }
      render();
      timer = setTimeout(advance, DIALUP_DELAYS[step] || 800);
    }

    el.hidden = false;
    render();
    el.addEventListener('click', end);
    timer = setTimeout(advance, DIALUP_DELAYS[0]);
  }

  /* ============ VISITOR COUNTER ============ */
  function initCounter() {
    var el = document.getElementById('counter');
    if (!el) return;

    var key = 'ke4_visits';
    var visits = 4718;
    try {
      var prev = parseInt(localStorage.getItem(key) || '4718', 10);
      visits = (isNaN(prev) ? 4718 : prev) + 1;
      localStorage.setItem(key, String(visits));
    } catch (e) {}

    var digits = String(visits).padStart(6, '0').split('');
    el.innerHTML = '';
    digits.forEach(function (d) {
      var span = document.createElement('span');
      span.textContent = d;
      el.appendChild(span);
    });
  }

  /* ============ FAX ORDER FORM ============ */
  function initFax() {
    var form = document.getElementById('fax-form');
    var sending = document.getElementById('fax-sending');
    var done = document.getElementById('fax-done');
    var resetBtn = document.getElementById('fax-reset');
    if (!form) return;

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      form.hidden = true;
      sending.hidden = false;
      setTimeout(function () {
        sending.hidden = true;
        done.hidden = false;
      }, 2600);
    });

    resetBtn.addEventListener('click', function () {
      done.hidden = true;
      sending.hidden = true;
      form.reset();
      form.hidden = false;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initDialup();
    initCounter();
    initFax();
  });
})();
