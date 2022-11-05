var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active")
})

var kotal = document.querySelector('.mini_conteir')
var addkotal = document.querySelector('.big_conteir')

kotal.addEventListener('click', () => {
   kotal.classList.toggle('active')
   addkotal.classList.toggle('active')
})