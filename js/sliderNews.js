var sliderContentCards = document.getElementsByClassName("slider-content");


async function sliderNewsFill (sliderItem, sliderIndex) {
    const sliderResponse = await fetch("https://newsapi.org/v2/everything?q=popular&from=2020-04-19&to=2020-04-19&sortBy=popularity", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })
    sliderArticles = await sliderResponse.json()
    sliderItem.children[0].src = sliderArticles.articles[sliderIndex].urlToImage;
    sliderItem.children[1].textContent = sliderArticles.articles[sliderIndex].title;
    if(sliderIndex ===  sliderContentCards.length-1){
        loading--;
        removeLoading();
        }
}

for (let i = 0; i < sliderContentCards.length; i++){
    sliderNewsFill(sliderContentCards[i], i);
}


