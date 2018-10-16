function Func(){
var score=0;

var x = document.getElementsByClassName('Q1');
if (x[0].checked == true) {
     score=score+5; 
}

x = document.getElementsByClassName('Q2');
if (x[3].checked == true) {
     score=score+5; 
}

x = document.getElementsByClassName('Q3');
if (x[1].checked == true) {
     score=score+5; 
}

x = document.getElementsByClassName('Q4');
if (x[0].checked == true) {
     score=score+5; 
}

x = document.getElementsByClassName('Q5');
if (x[2].checked == true) {
     score=score+5; 
}

alert("Your score (Out of 25) is: " + score);
window.location.reload();
}
