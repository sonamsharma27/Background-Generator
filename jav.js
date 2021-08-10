var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("body");
var h3=document.querySelector("h3");


function setcolors()
{
body.style.background="linear-gradient(to right, "+color1.value+","+color2.value+")";   // property to set background: background: linear-gradient(to right,color1,color2)
h3.textContent= body.style.background+";";   //used to write text                                                                                                                                  
}

color1.addEventListener("input", setcolors);   // "input" for taking color input from user using color1 
color2.addEventListener("input", setcolors);
