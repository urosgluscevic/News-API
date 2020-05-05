var bestCards = document.getElementsByClassName("best-content");

var bestArticles = undefined;

async function fillBest(contentOfBest, indexOfBestChild) {
    const bestNews = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })

    bestArticles = await bestNews.json()

   

    contentOfBest.children[1].textContent = bestArticles.articles[indexOfBestChild].title;
    contentOfBest.children[0].firstElementChild.src = bestArticles.articles[indexOfBestChild].urlToImage;

    if(indexOfBestChild === bestCards.length-1){
        loading--;
        removeLoading();
    }
}

for (let i = 0; i < bestCards.length; i++){
    fillBest(bestCards[i], i);
}