list1=JSON.parse(sessionStorage.getItem("list5"))
list2=JSON.parse(sessionStorage.getItem("list4"))
list3=JSON.parse(sessionStorage.getItem("list6"))



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
     cell3.innerHTML=`${list1[i]}`
     cell4.innerHTML=`${list2[i]}`
     
}
for( i=0;i<(list1.length);i++)
{
    createtable(i)
}
