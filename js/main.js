// Menu

const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons")

const overlay = document.querySelector("#overlay")

const backToTop = document.querySelector(".back-to-top")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
})