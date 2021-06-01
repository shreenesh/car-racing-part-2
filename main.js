canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
car1_w=100;
car1_h=40;
car1_img="https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x=10;
car1_y=10;

car2_w=100;
car2_h=40;
car2_img="https://i.postimg.cc/wM0VrHk6/car2.png";
car2_x=10;
car2_y=100;

bg_ing="https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
     bg=new Image();
    bg.onload=uploadbg;
    

    bg.src=bg_ing;

    car1=new Image();
    car1.onload=uploadcar1;
    car1.src=car1_img;

    car2=new Image();
    car2.onload=uploadcar2;
    car2.src=car2_img;
}
function uploadbg(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1,car1_x,car1_y,car1_w,car1_h);
}
function uploadcar2(){
    ctx.drawImage(car2,car2_x,car2_y,car2_w,car2_h);
}
window.addEventListener("keydown", my_keydown);

function my_keydown (e)
{
    keyPressed = e.keycode;
    console.log (keyPressed) ;
    if(keyPressed == '38')
    {
        car1_up();
        console.log ("up arrow key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log ("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log ("left arrow key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log ("right arrow key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log ("w arrow key");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log ("s arrow key");
    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log ("a arrow key");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log ("d arrow key");
    }
}
function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        uploadbg();
        uploadcar1();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log(car1_y);
        uploadbg();
        uploadcar1();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        uploadbg();
        uploadcar1();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        uploadbg();
        uploadcar1_();
    }
}