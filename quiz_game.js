let list1=[];
let list2=[];
let list3=[];
let time=document.getElementById("time")
let secound=0;
let timeleft=120;
let count=0;
//timer start
function convert(time)
{
let min=Math.floor(time/60);
let sec=time%60;
sec=sec<10? '0'+sec:sec;
return  min + ':'+ sec
}
setInterval(() => {
 secound=secound+1;
 
time.innerHTML=`Time Left ${convert(timeleft-secound)}`
if((timeleft-secound)==0)
{
    location.href="end_page.html"
}
    
},1000);
//timer end

 
    let listitem=JSON.parse(sessionStorage.getItem("listitem"))
    console.log(listitem)

    //load question
    show(count);
    function show(count)
    {  let listitems=listitem[count];
       
       let total=listitems.incorrect_answers;
       
        
        total.splice(Math.floor(Math.random()*3+1),0,listitems.correct_answer)
        create_page(total,listitems)
        
        
       
    }
    /*load question end */

    let point=0;
    let nextbutton=document.getElementsByClassName('next')

    //check answer ,store point and calling load function
    function onNextButton()
    {  
        if(count>=9)
        {
            location.href="end_page.html"
   
        } 
        
     else if(document.querySelector("li.option.active")==null)
     {
         alert("Please select answer")
     }
    
     
     let answer=document.querySelector("li.option.active").innerHTML
     list2.push(answer)
     sessionStorage.setItem("list5",JSON.stringify(list2))
    
    
     if(answer==correctanswer)
     {
         point+=10;
         console.log(point)
         sessionStorage.setItem("points",point)
     }
     count=count+1;
     show(count)
    }
    
/*next button end*/
//create dynamic html page
    function create_page(total,listitems)

    {  
         
        let questions=document.getElementById("questions");
        let difficulty=document.getElementById("question-number");
        difficulty.innerHTML=`<div class="difficult"><h3>Difficulty:</h></div>
        <span class="easy"><h3>${ listitems.difficulty}<h3></span>`
        questions.innerHTML=`<h2 id="questions">${count+1}.${listitems.question}</h2>`
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
        list1.push(correctanswer)
        sessionStorage.setItem("list4",JSON.stringify(list1))
        list3.push(listitems.question)
        sessionStorage.setItem("list6",JSON.stringify(list3))
    
        
        activeClass();  
        
    }
    //adding active class
    function activeClass()
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

    