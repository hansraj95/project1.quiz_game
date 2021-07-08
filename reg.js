function submitform()
{  //alert("form submitted")
    var a=document.getElementsByName("username")[0]
    console.log(a.value)
    sessionStorage.setItem("username",a.value)
}