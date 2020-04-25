function $(string){
    return document.querySelector(string);
}

function $$(string){
    return document.querySelectorAll(string);
}
let maximalLocalCounter = 0;
let localCounter = 0;
if(localStorage.length === 1) {
    localCounter = parseInt(localStorage.key(localStorage.length-1),10)+1;
}

let maxLocalCounter = 0;

for(let i = 1;i<localStorage.length;i++){
    if(parseInt(localStorage.key(i),10)>maximalLocalCounter){
        maximalLocalCounter = parseInt(localStorage.key(i),10);
    }
    localCounter = maximalLocalCounter+2;
}


let titleCheck = [];

for(let i = 0;i<localStorage.length;i++){
    titleCheck.push(localStorage.getItem(localStorage.key(i)).split("♩")[1]);
}

function titleChecker() {
    for(let i = 0; i<titleCheck.length;i++){
    if($(".modal-title").innerText == titleCheck[i]){
        saveButton.classList.add("modal-saved");
        break;
    }  
    else{
        saveButton.classList.remove("modal-saved");
    }
}
}


let saveButton = $("#modal-save");
saveButton.addEventListener("click", saveArticle);


modal = document.querySelector(".modal");

topRated.forEach(item => {
    item.addEventListener("click",modalPopUp);

}) 


document.querySelector("#modalCloseButton").addEventListener("click",() => {
    modal.style.display="none";
});

//SJUTRA CU DODAT DA SE POPUNI CONTENT ODOH DA SPAVAM!

var bestElementOne = document.getElementById("best-one");
bestElementOne.addEventListener("click", modalPopUpBestOne)

var bestElementTwo = document.getElementById("best-two");
bestElementTwo.addEventListener("click", modalPopUpBestTwo)

var bestElementThree = document.getElementById("best-three");
bestElementThree.addEventListener("click", modalPopUpBestThree)

function modalPopUpBestOne(e){
    fillModalWindowBest(0);
}

function modalPopUpBestTwo(){
    fillModalWindowBest(1);
}

function modalPopUpBestThree(){
    fillModalWindowBest(2);
}

function fillModalWindowBest(i){
    modal.style.display = "block"
    let article = bestArticles.articles;
    $(".modal-img").src = article[i].urlToImage;
    $(".modal-title").innerText = article[i].title;
    $(".modal-author").innerText = article[i].author;
    $(".modal-date").innerText = article[i].publishedAt;
    $(".modal-text").innerHTML = article[i].content;
    $(".modal-link").href = article[i].url;
    titleChecker();
}

function modalPopUp() {
    modal.style.display = "block"
    let article = data.articles;
    let originalTitle = this.children[0].innerText;
    

    for(let i=0;i<article.length;i++){
        if(originalTitle === article[i].title){
            $(".modal-img").src = article[i].urlToImage;
            $(".modal-title").innerText = article[i].title;
            $(".modal-author").innerText = article[i].author;
            $(".modal-date").innerText = article[i].publishedAt;
            $(".modal-text").innerHTML = article[i].description;
            $(".modal-link").href = article[i].url;
        }   
    }
    titleChecker();
}

var sliderContentCards = document.getElementsByClassName("slider-content");
var sliderContentCardsArray = Array.from(sliderContentCards)

sliderContentCardsArray[0].children[2].addEventListener("click", function(){
    sliderModal(0);
})

sliderContentCardsArray[1].children[2].addEventListener("click", function(){
    sliderModal(1);
})

sliderContentCardsArray[2].children[2].addEventListener("click", function(){
    sliderModal(2);
})

sliderContentCardsArray[3].children[2].addEventListener("click", function(){
    sliderModal(3);
})

sliderContentCardsArray[4].children[2].addEventListener("click", function(){
    sliderModal(4);
})

sliderContentCardsArray[5].children[2].addEventListener("click", function(){
    sliderModal(5);
})

sliderContentCardsArray[6].children[2].addEventListener("click", function(){
    sliderModal(6);
})

sliderContentCardsArray[7].children[2].addEventListener("click", function(){
    sliderModal(7);
})

sliderContentCardsArray[8].children[2].addEventListener("click", function(){
    sliderModal(8);
})

sliderContentCardsArray[9].children[2].addEventListener("click", function(){
    sliderModal(9);
})
console.log(sliderContentCardsArray[0].children[2])
function sliderModal(sliderElemetIndex){
    modal.style.display = "block"
    let article = sliderArticles.articles;
    $(".modal-img").src = article[sliderElemetIndex].urlToImage;
    $(".modal-title").innerText = article[sliderElemetIndex].title;
    $(".modal-author").innerText = article[sliderElemetIndex].author;
    $(".modal-date").innerText = article[sliderElemetIndex].publishedAt;
    $(".modal-text").innerHTML = article[sliderElemetIndex].content;
    $(".modal-link").href = article[sliderElemetIndex].url;
    titleChecker();
}

function saveArticle(e){
    
    if(saveButton.classList[3] === undefined){
        saveButton.classList.add("modal-saved");
        $("#articleSaveP").style.display = "initial";
        $("#articleSaveP").innerText = "Article Saved";
        saveArticleData();
    }
    else {
        saveButton.classList.remove("modal-saved");
        $("#articleSaveP").style.display = "initial";
        $("#articleSaveP").innerText = "Article Removed";
        removeArticle();
    }
        $("#articleSaveP").addEventListener("animationend", function(){
            $("#articleSaveP").style.display = "none"
        });
}

    function saveArticleData(){
        let articleDataforSave = `${$(".modal-img").src}♩${$(".modal-title").innerText}♩${$(".modal-author").innerText}♩${ $(".modal-date").innerText}♩${ $(".modal-text").innerText}♩${ $(".modal-link").href}`;
        localStorage.setItem(`${localCounter}`,articleDataforSave);
        localCounter++;
        titleCheck.push($(".modal-title").innerText);
    }

    function removeArticle(){
        for(let i = 0; i<localStorage.length;i++){           
            if($(".modal-title").innerText == localStorage.getItem(localStorage.key(i)).split("♩")[1])
            {
                localStorage.removeItem(localStorage.key(i));
                titleCheck = titleCheck.filter(function (string) {
                    return string != $(".modal-title").innerText;
                });
               break;
            }
    }
}    








console.log(titleCheck);
