var correct;
var choosen;
var num;
var gameon=false;
var level;
var audio1 = new Audio("sounds/voice1.mp3");
var audio2 = new Audio("sounds/voice2.mp3");
var audio3 = new Audio("sounds/voice3.mp3");
var audio4 = new Audio("sounds/voice4.mp3");
var mistake = new Audio("sounds/wrong.mp3");
alert("When press 'a' or click start button a random box will be choosen for you \n when you click on the correct box you'll be upgraded to another level and \n another random box will be selected for you, you have to remember the box \n from the last level because you have to select it then select the new box \n it keeps going like that you choose the old boxes and then select the new \n in each level,if you choose the wrong boxes then you lose")
$(document).keypress(function(event){
    if(event.key=="a" || event.key== "A"){
    if(gameon==false){
    gameon=true;
    correct=[];
    choosen=[];
    level=1;    
    selector();
      
        }
    }
});
$(".start").click(function(){
    if(gameon==false){
    $(".start").text("Reset");    
    gameon=true;
    correct=[];
    choosen=[];
    level=1;    
    selector();
      
        }
    else{
    location.reload()    
    }
})


function selector(){
    $("h1").text("Level "+level);
    num=Math.floor((Math.random()*4)+1);
    generate(num); 
   
}
function generate(n){
    $(".b"+n).addClass("invisible");
    var audio= new Audio("sounds/voice"+n+".mp3");
    audio.play();
    setTimeout(function(){$(".b"+n).removeClass("invisible")},100);
    correct.push($(".b"+n).attr("id"))
}
//for (var i = 1;i<5;i++){
//    $(".b"+i).click(function(){
//        choosen.push($(".b"+i).attr("id"))
//    })
//}
$(".b1").click(function(){
    if(gameon==true){
        $(".b1").addClass("pressed");
        audio1.play();
        setTimeout(function(){$(".b1").removeClass("pressed");},100)
        choosen.push($(".b1").attr("id"));
        if(correct.length==choosen.length){
        if(JSON.stringify(correct)==JSON.stringify(choosen)){
            choosen=[];
            level++;
            setTimeout(function(){selector()},500);
        }else{
            $("body").addClass("wrong");
            mistake.play();
            $("h1").text("Game Over Press A to Start Again");
            setTimeout(function(){$("body").removeClass("wrong");},100);
            gameon=false;
        }
    }  
}})
$(".b2").click(function(){
    if(gameon==true){ 
        $(".b2").addClass("pressed");
        audio2.play();
        setTimeout(function(){$(".b2").removeClass("pressed");},100)
        choosen.push($(".b2").attr("id"));
        if(correct.length==choosen.length){
        if(JSON.stringify(correct)==JSON.stringify(choosen)){
            choosen=[];
            level++;
            setTimeout(function(){selector()},500);
        }else{
            $("body").addClass("wrong");
            mistake.play();
            $("h1").text("Game Over Press A to Start Again");
            setTimeout(function(){$("body").removeClass("wrong");},100);
            gameon=false;
        }
    }
} })
$(".b3").click(function(){
    
 if(gameon==true){       
     $(".b3").addClass("pressed");
        audio3.play();
        setTimeout(function(){$(".b3").removeClass("pressed");},100)
        choosen.push($(".b3").attr("id"));
        if(correct.length==choosen.length){
        if(JSON.stringify(correct)==JSON.stringify(choosen)){
            choosen=[];
            level++;
            setTimeout(function(){selector()},500);
        }else{
            $("body").addClass("wrong");
            mistake.play();
            $("h1").text("Game Over Press A to Start Again");
            setTimeout(function(){$("body").removeClass("wrong");},100);
            gameon=false;
        }
    }
} })
$(".b4").click(function(){
    if(gameon==true){ 
        $(".b4").addClass("pressed");
        audio4.play();
        setTimeout(function(){$(".b4").removeClass("pressed");},100)
        choosen.push($(".b4").attr("id"));
        if(correct.length==choosen.length){
        if(JSON.stringify(correct)==JSON.stringify(choosen)){
            choosen=[];
            level++;
            setTimeout(function(){selector()},500);
        }else{
            $("body").addClass("wrong");
            mistake.play();
            $("h1").text("Game Over Press A to Start Again");
            setTimeout(function(){$("body").removeClass("wrong");},100);
            gameon=false;
        }
    }
} })    