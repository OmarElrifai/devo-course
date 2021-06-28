var gameon = false
var x 
var y
var t
var num
var remaininglives
var step
var score

$("#startreset").click(
function(){
    if(gameon==true){
        location.reload();
    }
    else{
        gameon = true;
        $(this).text("Restart Game");
        $("#gameover").hide();
        remaininglives=4;
        score = 0;
        t=100;
        $("#score").html(score);
        lives();
        makefruit(); 
        startaction();
        
       
                
    }
        
    
}
)

$("#fruit1").mouseover(function(){
            score++;
            $("#score").html(score); 
            clearInterval(action);
            //document.getElementById("slicesound").play();
            $("#slicesound")[0].play()
            $("#fruit1").hide("explode",500); 
           for(l=0;l<50;l+=5){
           difficulty(l);};
            setTimeout(function(){ 
                makefruit(); 
                startaction();
            }, 800);
});

function lives(){
            for(i=1;i<remaininglives;i++){
                
                $("#lives").append("<img src = 'images/heart.png' width = 25px>")
           }
    
        }



function makefruit(){
        x = Math.floor(Math.random()*$("#question").width())-10;
        step = 1+Math.round(Math.random()*10);
        num = 1+Math.round(Math.random()*5);
        $("#fruit1").attr("src","images/fruit"+num+".png")
        $("#fruit1").css({display:"inline",left:x+"px",top:"-25px"}); 
}



function startaction(){
    
       action = setInterval(function(){
           //$("#fruit1").css({top:$("#fruit1").position().top+step});
           $("#fruit1").css({top:$("#fruit1").position().top+10});
           
           if($("#fruit1").position().top > $("#question").height()){
               remaininglives--;
               $("#lives").empty();
               lives();
             if(remaininglives > 1){
                 
               makefruit();
                 
                } 
               else{
                   
                   $("#gameover").show();
                   $("#scores").html(score);
                   gameon = false;
                   $("#startreset").text("Start Game")
                   clearInterval(action);
                  
               }
           }
       },t) }
 
function difficulty(n){if(score==n){
     if(t!=20)
     {t=t-10}
 }} 
