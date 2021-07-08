let a=document.getElementById("info")
username=sessionStorage.getItem("username")
point=sessionStorage.getItem("points")
a.innerHTML=`<h3>${username} your score is ${point} out of 100</h3>`
