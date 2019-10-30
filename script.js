/* Add interactivity to your site with Javascript */
function randomPosition() {
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){
    var x = Math.floor((Math.random() * 1500) + 1);
    var y = Math.floor((Math.random() * 900) + 1);
    var xpos = x+'px'
    var ypos = y+'px'
    list[i].style.right = xpos;
    list[i].style.top = ypos;
  }
}

var counter = 360;

function randomRotate(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.transform = 'rotate('+counter + 'deg)';
  }  
  counter += 360;
}

var score = 0;
function changeScore(){
  score += 1;
  document.getElementById("score").innerHTML = score;

}

function loseScore(){
  document.getElementById('score').innerHTML = '0';
  var x = Math.floor((Math.random() * 999999) + 1);
  console.log('#'+x);
  document.body.style.backgroundColor = '#' + x;
  alert("You lost ALL your POINTS to Sensei JAIN");
}

var opacityCounter = .5
function disapearButtons(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = opacityCounter;
    
  }
  var x = Math.floor((Math.random() * 2) + 1);
    if (x >=2) {
      opacityCounter += .2;
    }
    else {
      opacityCounter -= .2;
    }
  
}
function reapear(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = 1;
  }
}
function extremeRandomButtons(){
  var list = document.getElementsByTagName("BUTTON");
  for(var i = 0; i < 12; i++){ 
    list[i].style.opacity = 0;
  }
  setTimeout(randomPosition, 3000);
  setTimeout(reapear, 5000)
}




randomPosition()



