let a=document.getElementById("info")
username=sessionStorage.getItem("username")
point=sessionStorage.getItem("points")
if(point==null)
{
    point=0;
}
if(point>=70)
{
    a.innerHTML=`<h3 class="info1"> Well Done!${username}</h2><h3 class=info2> you scored  ${point} out of 100</h3>` 
}
else{
a.innerHTML=`<h3 class="info1">${username}</h2><h3 class=info2> you scored  ${point} out of 100</h3>`}
let list=[sessionStorage.getItem("list3")]

console.log(list[0])