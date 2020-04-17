header = document.querySelector("header");

window.addEventListener("scroll", function(e){
    if(window.scrollY>10){
        header.style.boxShadow="0px 10px 11px -1px rgba(0,0,0,0.75)";
    }
    else {
        header.style.boxShadow="none";
    }
})