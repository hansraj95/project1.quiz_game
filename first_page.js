let api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
get_data(api)
let easy=document.getElementById("easy");
let medium=document.getElementById("medium");
let hard=document.getElementById("hard");
function onEasy()
{
    console.log("easy")
    api='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
    get_data(api)
    alert("you selected easy level")

}
function onMedium()

{  api='https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
     get_data(api)
    console.log("medium")
    alert("you selected medium level")
}
function onHard()
{ api='https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple'
  get_data(api)
    alert("you selected hard level")
}

easy.addEventListener("click",onEasy)
medium.addEventListener("click",onMedium)
hard.addEventListener("click",onHard)



function get_data(apis)

{fetch(apis)
.then(res=>res.json())
.then(data => 
    {  let listitem=data.results;
        console.log(listitem)
        sessionStorage.setItem("listitem",JSON.stringify(listitem))
        
    })}
