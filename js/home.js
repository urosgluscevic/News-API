let data = undefined;

//EVERYTHING BELOW THIS LINE IS USED FOR THE FUNCTIONALITY OF THE "LOAD MORE" BUTTON

var button = document.getElementById("top-rated-more");
var newsContainerGrid = document.getElementById("top-rated-grid");
var main = document.getElementById("main");

button.addEventListener("click", loadMoreHandler)

var currentMainHeightValue = 43.5; //this is the current height of #main
var increaseMainHeightBy = 12; //every time the function is called, it will be incrased my this value (in rem)

var currentGridContainerHeightValue = 22.5; //same as #main
var increaseGridContainerHeightBy = 12;

var buttonPressed = 0; // controls the number of articles that have been used

function loadMoreHandler(){
    if(buttonPressed < Math.floor((data.articles.length - 6) / 3)) {
        main.style.height = ""; // reset the value every time, because it will concat strings, and not increase the actual height
        main.style.height += currentMainHeightValue + increaseMainHeightBy + "rem";
        currentMainHeightValue+=increaseMainHeightBy;

        newsContainerGrid.style.height = "";
        newsContainerGrid.style.height += currentGridContainerHeightValue + increaseGridContainerHeightBy + "rem";
        currentGridContainerHeightValue += increaseGridContainerHeightBy;

        for(i = 0; i < 3; i++){
            var newBlock = document.createElement("div");
            var paragraph1 = document.createElement("p");
            var paragraph2 = document.createElement("p");
            var imgContainer = document.createElement("div");
            var imageSpot = document.createElement("img")

            imgContainer.classList.add("top-rated-imgContainer");
            newBlock.classList.add("top-rated-item");
            imageSpot.classList.add("top-rated-img");

            imgContainer.appendChild(imageSpot);

            newBlock.appendChild(paragraph1);
            newBlock.appendChild(paragraph2);
            newBlock.appendChild(imgContainer);

            newBlock.children[0].textContent = data.articles[alreadyUsed].title;
            newBlock.children[1].textContent = data.articles[alreadyUsed].description;
            newBlock.children[2].firstElementChild.src = data.articles[alreadyUsed].urlToImage;

            newsContainerGrid.appendChild(newBlock)

            alreadyUsed++;
        }

        buttonPressed++;
    }
}

var alreadyUsed = 0; //is used in order for new articles to be loaded, and for ignoring the old ones.

// EVERYTHING ABOVE THIS LINE IS USED FOR THE FUNCTIONALITY OF THE "LOAD MORE" BUTTON

async function fillNews(item, index) {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=rs", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })
    data = await response.json()
    // console.log(data.articles.length)
    item.children[0].textContent = data.articles[index].title
    item.children[1].textContent = data.articles[index].description
    item.children[2].firstElementChild.src = data.articles[index].urlToImage
}

let topRated = document.querySelectorAll(".top-rated-item")
for (let i = 0; i < topRated.length; i++){
    fillNews(topRated[i], i)
    alreadyUsed++; //since the first i articles have been used, they will be ignored from now on
}