
   //ADDING AUDIO
   // var audio = new Audio("sounds/tom-1.mp3");
   // audio.play();

/*FIRST METHOD: document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");}

 THIS IS ONLY FOR FIRST BUTTON: 
 
 document.querySelector("button").addEventListener("click", function (){
    alert("I got clicked!");
});

TO GET ALL BUTTON ELEMENTS
const buttons = document.querySelectorAll('button'); // Get all button elements

buttons.forEach(function(button) { // Loop through each button
  button.addEventListener('click', function() {
    alert('I got clicked!');
  });
});*/

// OR WE CAN USE FOR LOOP
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for( var i=0; i<numberOfDrumButtons; i++) {
    //Instead of adding if statementt for each letter we use switch
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){ 
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
      
  });
}

document.addEventListener("keypress",function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key){

switch (key){
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        
          case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        
          case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;        
        
          case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;     
        
          case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();     
          break; 
        
          case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();    
          break;   
      
          case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();  
          break;

          default:console.log();
        
        }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed") //pressed defined in css we are adding that class here for highlighting pressed button
    
    setTimeout(function(){
      activeButton.classList.remove("pressed"); // this will stop the animation after 0.1 second
    }, 100);
}


