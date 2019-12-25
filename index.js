
 var quantity = screen.width/285;
var slide = 0;

var clicright = 1;
var clicleft = 1; 





document.getElementById("button-right").addEventListener("click", moveitright);
document.getElementById("button-left").addEventListener("click", moveitleft);
document.getElementById("movie").addEventListener("click",iets);



function moveitright(){
  if(document.getElementById('slider').style.right < 3420 + 'px'){
  document.getElementById('slider').style.right =  (clicright*quantity*285) + 'px';
clicright = clicright + 1;clicleft= clicleft - 1;} 
else{document.getElementById('slider').style.right = 0 + 'px';};}



function moveitleft(){
  
  document.getElementById('slider').style.right =  -(clicleft*quantity*285) + 'px';
  clicleft = clicleft + 1;clicright = clicright-1;}
   
var detailclict = 0;

function iets(){ 
  
  detailclic = detailclic + 1;

  switch(detailclic){
    case 1:
      document.getElementById("detail").style.visibility = "visible";
      break;
    case 2:
      document.getElementById("detail").style.visibility = "hidden";
      
  };}



  
    
  // huidige width van items ophalen

  // get amount of items

  // calculate entire width (nr of items * width of an item)
  // this is the width of the slider

  // hoeveel items passen er op het scherm?

  // logica hieronder uitbreiden: bijhouden hoeveel keer geklikt werd
  // left/right updaten met de width * aantal clicks
  
    
  
  
   
    
  


    
  
  









 
    