function createSavedArticle(i){
    let crucialData = localStorage.getItem(localStorage.key(i)).split("♩");
    let saveDiv = document.createElement("div");
    saveDiv.classList.add("savedArticle");
    let saveImg = document.createElement("img");
    saveImg.src = crucialData[0];
    let saveHr = document.createElement("hr");
    saveHr.classList.add("aLine");
    let saveH3 = document.createElement("h3");
    saveH3.innerText = crucialData[1];
    saveDiv.appendChild(saveImg);
    saveDiv.appendChild(saveHr);
    saveDiv.appendChild(saveH3);
    return saveDiv;
}

for(let i = 0;i<localStorage.length;i++){
    document.querySelector(".allSavedArticles").appendChild(createSavedArticle(i));
}
