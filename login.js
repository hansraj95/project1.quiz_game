
function validateform(){
   
    var x = document.forms["form-details"]["exampleInputEmail1"].value;

   var password=document.forms["form-details"]["exampleInputPassword1"].value;
   var reEnteredPassword=document.forms["form-details"]["exampleInputPassword2"].value;

  var  cha=document.getElementById("exampleCheck1");
  
   // alert(!cha);
   if(password.length<8){
      alert("length")
   //   var list= document.getElementsByTagName("p").removeChild;
   //  list.removeChild(list.removeChildNode[0]);
     const para = document.createElement("p");
    const node = document.createTextNode("Password length is less than 8");
    para.appendChild(node);
    const element = document.getElementById("length");
    element.appendChild(para);
    return false;

   }
   
   else if((cha.checked==true)&&(password===reEnteredPassword)){
      return true;
   }
   
   else if(cha.checked==false){
    //   alert("dfds");
     
       const para = document.createElement("p");
         const node = document.createTextNode("plz check the box to continue");
        para.appendChild(node);
      const element = document.getElementById("forCheck");
           element.appendChild(para);
//              var list = document.getElementById("forCheck");
//   list.removeChild(list.childNodes[0]);
  return  false;
}
   
   
   else{
//document.getElementById("errorMessage").value="entered passWord miss match";
// var list = document.getElementById("fromJs");
// list.removeChild(list.childNodes[0]);
const para = document.createElement("p");
const node = document.createTextNode("Password Miss match plz re enter the pass word");
para.appendChild(node);
const element = document.getElementById("fromJs");
element.appendChild(para);
  return  false;
}

}
// document.addEventListener("DOMContentLoaded", function(){
//    window.addEventListener('scroll', function() {
//        if (window.scrollY > 50) {
//          document.getElementById('navbar_top').classList.add('fixed-top');
//          // add padding top to show content behind navbar
//          navbar_height = document.querySelector('.navbar').offsetHeight;
//          document.body.style.paddingTop = navbar_height + 'px';
//        } else {
//          document.getElementById('navbar_top').classList.remove('fixed-top');
//           // remove padding top from body
//          document.body.style.paddingTop = '0';
//        } 
//    });
//  })