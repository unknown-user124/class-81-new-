canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1 ;
ctx.beginPath();    
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
color=document.getElementById("colorInput").value;
width_of_line=document.getElementById("widthInput").value;
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     console.log("Current position of x and y coordinates = ");
  console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
  circle(current_position_of_mouse_x,current_position_of_mouse_y);
}
function circle(current_position_of_mouse_x,current_position_of_mouse_y) {
    ctx.beginPath();    
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

function clearcanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}