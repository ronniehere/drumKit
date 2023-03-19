var noOfDrums=document.querySelectorAll(".drum").length;

for (let index = 0; index < noOfDrums; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function(){
        var inner=this.innerHTML;
        handleClick(inner);
        buttonAnimation(inner);
    })}
    

document.addEventListener("keydown",function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
});

function handleClick(key)
{ 
    switch (key) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
    
}
function buttonAnimation(key)
{
    var activeButton=document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    
}