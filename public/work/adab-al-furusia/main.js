// Adab Alfurusia — Ceremonial Prestige (vanilla port of the Vue pitch site)

// Scroll reveal: fade sections in once as they enter the viewport.
function initReveal() {
  if (!window.IntersectionObserver) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.18 })

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

// Count-up section numbers (01–04), started once when half visible.
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

function countUp(el) {
  const target = Number(el.dataset.count)
  const pad = Number(el.dataset.pad || 0)
  const duration = 1600
  const render = (n) => { el.textContent = String(n).padStart(pad, '0') }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || target === 0) return render(target)

  const startTime = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    render(Math.round(target * Math.min(1, Math.max(0, easeOutQuart(progress)))))
    if (progress < 1) requestAnimationFrame(tick)
    else render(target)
  }
  requestAnimationFrame(tick)
}

function initCountUp() {
  if (!window.IntersectionObserver) return
  document.querySelectorAll('.animated-number').forEach((el) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect()
        countUp(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
  })
}

// Nav: solid background after 60px, hides on scroll down, returns on scroll up.
function initNav() {
  const nav = document.querySelector('.site-nav')
  const links = document.querySelector('.nav-links')
  const toggle = document.querySelector('.nav-toggle')
  let mobileOpen = false
  let lastScrollY = 0

  const setHidden = (hidden) => nav.classList.toggle('is-hidden', hidden)
  const setOpen = (open) => {
    mobileOpen = open
    links.classList.toggle('is-open', mobileOpen)
    toggle.setAttribute('aria-expanded', String(mobileOpen))
    if (mobileOpen) setHidden(false)
  }

  window.addEventListener('scroll', () => {
    const y = window.scrollY
    nav.classList.toggle('is-scrolled', y > 60)

    if (mobileOpen || y < 10) setHidden(false)
    else if (y > lastScrollY + 5) setHidden(true)
    else if (y < lastScrollY - 5) setHidden(false)

    lastScrollY = y
  }, { passive: true })

  toggle.addEventListener('click', () => setOpen(!mobileOpen))
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileOpen) setOpen(false)
    })
  })
}

function initHeroVideo() {
  const video = document.querySelector('.hero-video')
  if (video) video.playbackRate = 0.75
}

// Pitch mock: the enrol form has no backend.
function initEnrollForm() {
  document.querySelector('.enroll-form').addEventListener('submit', (e) => e.preventDefault())
}

initReveal()
initCountUp()
initNav()
initHeroVideo()
initEnrollForm()
