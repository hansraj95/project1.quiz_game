let api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
sessionStorage.setItem("apis",api)
let easy=document.getElementById("easy");
let medium=document.getElementById("medium");
let hard=document.getElementById("hard");
function onEasy()
{
    console.log("easy")
    api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
    sessionStorage.setItem("apis",api)
}
function onMedium()

{  api='https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
     sessionStorage.setItem("apis",api)
    console.log("medium")
}
function onHard()
{ api='https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple'
     sessionStorage.setItem("apis",api)
    console.log("hard")
}
easy.addEventListener("click",onEasy)
medium.addEventListener("click",onMedium)
hard.addEventListener("click",onHard)
