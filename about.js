var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active")
})

var kotal = document.querySelector('.mini_conteir')
var sayt = document.querySelector('.sayt-second')
var footer = document.querySelector('.footer')
var about = document.querySelector('.about')

kotal.addEventListener('click', () => {
   kotal.classList.toggle('active')
   sayt.classList.toggle('active')
   footer.classList.toggle('active')
   about.classList.toggle('active')
})
