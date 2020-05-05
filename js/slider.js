const slider = document.querySelector(".slider-container");
const sliderCont = document.querySelectorAll(".slider-content");
const leftB = document.querySelector("#leftArrow");
const rightB = document.querySelector("#rightArrow");
const sliderDiv = document.getElementById("slider");
let sliderContentCounter = 0; //regulates the movement of the slider content

leftB.addEventListener("click",foreward);
rightB.addEventListener("click",foreward);
sliderDiv.addEventListener("mouseenter", mouseEnterHandler);
sliderDiv.addEventListener("mouseleave", mouseLeaveHandler);
document.addEventListener("keydown", manualSliderController)

var mouseInSlider = false;


setInterval(foreward,3000,2);


function foreward(e) {
    let moveBySize = sliderCont[5].clientWidth + ((document.querySelector(".Hot-News").clientWidth/100)*0.93);//this variable is defined every time the function is called. This way, the slider content moves for its whole length, regardless of the viewport width; the +10 is the margin
        if(screen.width <= 650){
            moveBySize = sliderCont[5].clientWidth;
        }
    slider.style.transition= "transform 0.4s linear";

    if(e.target === leftB){
        sliderContentCounter += -1;
    }
    else{
        sliderContentCounter += 1;
    }


    if(sliderContentCounter > sliderCont.length - 3){
        sliderContentCounter = 0; // the slider loops to the beginning once the end is reached
    } else if (sliderContentCounter < 0){
        sliderContentCounter = sliderCont.length - 3 // the slider goes to the end if you try to move it farther left than the beginning
    }
    slider.style.transform= "translateX(" + (-moveBySize * sliderContentCounter) + "px)"; //moves the content
}



function mouseEnterHandler(){
    mouseInSlider = true;
}

function mouseLeaveHandler(){
    mouseInSlider = false
}

function manualSliderController(e){
    if(mouseInSlider){
        if(e.keyCode === 39 || e.keyCode === 37){
            let moveBySize = sliderCont[5].clientWidth + 10;//this variable is defined every time the function is called. This way, the slider content moves for its whole length, regardless of the viewport width; the +10 is the margin
            if(screen.width <= 650){
                moveBySize = sliderCont[5].clientWidth;
            }
            slider.style.transition= "transform 0.4s linear";

            if(e.keyCode === 39){
                sliderContentCounter += 1;
            }
            else{
                sliderContentCounter += -1;
            }

            if(sliderContentCounter > sliderCont.length - 3){
                sliderContentCounter = 0; // the slider loops to the beginning once the end is reached
            } else if (sliderContentCounter < 0){
                sliderContentCounter = sliderCont.length - 3 // the slider goes to the end if you try to move it farther left than the beginning
            }
            slider.style.transform= "translateX(" + (-moveBySize * sliderContentCounter) + "px)"; //moves the content
        }
    }
}