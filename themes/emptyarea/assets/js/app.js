import Lenis from 'lenis'
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    lenis.scrollTo(this.getAttribute('href'))
  })
})

// To Top
const toTop = document.querySelector('#totop')
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    toTop.style.visibility = 'visible'
  } else {
    toTop.style.visibility = 'hidden'
  }
})

// Toggle Menu
const headerToggle = document.querySelector('.header__toggle')
const headerMenu = document.querySelector('.header__menu')
if (headerToggle && headerMenu) {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('header__toggle--open')
    const isExpanded = headerToggle.getAttribute('aria-expanded') === 'true'
    const newExpandedValue = isExpanded ? 'false' : 'true'
    headerToggle.setAttribute('aria-expanded', newExpandedValue)
    headerMenu.classList.toggle('header__menu--open')
  })
}
