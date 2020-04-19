let data = undefined;

async function fillNews(item, index) {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=rs", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })
    data = await response.json()
    console.log(data)
    item.children[0].textContent = data.articles[index].title
    item.children[1].textContent = data.articles[index].description
    item.children[2].firstElementChild.src = data.articles[index].urlToImage
}

let topRated = document.querySelectorAll(".top-rated-item")
for (let i = 0; i < topRated.length; i++)
    fillNews(topRated[i], i)