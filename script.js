(function () {
  'use strict';

  /* ============ DIAL-UP SPLASH ============ */
  // dial-up splash screen. 
  var DIALUP_LINES = [
    'INITIALIZING MODEM «URAL-96» ... OK',
    'DIALING +7 (343) 22-4-18 (LINE OF THE DEPARTMENT OF AUTOMATION) ...',
    'CARRIER DETECTED. HANDSHAKE V.34 ...',
    'CONNECTED AT 28800 BPS. QUALITY OF LINE: SUFFICIENT.',
    'REQUESTING INDEX.HTM (41 KB) ...',
    'LOADING PHOTOGRAPHS (PLEASE HAVE PATIENCE) ...',
    'WELCOME TO THE INTERNET PAGE OF THE KOMBINAT.'
  ];
  // delay between each line in milliseconds.  
  var DIALUP_DELAYS = [700, 900, 1100, 800, 900, 700, 600];

  function initDialup() {
    var el = document.getElementById('dialup');
    if (!el) return;

    // Check if splash screen already shown in this session
    var dialed = false;
    try { dialed = sessionStorage.getItem('ke4_dialed') === '1'; } catch (e) {}
    if (dialed) return; // Skip if already shown

    var linesEl = document.getElementById('dialup-lines');
    var percentEl = document.getElementById('dialup-percent');
    var timer = null;
    var step = 0;

    // Update display with messages up to current step
    function render() {
      linesEl.innerHTML = ''; // Clear previous content
      for (var i = 0; i <= step; i++) {
        var line = document.createElement('div');
        line.textContent = DIALUP_LINES[i];
        linesEl.appendChild(line);
      }
      percentEl.textContent = Math.round(((step + 1) / DIALUP_LINES.length) * 100) + '%'; // Update progress %
    }

    // Hide splash screen and mark as shown in session
    function end() {
      clearTimeout(timer); // Stop animation
      try { sessionStorage.setItem('ke4_dialed', '1'); } catch (e) {} // Mark as shown
      el.hidden = true; // Hide dial-up element
    }

    // Move to next message in sequence
    function advance() {
      step++; // Increment to next message
      if (step >= DIALUP_LINES.length) { end(); return; } // Stop if all messages shown
      render(); // Display updated messages
      timer = setTimeout(advance, DIALUP_DELAYS[step] || 800); // Schedule next advance
    }

    // Start animation
    el.hidden = false; // Show splash screen
    render(); // Display first message
    el.addEventListener('click', end); // Allow user to skip
    timer = setTimeout(advance, DIALUP_DELAYS[0]); // Schedule first advance
  }

  /* ============ VISITOR COUNTER ============ */
  function initCounter() {
    var el = document.getElementById('counter');
    if (!el) return;

    // Track page visits in localStorage
    var key = 'ke4_visits';
    var visits = 4718; // Default starting count
    try {
      var prev = parseInt(localStorage.getItem(key) || '4718', 10); // Get previous count
      visits = (isNaN(prev) ? 4718 : prev) + 1; // Increment by 1
      localStorage.setItem(key, String(visits)); // Save updated count
    } catch (e) {}

    // Display each digit in separate span for styling
    var digits = String(visits).padStart(6, '0').split(''); // Convert to 6-digit string
    el.innerHTML = ''; // Clear element
    digits.forEach(function (d) {
      var span = document.createElement('span');
      span.textContent = d; // Add single digit
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

    // Handle form submission
    form.addEventListener('submit', function (ev) {
      ev.preventDefault(); // Prevent actual form submission
      form.hidden = true; // Hide form
      sending.hidden = false; // Show "sending" message
      setTimeout(function () {
        sending.hidden = true;
        done.hidden = false; // Show "done" message after 2.6 seconds
      }, 2600);
    });

    // Handle form reset
    resetBtn.addEventListener('click', function () {
      done.hidden = true;
      sending.hidden = true;
      form.reset(); // Clear form fields
      form.hidden = false; // Show form again
    });
  }

  // Initialize all features when page loads
  document.addEventListener('DOMContentLoaded', function () {
    initDialup(); // Start dial-up animation
    initCounter(); // Set up visit counter
    initFax(); // Set up fax form
  });
})();
