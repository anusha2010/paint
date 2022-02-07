var mouse_event="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_X,last_Y;

var colour="red";
var width_of_the_line=4;

canvas.addEventListener("mousedown" , mymousedown);
function mymousedown(e){
    mouse_event="mousedown";
}

canvas.addEventListener("mousemove" , mymousemove);

function mymousemove(e){
  current_X =e.clientX-canvas.offsetLeft;
  current_Y=e.clientY-canvas.offsetTop;

if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_the_line;

    ctx.moveTo(last_X,last_Y);
    ctx.arc(current_X,current_Y,40,0,360);
  ctx.stroke();
}

last_X=current_X;
last_Y=current_Y;

}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){
 mouse_event="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}
