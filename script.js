var btn = document.querySelector(".nav-toggler")
var menu = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
   btn.classList.toggle("active")
   menu.classList.toggle("active") 
})
