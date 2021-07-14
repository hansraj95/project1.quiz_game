list1=JSON.parse(sessionStorage.getItem("list5"))
list2=JSON.parse(sessionStorage.getItem("list4"))
list3=JSON.parse(sessionStorage.getItem("list6"))

let n=1;
let list4=[];
list4.push(list1[n])
while (n<list1.length) {
    if(list1[n]=="no response")
    {
        n=n+1
    }
    else
    {
        n=n+2
    }
    list4.push(list1[n])
    
}
console.log(list4)

function createtable(i)
{   
    let tbl=document.getElementById("table")
     let row=tbl.insertRow();
     let cell1=row.insertCell();
     let cell2=row.insertCell();
     let cell3=row.insertCell();
     let cell4=row.insertCell();
     cell1.innerHTML=`${i+1}`
     cell2.innerHTML=`${list3[i]}`
     cell3.innerHTML=`${list4[i]}`
     cell4.innerHTML=`${list2[i]}`
     
}
for( i=0;i<(list4.length-1);i++)
{
    createtable(i)
}
