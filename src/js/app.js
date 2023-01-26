//PARALLAX
let parallax = document.querySelector(".parallax")
let profile = document.querySelector(".profile")

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop
    parallax.style.transform = `translateY(${scrollTop * -0.3}px)`
    profile.style.transform = `translateY(${scrollTop * 0.15}px)`
}

window.addEventListener("scroll", scrollParallax)