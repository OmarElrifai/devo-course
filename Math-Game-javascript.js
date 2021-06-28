//press start/reset button
    //the game is going on(timer is still working)?
         // if yes: Reload page
         // if no: show time remaining box
         //        display question and choices
         //        decrement the timer by one --> still time left 
                      // if yes:decrement the timer by one
                      // if no:show message game over
//press choice button 
    // if timer out yes-->nothing happens
   //if correct: reload another questions with new choices
   //            show correct box 
   //            increment score by 1
   //if false: show try again box
 
var playing = false; 
var score = 0 ; 
var a;
var b;
var c;
var d;
var num;
var wronganswer;
document.getElementById("startreset").onclick = function(){

if (playing == true){    
location.reload();}
    else{ 
        playing = true;
document.getElementById("gameover").style.display="none";        
document.getElementById("startreset").innerHTML = "Reset"; 
var score = 0 ;
document.getElementById("score").innerHTML=score;        
function QandA(){       
 a = Math.round(Math.random()*12);   
 b = Math.round(Math.random()*12); 
 c = a + 'x' + b;
 d = a * b;
 num = 1+Math.round(Math.random()*3);   
document.getElementById("question").innerHTML= c;
document.getElementById("box"+num).innerHTML = d;

for (i=1;i<5;i++){     
if (i != num){
     
    var answer=[d];
    do{     
         wronganswer=1+Math.round(Math.random()*158);
    }while(answer.indexOf(wronganswer)>-1)
    document.getElementById("box"+i).innerHTML=wronganswer;
    answer.push(wronganswer);
}  }  
}

QandA();        
var x = 60;
var timer = 
setInterval(function(){x--;document.getElementById("timer").innerHTML=x},1000);


        
        
        
for (i=1;i<5;i++){
document.getElementById("box"+i).onclick = function(){  

if (this.innerHTML == d && playing == true )
    
{ 
document.getElementById("correct").style.visibility="visible";    
setTimeout(function(){document.getElementById("correct").style.visibility="hidden"},2000);
score++;    
document.getElementById("score").innerHTML= score;
QandA();    
   
}
    
else if (playing == true){
document.getElementById("correct").style.display="none"    
document.getElementById("tryagain").style.display="inherit";    
setTimeout(function(){document.getElementById("tryagain").style.display="none";
                     document.getElementById("correct").style.display="inline"},2000);
}
    
else{ 
      
       document.getElementById("tryagain").style.display="none";}    
    
    
                                                     } 

                  }



setTimeout(function(){clearInterval(timer);
                      playing = false;
                      document.getElementById("gameover").style.display="inline";
                      document.getElementById("startreset").innerHTML="Start Game";
                      document.getElementById("scores").innerHTML= score;
                      
                      },60000);



  }
                                                         }














