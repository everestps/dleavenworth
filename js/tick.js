var keys = document.querySelectorAll('div.box');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', runGame);
}
var turns = 1;
function runGame(evt) {
  if(turns % 2 === 0) {
    turns++;
    this.innerHTML = 'X';
  }
  else {
    turns++;
    this.innerHTML = 'O';
  }
  if (turns === 10) {
    alert("Cat's game");
  }
  winCheck(evt.target);
}

function winCheck(targt) {
  var sq1 = document.getElementById('box0');
  var sq2 = document.getElementById('box1');
  var sq3 = document.getElementById('box2');
  var sq4 = document.getElementById('box3');
  var sq5 = document.getElementById('box4');
  var sq6 = document.getElementById('box5');
  var sq7 = document.getElementById('box6');
  var sq8 = document.getElementById('box7');
  var sq9 = document.getElementById('box8');

  if (sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML) {
    for(var i = 0; i < 9; i++){
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }  
  }
  else if (sq4.innerHTML === sq5.innerHTML && sq5.innerHTML === sq6.innerHTML) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if (sq7.innerHTML === sq8.innerHTML && sq8.innerHTML === sq9.innerHTML) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if (sq1.innerHTML === sq5.innerHTML && sq5.innerHTML === sq9.innerHTML) {
    for( var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = this.innerHTML;
    }
  }
  else if (sq3.innerHTML === sq5.innerHTML && sq5.innerHTML === sq7.innerHTML) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = this.innerHTML;
    }
  }
  else {
    alert("Error");
  }
}