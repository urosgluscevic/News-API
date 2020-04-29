var scrollToDeveloper = undefined;
var miodrag = document.getElementById("miodrag");
var luka = document.getElementById("luka");
var uros = document.getElementById("uros");
var aboutHeader = document.getElementById("about-header")

window.addEventListener("load", function(){
    scrollToDeveloper = sessionStorage.getItem("scrollTo")
    var miodragHeight = miodrag.clientHeight;
    var lukaHeight = luka.clientHeight;
    var aboutHeaderHeight = aboutHeader.clientHeight;

    if(scrollToDeveloper === "Miodrag"){
        scrollTo(0, aboutHeaderHeight + miodragHeight);
    } else if(scrollToDeveloper === "Luka"){
        scrollTo(0, aboutHeaderHeight+  lukaHeight + miodragHeight);
    } else if(scrollToDeveloper === "Uros"){
        scrollTo(0,0);
    } else if(scrollToDeveloper === "ABOUT"){
        scrollTo(0, 0);
    }
})