//HAMBURGUER MENU
const menuHbtn = document.querySelector(".menuH-btn")
const header = document.querySelector("header")

let on = false
menuHbtn.addEventListener("click", () => {
    if (on) {
        header.style.transform = "translateY(-50vh)"
        on = false
    } else {
        header.style.transform = "translateY(0)"
        on = true
    }
})

//This fixes an issue caused by opening the menuH, closing it, and then resizing to > 800px resolutions (the header stayed in -50vh).
window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        header.style.transform = "translateY(0)"
        on = false
    } else {
        header.style.transform = "translateY(-50vh)"
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