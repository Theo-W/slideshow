let content, slides, slideWidth, next, prev, carousel
let compteur = 0

carousel = document.querySelector(".carousel")
content = document.querySelector(".content")
slides = Array.from(content.children)
next = document.querySelector("#nav-right")
prev = document.querySelector("#nav-left")


// width of the slideshow
slideWidth = carousel.getBoundingClientRect().width

// Event
next.addEventListener("click", slideNext)
prev.addEventListener("click", slidePrev)
document.addEventListener('keydown', function(e){
    if (e.keyCode == '37') {
        slidePrev()
    } else if (e.keyCode == "39") {
        slideNext()
    }
})

// function next slide
function slideNext(){
    compteur++

    if(compteur === slides.length){
        compteur = 0
    }

    let decal = -slideWidth * compteur
    content.style.transform = `translateX(${decal}px)`
}

// function slide preview
function slidePrev(){
    compteur--

    if(compteur < 0){
        compteur = slides.length - 1
    }

    let decal = -slideWidth * compteur
    content.style.transform = `translateX(${decal}px)`
}

// for responsive
window.addEventListener("resize", () => {
    slideWidth = carousel.getBoundingClientRect().width
    slideNext()
})
