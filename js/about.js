var scrollToDeveloper = undefined;
var meetUs = document.getElementById("meet-us")
var miodrag = document.getElementById("miodrag");
var luka = document.getElementById("luka");
var uros = document.getElementById("uros")

window.addEventListener("load", function(){
    scrollToDeveloper = sessionStorage.getItem("scrollTo")
    var meetUsHeight = meetUs.clientHeight;
    var miodragHeight = miodrag.clientHeight;
    var lukaHeight = luka.clientHeight;

    if(scrollToDeveloper === "Miodrag"){
        scrollTo(0, meetUsHeight);
    } else if(scrollToDeveloper === "Luka"){
        scrollTo(0, meetUsHeight + lukaHeight);
    } else if(scrollToDeveloper === "Uros"){
        scrollTo(0, meetUsHeight + lukaHeight + miodragHeight);
    } else if(scrollToDeveloper === "ABOUT"){
        scrollTo(0, 0);
    }
})