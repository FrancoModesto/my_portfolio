//HAMBURGUER MENU
const menuHbtn = document.querySelector(".menuH-btn")
const nav = document.querySelector("nav")

let on = false
menuHbtn.addEventListener("click", () => {
    if (on) {
        nav.style.transform = "translateY(-50vh)"
        on = false
    } else {
        nav.style.transform = "translateY(0)"
        on = true
    }
})

//This fixes an issue caused by opening the menuH, closing it, and then resizing to > 800px resolutions (the nav stayed in -50vh).
window.addEventListener("resize", () => {
    if (window.screen.width > 800) {
        nav.style.transform = "translateY(0)"
        on = false
    } else {
        nav.style.transform = "translateY(-50vh)"
        on = false
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