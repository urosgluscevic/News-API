//EVERYTHING BELOW THIS LINE IS USED FOR THE FUNCTIONALITY OF THE "LOAD MORE" BUTTON

var button = document.getElementById("top-rated-more");
var newsContainer = document.getElementById("top-rated");
var newsContainerGrid = document.getElementById("top-rated-grid");
var main = document.getElementById("main");

let loading = 3;
let numOfAddedArticles = 0

window.addEventListener("resize", correctWidth)

function correctWidth() {
    let mainBaseHeight,
        topRatedBaseHeight,
        topRatedGridBaseHeight,
        numOfAddedRows = 0

    if (window.innerWidth > 650) {
        mainBaseHeight = 43.5
        topRatedBaseHeight = 26.625
        topRatedGridBaseHeight = 22.5
        numOfAddedRows = Math.ceil(numOfAddedArticles / 3)
    } else {
        mainBaseHeight = 85
        topRatedBaseHeight = 38.125
        topRatedGridBaseHeight = 34
        numOfAddedRows = Math.ceil(numOfAddedArticles / 2)
    }

    for (let i = 0; i < numOfAddedRows; i++) {
        mainBaseHeight += 11.5
        topRatedBaseHeight += 11.5
        topRatedGridBaseHeight += 11.5
    }
    
    main.style.height = mainBaseHeight + "rem"
    newsContainer.style.height = topRatedBaseHeight + "rem"
    newsContainerGrid.style.height = topRatedGridBaseHeight + "rem"
}

// const loadMoreHandler = higherOrder()
button.addEventListener("click", loadMoreHandler)

var currentMainHeightValue = main.offsetHeight / 16; //this is the current height of #main
var currentGridContainerHeightValue = newsContainerGrid.offsetHeight / 16; //same as #main
var currentNewsContainerHeightValue = newsContainer.offsetHeight / 16;
var increaseHeightBy = 11.5; //every time the function is called, it will be incrased my this value (in rem)


var buttonPressed = 0; // controls the number of articles that have been used

function loadMoreHandler(){
    
    if(buttonPressed < Math.floor((data.articles.length - 6) / 3)) {
        for(i = 0; i < 3; i++){
            numOfAddedArticles++

            var newBlock = document.createElement("div");
            var paragraph1 = document.createElement("p");
            var paragraph2 = document.createElement("p");
            var imgContainer = document.createElement("div");
            var imageSpot = document.createElement("img")

            imgContainer.classList.add("top-rated-imgContainer");
            newBlock.classList.add("top-rated-item");
            imageSpot.classList.add("top-rated-img");

            imgContainer.appendChild(imageSpot);

            if(data.articles[alreadyUsed].title == null || data.articles[alreadyUsed].description == null){
                newBlock.style.display = "none"; //articles with no title or description are not displayed
            }

            newBlock.appendChild(paragraph1);
            newBlock.appendChild(paragraph2);
            newBlock.appendChild(imgContainer);

            newBlock.children[0].textContent = data.articles[alreadyUsed].title;
            newBlock.children[1].textContent = data.articles[alreadyUsed].description;
            newBlock.children[2].firstElementChild.src = data.articles[alreadyUsed].urlToImage;

            newBlock.addEventListener("click",modalPopUp);
            
            newsContainerGrid.appendChild(newBlock)

            alreadyUsed++;
        }

        correctWidth()

        buttonPressed++;
    } else {
        button.innerText = "All Articles Loaded"
        button.style.backgroundColor = "gray"
    }
}

var alreadyUsed = 0; //is used in order for new articles to be loaded, and for ignoring the old ones.

// EVERYTHING ABOVE THIS LINE IS USED FOR THE FUNCTIONALITY OF THE "LOAD MORE" BUTTON

async function fillNews(item, index) {
    const response = await fetch("https://newsapi.org/v2/top-headlines?language=en", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })
    data = await response.json()

    if(data.articles[index].title === null || data.articles[index].description === null){
        item.style.display = "none"; //articles with no title or description are not displayed
    }

    item.children[0].textContent = data.articles[index].title
    item.children[1].textContent = data.articles[index].description
    item.children[2].firstElementChild.src = data.articles[index].urlToImage
    if(index === topRated.length-1){
        loading--;
        removeLoading();
        }
    
}

let topRated = document.querySelectorAll(".top-rated-item")
for (let i = 0; i < topRated.length; i++){
    fillNews(topRated[i], i)
    alreadyUsed++; //since the first i articles have been used, they will be ignored from now on
    
}

function removeLoading(){
if(loading==0){
    document.querySelector(".loadingText").style.display="none";
    document.querySelector(".loading").style.animation="loadingGone 2s linear";
    document.querySelector(".loading").addEventListener("animationend",(e)=>{
        document.querySelector(".loading").style.display="none";
    })
}
}