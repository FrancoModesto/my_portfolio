//HAMBURGUER MENU
if (window.screen.width < 800) {
    const menuHbtn = document.querySelector(".menuH-btn")
    const nav = document.querySelector("nav")
    const menu = document.querySelector("nav ul")

    let on = false
    nav.addEventListener("click", () => {
        if (on) {
            nav.style.height = "4em"
            menu.style.top = "-50vh"
            menuHbtn.style.opacity = "1"
            on = false
        } else {
            nav.style.height = "50vh"
            menu.style.top = "0"
            menuHbtn.style.opacity = "0"
            on = true
        }
    })
}


//PARALLAX
const parallax = document.querySelector(".parallax")
const profile = document.querySelector(".profile")

function scrollParallax() {
    const scrollTop = document.documentElement.scrollTop
    parallax.style.transform = `translateY(${scrollTop * -0.3}px)`
    profile.style.transform = `translateY(${scrollTop * 0.15}px)`
}

window.addEventListener("scroll", scrollParallax)