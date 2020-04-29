var listModal = document.getElementById("list-modal");
var listModalImg = document.getElementById("list-modal-img");
var listModalTitle = document.getElementById("list-modal-title");
var listModalArticle = document.getElementById("list-modal-article");
var listModalAuthor = document.getElementById("list-modal-author");
var listModalTime = document.getElementById("list-modal-time");
var listArticleUrl = document.getElementById("list-modal-article-link");
var listModalCloseBtn = document.getElementById("modalCloseButton");

document.addEventListener("click", listOpenModal);
listModalCloseBtn.addEventListener("click", function() {
    listModal.style.display = "none";
})

function listOpenModal(e){
    if(e.target.classList.contains("article-title") || e.target.classList.contains("article-imgDiv")){
        listModal.style.display = "block";
        listModalImg.src = e.target.parentNode.children[0].children[0].src;
        listModalTitle.innerText = e.target.parentNode.children[1].innerText;
        listModalArticle.innerText = e.target.parentNode.children[2].innerText;

        listModalAuthor.innerText = e.target.parentNode.children[3].innerText;
        listModalTime.innerText = e.target.parentNode.children[4].innerText;
        listArticleUrl.href = e.target.parentNode.children[5].innerText;
        titleChecker()
    } else if(e.target.classList.contains("article-img")){
        listModal.style.display = "block";
        listModalImg.src = e.target.parentNode.parentNode.children[0].children[0].src;
        listModalTitle.innerText = e.target.parentNode.parentNode.children[1].innerText;
        listModalArticle.innerText = e.target.parentNode.parentNode.children[2].innerText;

        listModalAuthor.innerText = e.target.parentNode.parentNode.children[3].innerText;
        listModalTime.innerText = e.target.parentNode.parentNode.children[4].innerText;
        listArticleUrl.href = e.target.parentNode.parentNode.children[5].innerText;
        titleChecker()
    }
}

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