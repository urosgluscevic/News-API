const slider = document.querySelector(".slider-container");
const sliderCont = document.querySelectorAll(".slider-content");
const leftB = document.querySelector("#leftArrow");
const rightB = document.querySelector("#rightArrow");

let counter = 0;
const size = sliderCont[5].clientWidth + 10;

console.log(counter);

rightB.addEventListener("click", ()=>{
    
    slider.style.transition= "transform 0.4s linear"
    counter += 1;
    if(counter > sliderCont.length-3){
        counter = 0;
    }
    slider.style.transform= "translateX(" + (-size * counter) + "px)";
    console.log(counter);
});

leftB.addEventListener("click", ()=>{
    slider.style.transition= "transform 0.4s linear"
    counter += -1;
    if(counter < 0){
        counter = sliderCont.length-3;
    }
    slider.style.transform= "translateX(" + (-size * counter) + "px)";
    console.log(counter);
});