var factButton = document.getElementById("uros-btn");
var factDisplay = document.getElementById("uros-facts");

factButton.addEventListener("click", function(){
    if(urosFactArray.length){
        var randomIndex = Math.floor(Math.random() * urosFactArray.length);
        factDisplay.innerText = urosFactArray[randomIndex]; 
        urosFactArray.splice(randomIndex, 1)
    } else {
        urosFactArray = [...backupUrosFacts];
        var randomIndex = Math.floor(Math.random() * urosFactArray.length);
        factDisplay.innerText = urosFactArray[randomIndex]; 
        urosFactArray.splice(randomIndex, 1)
    }
})

var urosFactArray = [
    "Ich kann ein bisschen Deutsch sprechen.",
    "I have been playing the guitar for 1 year, and I'm self taught.",
    "I'm a huge metal fan. My favourite band is Rammstein.",
    "I fell asleep at a 'Lamb Of God' concert once, while there were 13000 people around me!",
    "I like reading classic novels. My favourite author is Honore de Balzac, but my favourite book, 'Martin Eaden', was written by Jack London.",
    "I trained with the National Pioneers Volleyball Team of Montenegro.",
    "I play volleyball, chess, and I enjoy skiing",
    "Volunteering is very important to me, and I try to devote as much of my free time to it as possible."
];

var backupUrosFacts = [...urosFactArray];