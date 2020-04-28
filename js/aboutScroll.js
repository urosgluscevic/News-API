document.addEventListener("click", function(e){
    if(e.target.classList.contains("dropdown-link")){
        sessionStorage.setItem("scrollTo", e.target.innerText)
    } else if(e.target.innerText === "ABOUT"){
        sessionStorage.setItem("scrollTo", "ABOUT")
    }
})