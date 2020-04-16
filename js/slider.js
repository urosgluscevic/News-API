const slider = document.querySelector(".slider-container");
const sliderCont = document.querySelectorAll(".slider-content");
const leftB = document.querySelector("#leftArrow");
const rightB = document.querySelector("#rightArrow");

let sliderContentCounter = 0; //regulates the movement of the slider content

rightB.addEventListener("click", ()=>{
    const moveBySize = sliderCont[5].clientWidth + 10; //this variable is defined every time the function is called. This way, the slider content moves for its whole length, regardless of the viewport width
    slider.style.transition= "transform 0.4s linear"
    sliderContentCounter += 1;
    if(sliderContentCounter > sliderCont.length-3){
        sliderContentCounter = 0;
    }
    slider.style.transform= "translateX(" + (-moveBySize * sliderContentCounter) + "px)"; //moves the content
});

leftB.addEventListener("click", ()=>{
    const moveBySize = sliderCont[5].clientWidth + 10;
    slider.style.transition= "transform 0.4s linear"
    sliderContentCounter += -1;
    if(sliderContentCounter < 0){
        sliderContentCounter = sliderCont.length-3;
    }
    slider.style.transform= "translateX(" + (-moveBySize * sliderContentCounter) + "px)";
});