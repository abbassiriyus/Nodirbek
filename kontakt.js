var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active")
})

var kotal = document.querySelector('.mini_conteir')
var kontakt = document.querySelector('.contakt')
var footer = document.querySelector('.footer')

kotal.addEventListener('click', () => {
   kotal.classList.toggle('active')
   kontakt.classList.toggle('active')
   footer.classList.toggle('active')
})
