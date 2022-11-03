var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active") 
})

var search = document.querySelector(".nav-icon3")
var searchinp = document.querySelector(".nav-icon0")

search.addEventListener('click', () =>{
   search.classList.toggle("active")
   searchinp.classList.toggle("active")
}) 

