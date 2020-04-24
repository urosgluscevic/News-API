function $(string){
    return document.querySelector(string);
}

function $$(string){
    return document.querySelectorAll(string);
}

let maximalLocalCounter = 0;
let localCounter = 0;


for(let i = 0;i<localStorage.length;i++){
    if(parseInt(localStorage.key(i),10)>maximalLocalCounter){
        maximalLocalCounter = parseInt(localStorage.key(i),10);
    }
    localCounter = maximalLocalCounter+1;
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


document.querySelector("#modalCloseButton").addEventListener("click",() => {
    modal.style.display="none";
});



function modalPopUp(e) {
    modal.style.display = "block";
   
    
        for(let i = 0; i<localStorage.length;i++){
            if(this.children[2].innerText == localStorage.getItem(localStorage.key(i)).split("♩")[1]){
            let crucialData = localStorage.getItem(localStorage.key(i)).split("♩");
            $(".modal-img").src = crucialData[0];
            $(".modal-title").innerText = crucialData[1];
            $(".modal-author").innerText = crucialData[2];
            $(".modal-date").innerText = crucialData[3];
            $(".modal-text").innerHTML = crucialData[4];
            $(".modal-link").href = crucialData[5];
            break;
            }
        }
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



