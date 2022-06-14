// Q1. Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside.

// create 2 <p> tags one having no attributes to it and another having class=”blue-white” and have some text inside.

// I) change the text color of the element with  id=”root” to red on mouseover event.

// ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event.

// iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event;

//Mouse Over Function Question 1
function mouseFunc() {
  document.getElementById('root').style.color = 'red';
}

//Mouse OUt Function Question 1
function mouseOut() {
  document.getElementById('root').style.color = 'black';
}

//Mouse over Func Question 2
function mouseOverFunc() {
  var tag = document.getElementsByClassName('blue-white');
  tag[0].style.color = 'blue';
}
function mouseOverOut() {
  var tag = document.getElementsByClassName('blue-white');
  tag[0].style.color = 'black';
}

//MOuse Over Function Question number 3
function questionNumber3() {
  var tag = document.getElementsByTagName('p');
  tag[0].style.fontSize = '50px';
}
function questionNumber3Out() {
  var tag = document.getElementsByTagName('p');
  tag[0].style.fontSize = '15px';
}
