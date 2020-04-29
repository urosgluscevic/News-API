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
    } else if(e.target.classList.contains("article-img")){
        listModal.style.display = "block";
        listModalImg.src = e.target.parentNode.parentNode.children[0].children[0].src;
        listModalTitle.innerText = e.target.parentNode.parentNode.children[1].innerText;
        listModalArticle.innerText = e.target.parentNode.parentNode.children[2].innerText;

        listModalAuthor.innerText = e.target.parentNode.parentNode.children[3].innerText;
        listModalTime.innerText = e.target.parentNode.parentNode.children[4].innerText;
        listArticleUrl.href = e.target.parentNode.parentNode.children[5].innerText;
    }
}