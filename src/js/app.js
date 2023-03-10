//HAMBURGUER MENU
const menuHbtn = document.querySelector('.menuH-btn')
const header = document.querySelector('header')
const ul = document.querySelector('header ul')

let on = false
menuHbtn.addEventListener('click', () => {
    if (on) {
        header.style.transform = 'translateY(-50vh)'
        ul.style.opacity = '0'
        on = false
    } else {
        header.style.transform = 'translateY(0)'
        ul.style.opacity = '1'
        on = true
    }
})

//This fixes an issue caused by opening the menuH, closing it, and then resizing to > 800px resolutions (the header stayed in -50vh).
window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        header.style.transform = 'translateY(0)'
        ul.style.opacity = '1'
        on = false
    } else {
        header.style.transform = 'translateY(-50vh)'
        ul.style.opacity = '0'
        on = false
    }
})


//PARALLAX
const parallax = document.querySelector('.parallax')
const profile = document.querySelector('.profile')

function scrollParallax() {
    const scrollTop = document.documentElement.scrollTop
    parallax.style.transform = `translateY(${scrollTop * -0.3}px)`
    profile.style.transform = `translateY(${scrollTop * 0.15}px)`
}

window.addEventListener('scroll', scrollParallax)


//SKILLS - DRAG AND DROP
const dragparentSkills = document.querySelector('.dragparent-skills')
const dragparentMixer = document.querySelector('.dragparent-mixer')
const dragulaContainers = [dragparentSkills, dragparentMixer]
const initialMixerChildren = dragparentMixer.children.length

const draggables = document.querySelectorAll('.draggable')

const mixerPlaceholder = document.querySelector('.mixer-placeholder')
const mixerBtn = document.querySelector('.mixer-btn')

//This fixes the dragula mobile scroll bug.
draggables.forEach(container => {
    container.addEventListener('touchmove', (e) => {
        e.preventDefault()
    }, { passive: false })
})

let drake = null
function startDragula() {
    drake = dragula(dragulaContainers, {
        invalid: (el) => {
            return el.className === 'mixer-placeholder' || el.className === 'mixer-cover' || el.className === 'mixer-result'
        }
    }).on('dragend', () => {
        if (dragparentMixer.children.length === initialMixerChildren) {
            mixerPlaceholder.style.display = 'flex'
            setTimeout(() => {
                mixerPlaceholder.style.opacity = 1
            }, 100) //This fixes a bug that made the text appear abruptly.
        } else {
            mixerPlaceholder.style.opacity = 0
            setTimeout(() => {
                mixerPlaceholder.style.display = 'none'
            }, 300) //This number is the transition duration on CSS.
        }

        dragparentMixer.children.length > initialMixerChildren ? mixerBtn.classList.add('canMix') : mixerBtn.classList.remove('canMix')
    })
}

function stopDragula() {
    drake.destroy()
}

startDragula()


//SKILLS - MIXER
const mixerCover = document.querySelector('.mixer-cover')
const mixerResult = document.querySelector('.mixer-result')

function handleFound() {
    mixerCover.innerHTML = `<h3>COINCIDENCIA ENCONTRADA!</h3>`
}

function showResult() {
    mixerResult.style.transform = 'translateY(100%)'
}

mixerBtn.addEventListener('click', () => {
    if (dragparentMixer.children.length > initialMixerChildren) {
        stopDragula()
        mixerCover.style.transform = 'translateY(100%)'
        mixerBtn.classList.remove('canMix')
        setTimeout(handleFound, 3000)
        setTimeout(showResult, 5000)
    }
})