async function getNews() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=rs", {
        headers: {
            "X-Api-Key": "d6e9eca6a9e4407cb8c19ed7dd38b910"
        }
    })
    console.log(response)
    let data = await response.json()
    console.log(data)
}
/*
fetch("https://newsapi.org/v2/top-headlines?country=rs&apiKey=d6e9eca6a9e4407cb8c19ed7dd38b910")
    .then(data => data.json())
    .then(json => {
        console.log(json)
    })*/

getNews()