var bestCards = document.getElementsByClassName("best-content");

var bestArticles = undefined;

async function fillBest(contentOfBest, indexOfBestChild) {
    const bestNews = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })

    bestArticles = await bestNews.json()
    console.log(bestArticles)

    contentOfBest.children[1].textContent = bestArticles.articles[indexOfBestChild].title;
    contentOfBest.children[0].firstElementChild.src = bestArticles.articles[indexOfBestChild].urlToImage;
}

for (let i = 0; i < bestCards.length; i++){
    fillBest(bestCards[i], i)
}