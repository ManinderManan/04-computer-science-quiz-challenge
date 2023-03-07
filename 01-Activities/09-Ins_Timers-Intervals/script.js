// Selects element by class
var timeEl = document.querySelector(".time");
//grabs the element called time which in this case is h1 in the html 

// Selects element by id
var mainEl = document.getElementById("main");
//grabs line 11 the div id 

var secondsLeft = 10;


function setTime() {
  // Sets interval in variable
  //Setinterval takes 2 parameters
  //1st one is a function to call
  //2nd is how often do we want to call the function in milliseconds
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  //creating img html tag 
  var imgEl = document.createElement("img");
  //changing the src attribute of the image we created ti an image we have
  imgEl.setAttribute("src", "images/image_1.jpg");
  //adding it to the end of main div
  mainEl.appendChild(imgEl);

}

setTime();
