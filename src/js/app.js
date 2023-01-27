//HAMBURGUER MENU
const menuHbtn = document.querySelector(".menuH-btn")
const nav = document.querySelector("nav")

let on = false
menuHbtn.addEventListener("click", () => {
    if (on) {
        nav.style.top = "-50vh"
        on = false
    } else {
        nav.style.top = "0"
        on = true
    }
})


//PARALLAX
const parallax = document.querySelector(".parallax")
const profile = document.querySelector(".profile")

function scrollParallax() {
    const scrollTop = document.documentElement.scrollTop
    parallax.style.transform = `translateY(${scrollTop * -0.3}px)`
    profile.style.transform = `translateY(${scrollTop * 0.15}px)`
}

window.addEventListener("scroll", scrollParallax)