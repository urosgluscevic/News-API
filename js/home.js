let cards = document.getElementsByClassName("slider-content")
cards[0].style.left = "-26%"
cards[1].style.left = "6.25%"
cards[2].style.left = "37.5%"
cards[2].style.transform = "scale(1.3)"
cards[3].style.left = "68.75%"
cards[4].style.left = "100%"

window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
        cards[1].style.display = "none"
        cards[2].style.width = "50%"
        cards[2].style.left = "25%"
        cards[3].style.display = "none"
    } else {
        cards[1].style.display = "block"
        cards[2].style.width = "25%"
        cards[2].style.left = "37.5%"
        cards[3].style.display = "block"
    }
})