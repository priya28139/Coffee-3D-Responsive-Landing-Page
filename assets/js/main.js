/*===== MENU SHOW Y HIDDEN =====*/
const nav_menu = document.getElementById("nav-menu")
const toggle_menu = document.getElementById("nav-toggle")
const close_menu = document.getElementById("nav-close")

/*===== SHOW =====*/
toggle_menu.addEventListener('click', ()=>{
  nav_menu.classList.toggle('show')
})

/*===== HIDDEN =====*/
close_menu.addEventListener('click', ()=>{
  nav_menu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move)

function move(e){
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    
    const x = (window.innerWidth - e.pageX*speed)/120
    
    const y = (window.innerWidth - e.pageY*speed)/120
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    
  })
}

/*===== GSAP ANIMATION =====*/
gsap.from('.nav__logo .nav__toggle', {opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 1.5, y: 30, stagger: 0.2})

/*===== HOME =====*/
gsap.from('.home__title', {opacity: 0, duration: 1, delay: 1, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay: 1.2, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay: 1.5, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay: 1.3, y: 30})







