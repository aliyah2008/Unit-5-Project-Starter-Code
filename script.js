let Button = document.querySelector("button");
let timeButton = document.querySelector(".timebutton");
let nightButton = document.querySelector(".nightbutton");
let morningButton = document.querySelector(".morningbutton");
let result= document.querySelector(".result")
let chrollo = document.querySelector(".chrollo");


Button.onclick = function(){
let inputone = document.querySelector(".inputone").value;
  let inputtwo = document.querySelector(".inputtwo").value;

if (inputone === "money" && inputtwo==="night") {
     result.innerHTML = "You are Killua!"; 
chrollo.style.display = "block";
    chrollo.src="https://i1.sndcdn.com/avatars-D8w59A4ioJ6OP280-lPfnSg-t500x500.jpg";
  
} else if (inputone === "time" && inputtwo==="night") {
   result.innerHTML = "You are Gon!";
chrollo.style.display = "block";
chrollo.src="https://practicaltyping.com/wp-content/uploads/2020/08/gon.png"}
  
 else if (inputone === "money" && inputtwo==="morning") {
   result.innerHTML = "You are Feitan!"; 
chrollo.style.display = "block";
chrollo.src="https://i.pinimg.com/originals/e8/eb/e2/e8ebe2edc7919cc1afbfa7b4d61f0b90.jpg"  
   
 } else if  (inputone === "time" && inputtwo==="morning") {
   result.innerHTML = "You are Chrollo!";
   chrollo.style.display = "block";}
        };


let killua = document.querySelector (".killua");
let gon = document.querySelector(".gon");
let fetian = document.querySelector (".fetian");


