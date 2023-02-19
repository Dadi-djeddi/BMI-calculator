
function clicked(){
  
  //getting elements
  let myheight = document.getElementById("height").value / 100;
  let myweight = document.getElementById("weight").value;
  x = myheight * myheight ;
  y = myweight / x ;
  r = Math.trunc(y) ;
  
  //bmi range
  if (y < 14 ){
    alert("invalid number !  Please try again");
    y = 0;
  }
  else if (y > 45) {
    alert("invalid number !  Please try again");
    y = 0;
  }
  else if (y > 14 , y < 45 ){
    document.getElementById("result").scrollIntoView();
  }
  else {
    alert("invalid number !  Please try again")
  }
  
   //change bmi to a sting and displaying it
  let l = r.toString();
  document.getElementById("bmi-result").innerText = l;
  //rotaion angel
  let a = y - 14 ;
  a = a * 8.18181818 ;
  
  let myAngel = a.toString() + "deg";
  document.getElementById("arrow").style.rotate = myAngel ;
    
  //age
  let myAge = document.getElementById("age").value
  if (myAge < 17){
    alert("this bmi test is only for adults")
    ;
  }
  else if (myAge > 120) {
    alert("invalid age !  Please try again")
    l = 0;
  } 
  
   //comment
  let myComment 
  if (y < 14 ){
    myComment= "type your informations"
  }
  else if (y >= 14 && y < 16 ){
    myComment= "extremly under weight !!";
  }
  else if (y >= 16 && y < 18.5 ){
    myComment= "you're underweight !";
  }
  else if (y >= 18.5 && y < 23 ){
    myComment= "normal"; }
  else if (y >= 23 && y < 25 ){
    myComment= "risk to overweight"; }
  else if (y >= 25 && y < 30 ){
    myComment= "overweight !"; }      
  else if (y >= 30 && y < 50){
    myComment= "obese !!"; }   
  document.getElementById("comment").innerText = myComment ;


  //text animation
  document.getElementById("bmi-result").style.transform = "translateY(0px)";
  document.getElementById("bmi-result").style.opacity = "100%";

  document.getElementById("comment").style.transform = "translateY(0px)";
  document.getElementById("comment").style.opacity = "100%";
  
  console.log(y)
  console.log(myAngel)
  
}
