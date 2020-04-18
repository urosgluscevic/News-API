var button = document.getElementById("top-rated-more");
var newsContainerGrid = document.getElementById("top-rated-grid");
var main = document.getElementById("main");

button.addEventListener("click", loadMoreHandler)

var currentMainHeightValue = 43.5; //this is the current height of #main
var increaseMainHeightBy = 12; //every time the function is called, it will be incrased my this value (in rem)

var currentGridContainerHeightValue = 22.5; //same as #main
var increaseGridContainerHeightBy = 12;

function loadMoreHandler(){

    main.style.height = ""; // reset the value every time, because it will concat strings, and not increase the actual height
    main.style.height += currentMainHeightValue + increaseMainHeightBy + "rem";
    currentMainHeightValue+=increaseMainHeightBy;

    newsContainerGrid.style.height = "";
    newsContainerGrid.style.height += currentGridContainerHeightValue + increaseGridContainerHeightBy + "rem";
    currentGridContainerHeightValue += increaseGridContainerHeightBy;

    console.log(main.style.height)

    var newBlockOne = document.createElement("div");
    var newBlockTwo = document.createElement("div");
    var newBlockThree = document.createElement("div");
    newBlockOne.classList.add("top-rated-item");
    newBlockTwo.classList.add("top-rated-item");
    newBlockThree.classList.add("top-rated-item");
    newsContainerGrid.appendChild(newBlockOne)
    newsContainerGrid.appendChild(newBlockTwo)
    newsContainerGrid.appendChild(newBlockThree)
}