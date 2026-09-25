(function () {
  var svg = document.getElementById('thread-svg');
  var line = document.getElementById('thread-path');
  var seal = document.getElementById('thread-seal');
  if (!svg || !line) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return; // static, fully-drawn line is the default markup state

  var volunteerProgress = 1;

  function measure() {
    var doc = document.documentElement;
    var docHeight = doc.scrollHeight - window.innerHeight;
    var volunteer = document.getElementById('volunteer');
    var totalHeight = docHeight > 0 ? docHeight : 1;
    if (volunteer) {
      var volunteerTop = volunteer.getBoundingClientRect().top + window.scrollY;
      volunteerProgress = Math.min(1, Math.max(0, volunteerTop / totalHeight));
    }
    return totalHeight;
  }

  var totalHeight = measure();
  var MIN_VISIBLE = 8; /* the thread is always at least this drawn, even before the first scroll pixel */
  var pending = false;

  function update() {
    var progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
    var y = Math.max(MIN_VISIBLE, progress * 100);
    line.setAttribute('y2', y.toFixed(2));
    seal.style.top = y.toFixed(2) + '%'; /* the seal is the thread's leading tip */
    seal.style.opacity = progress >= volunteerProgress - 0.005 ? '1' : '0.5';
    pending = false;
  }

  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', function () { totalHeight = measure(); schedule(); });
  update();
})();

(function () {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    els.forEach(function (el) { el.textContent = '0'; });

    function run(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var duration = 1400;
      var start = null;
      function step(now) {
        if (start === null) start = now;
        var t = Math.min(1, (now - start) / duration);
        /* front-loaded easing looks broken on small targets; this stays even */
        var eased = 1 - Math.pow(1 - t, 1.6);
        el.textContent = String(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      }
      requestAnimationFrame(step);
    }

    var fired = false;
    function reveal() {
      els.forEach(function (el, i) {
        setTimeout(function () { run(el); }, i * 60);
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !fired) { fired = true; reveal(); }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -20% 0px" });

    var section = document.querySelector('#record');
    if (section) io.observe(section);

    /* fail-safe: if the observer never fires, show the real numbers */
    setTimeout(function () {
      els.forEach(function (el) {
        if (el.textContent === '0') el.textContent = el.getAttribute('data-count');
      });
    }, 4000);
  })();

(function () {
    var items = document.querySelectorAll('.segments-row li');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    items.forEach(function (el) { el.classList.add('seg-reveal'); });

    function reveal() {
      items.forEach(function (el, i) {
        setTimeout(function () { el.classList.add('seg-in'); }, i * 500);
      });
    }

    var fired = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !fired) { fired = true; reveal(); }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -20% 0px" });

    io.observe(document.querySelector('.segments-row'));

    /* fail-safe: never leave the items invisible */
    setTimeout(function () {
      if (!fired) { fired = true; reveal(); }
    }, 4000);
  })();
