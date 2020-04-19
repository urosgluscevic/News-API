modal = document.querySelector(".modal");

topRated.forEach(item => {
    item.addEventListener("click",(e)=>{
        modal.style.display="block"; 
    })
});


document.querySelector("#modalCloseButton").addEventListener("click",() => {
    modal.style.display="none";
});

//SJUTRA CU DODAT DA SE POPUNI CONTENT ODOH DA SPAVAM!


