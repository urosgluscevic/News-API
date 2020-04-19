function $(string){
    return document.querySelector(string);
}

function $$(string){
    return document.querySelectorAll(string);
}



modal = document.querySelector(".modal");

topRated.forEach(item => {
    item.addEventListener("click",modalPopUp);

}) 


document.querySelector("#modalCloseButton").addEventListener("click",() => {
    modal.style.display="none";
});

//SJUTRA CU DODAT DA SE POPUNI CONTENT ODOH DA SPAVAM!


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
            $(".modal-text").innerHTML = article[i].content;
            $(".modal-link").href = article[i].url;
        }
        
        
    }

    
}