canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var mouseEvent="";

var last_x;

var last_y;

color="Black";
width=10;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

    mouseEvent="mouseDown";
}

canvas.addEventListener("mousedleave",my_mouseleave);

function my_mouseleave(e){

    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){

    mouseEvent="mouseUp";
} 
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_x=e.clientX-canvas.offsetLeft;

    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

        ctx.beginPath();

        ctx.strokeStyle="color";

        ctx.linewidth=5;

        console.log("Current Position Of X And Y Coordinates=");

        console.log("X="+current_x+" Y="+current_y);
        
        ctx.arc(current_x,current_y,40,0,2*Math.PI);

        ctx.stroke();
    }
}