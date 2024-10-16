import Lenis from 'lenis'
const lenis = new Lenis()

lenis.on('scroll', e => {
  console.log(e)
})

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
