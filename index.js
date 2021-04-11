// style change using function
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#ff0050";

function CLICK(){
  const CC = title.style.color;
  if(CC === BASE_COLOR)
  {
    title.style.color = OTHER_COLOR;
  }
  else
  {
    title.style.color = BASE_COLOR;
  }
}
function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click",CLICK);
}
init();

// class change using function  
const CLICKED = "clicked";

function click(){
  const NowClick = title.className;
  if(NowClick !==CLICKED)
  {
    title.className = CLICKED;
  }
  else
  {
    title.className = "";
  }
}
window.addEventListener("click",click);
