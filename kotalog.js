var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active")
})
var kotal = document.querySelector('.mini_conteir')
var addkotal = document.querySelector('.big_conteir')
var mini = document.querySelector('.mini-kotalog')
var big = document.querySelector('.big-kotalog')
var footer = document.querySelector('.footer')

kotal.addEventListener('click', () => {
   kotal.classList.toggle('active')
   addkotal.classList.toggle('active')
   mini.classList.toggle('active')
   big.classList.toggle('active')
   footer.classList.toggle('active')
})

var all = document.querySelector('#first-kotal')
var allkotal = document.querySelector('.all-kotalog')

all.addEventListener('click', () => {
   all.classList.toggle('active')
   allkotal.classList.toggle('active')
})
var camera = document.querySelector('#second-kotal')
var camerkotal = document.querySelector('.camera-kotalog')

camera.addEventListener('click', () => {
   camera.classList.toggle('active')
   camerkotal.classList.toggle('active')
})
var lighting = document.querySelector('#thirt-kotal')
var lightkotal = document.querySelector('.lighting-kotalog')

lighting.addEventListener('click', () => {
   lighting.classList.toggle('active')
   lightkotal.classList.toggle('active')
})
var lens = document.querySelector('#four-kotal')
var lenskotal = document.querySelector('.lens-kotalog')

lens.addEventListener('click', () => {
   lens.classList.toggle('active')
   lenskotal.classList.toggle('active')
})
var veb = document.querySelector('#five-kotal')
var vebkotal = document.querySelector('.veb-kotalog')

veb.addEventListener('click', () => {
   veb.classList.toggle('active')
   vebkotal.classList.toggle('active')
})
var mikrafon = document.querySelector('#six-kotal')
var mikrokotal = document.querySelector('.mikrafon-kotalog')

mikrafon.addEventListener('click', () => {
   mikrafon.classList.toggle('active')
   mikrokotal.classList.toggle('active')
})