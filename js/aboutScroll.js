document.addEventListener("click", function(e){
    if(e.target.classList.contains("dropdown-link") || e.target.innerText === "Uros" || e.target.innerText === "Luka" || e.target.innerText === "Miodrag"){
        sessionStorage.setItem("scrollTo", e.target.innerText)
    } else if(e.target.innerText === "ABOUT"){
        sessionStorage.setItem("scrollTo", "ABOUT")
    }
})