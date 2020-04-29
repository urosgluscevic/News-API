let searchInput = document.getElementById("search-input"),
    searchSubmit = document.getElementById("search-submit"),
    filterSortBy = document.getElementById("filter-sortBy"),
    filterDateFrom = document.getElementById("filter-dateFrom"),
    filterDateTo = document.getElementById("filter-dateTo"),
    displayContent = document.getElementById("display-content")

async function searchNews(words, sortBy, dateFrom, dateTo) {
    let request = `https://newsapi.org/v2/everything?language=en&q=${words}&sortBy=${sortBy}`
    
    if (dateFrom != "")
        request += `&from=${dateFrom}`
    if (dateTo != "")
        request += `&to=${dateTo}`

    const response = await fetch(request, {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })

    let data = await response.json()
    for (article of data.articles) {
        let articleDiv = document.createElement("div"),
            articleImgDiv = document.createElement("div"),
            articleImg = document.createElement("img"),
            articleTitle = document.createElement("p")
            articleDescription = document.createElement("p"),
            hiddenAuthor = document.createElement("p"),
            hiddenUrl = document.createElement("p"),
            hiddenTime = document.createElement("p")
        
        articleDiv.className = "article-div"
        articleImgDiv.className = "article-imgDiv"
        articleImg.className = "article-img"
        articleTitle.className = "article-title"
        articleDescription.className = "article-description"


        hiddenAuthor.className = "remains-hidden"
        hiddenUrl.className = "remains-hidden"
        hiddenTime.className = "remains-hidden"

        hiddenAuthor.textContent = article.author;
        hiddenTime.textContent = article.publishedAt;
        hiddenUrl.textContent = article.url;


        articleImg.src = article.urlToImage
        articleTitle.textContent = article.title
        articleDescription.textContent = article.description

        articleImgDiv.appendChild(articleImg)
        articleDiv.appendChild(articleImgDiv)
        articleDiv.appendChild(articleTitle)
        articleDiv.appendChild(articleDescription)

        articleDiv.appendChild(hiddenAuthor)
        articleDiv.appendChild(hiddenTime)
        articleDiv.appendChild(hiddenUrl)

        displayContent.appendChild(articleDiv)        
    }
}

searchSubmit.addEventListener("click", () => {
    let sortBy = filterSortBy.value
    if (sortBy === "time published")
        sortBy = "publishedAt"

    for (article of displayContent.children)
        displayContent.removeChild(article)
    
    searchNews(searchInput.value, sortBy, filterDateFrom.value, filterDateTo.value)
})