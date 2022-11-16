var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active")
})
var kotal = document.querySelector('.mini_conteir')
var addkotal = document.querySelector('.big_conteir')
var footer = document.querySelector('.footer')

kotal.addEventListener('click', () => {
   kotal.classList.toggle('active')
   addkotal.classList.toggle('active')
   footer.classList.toggle('active')
})

var all = document.querySelector('#first-kotal')
var allkotal = document.querySelector('.all-kotalog')
var mini_all = document.querySelector('.mini-kotalog')

all.addEventListener('click', () => {
   all.classList.toggle('active')
   mini_all.classList.toggle('active')
   allkotal.classList.toggle('active')
})
var camera = document.querySelector('#second-kotal')
var camerkotal = document.querySelector('.camera-kotalog')
var mini_all = document.querySelector('.mini-kotalog')

camera.addEventListener('click', () => {
   camera.classList.toggle('active')
   mini_all.classList.toggle('active')
   camerkotal.classList.toggle('active')
})
var lighting = document.querySelector('#thirt-kotal')
var lightkotal = document.querySelector('.lighting-kotalog')
var mini_all = document.querySelector('.mini-kotalog')

lighting.addEventListener('click', () => {
   lighting.classList.toggle('active')
   mini_all.classList.toggle('active')
   lightkotal.classList.toggle('active')
})
var lens = document.querySelector('#four-kotal')
var lenskotal = document.querySelector('.lens-kotalog')
var big = document.querySelector('.big-kotalog')

lens.addEventListener('click', () => {
   lens.classList.toggle('active')
   lenskotal.classList.toggle('active')
   big.classList.toggle('active')
})
var veb = document.querySelector('#five-kotal')
var vebkotal = document.querySelector('.veb-kotalog')
var big = document.querySelector('.big-kotalog')

veb.addEventListener('click', () => {
   veb.classList.toggle('active')
   vebkotal.classList.toggle('active')
   big.classList.toggle('active')
})
var mikrafon = document.querySelector('#six-kotal')
var mikrokotal = document.querySelector('.mikrafon-kotalog')
var big = document.querySelector('.big-kotalog')

mikrafon.addEventListener('click', () => {
   mikrafon.classList.toggle('active')
   big.classList.toggle('active')
   mikrokotal.classList.toggle('active')
})