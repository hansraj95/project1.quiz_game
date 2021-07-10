let count=0;
let api=sessionStorage.getItem("apis")
console.log(api)
show(count);
function show(count)
{let api=sessionStorage.getItem("apis")

fetch(api)
.then(res=>res.json())
.then(data => 
    {  listitems=data.results;
        show_data(listitems[count]);
        
    })}
    
 
   function show_data(listitems)
    {  
       
       let total=listitems.incorrect_answers;
        
        
        total.splice(Math.floor(Math.random()*3+1),0,listitems.correct_answer)
        create_page(total,listitems)
        
        
       
    }
    let point=0;
    let nextbutton=document.getElementsByClassName('next')
    function onNextButton()
    {  
        
     count=count+1;
     console.log(correctanswer)
     let answer=document.querySelector("li.option.active").innerHTML
     if(answer==correctanswer)
     {
         point=point+10;
         sessionStorage.setItem("points",point)
     }
     if(count==10)
     {
         location.href="end_page.html"

     }
     show(count)
     
    }
    
    
    function create_page(total,listitems)

    {  
         console.log(listitems)
        let questions=document.getElementById("questions");
        let difficulty=document.getElementById("question-number");
        difficulty.innerHTML=`<div class="difficult">difficulty:</div>
        <div class="easy">${listitems.difficulty}</div>`
        questions.innerHTML=`<h2 id="questions">(${count+1})${listitems.question}</h2>`
        let page=document.getElementById("page");
        page.innerHTML=`
        <ul class="options">
            <li class="option">${total[0]}</li>
            <li class="option">${total[1]}</li>
            <li class="option">${total[2]}</li>
            <li class="option">${total[3]}</li>
        </ul>
        </div>`
        correctanswer=listitems.correct_answer
        toggleactive();  
        
    }
    
    function toggleactive()
    {
        let elements=document.getElementsByClassName("option");
        
        
        for(let i=0;i<4;i++)
        {
            elements[i].onclick=function()
            {   
                for(let j=0;j<4;j++)
                {if (elements[j].classList.contains("active")) {
                    elements[j].classList.remove("active");
                    
                }}
                elements[i].classList.add("active")
            }
        }
    }
