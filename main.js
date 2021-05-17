canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.png";
car2_x = 10;
car2_y = 100;

backroung_image = "dowloadbgimg";


function add() {
    backroung_imagetag = new Image();
    backroung_imagetag.onload = uploadbakround;
    backroung_imagetag.src = backroung_image;

    car1_imagetag = new Image();
    car1_imagetag.onload = uploadcar1;
    car1_imagetag.src = car1_image;

    car2_imagetag = new Image();
    car2_imagetag.onload = uploadcar2;
    car2_imagetag.src = car2_image;



}

function uploadbakround() {
    ctx.drawImage(backroung_imagetag, 0, 0, canvas.width, canvas.car1_height);
}

function uploadcar1() {
    ctx.drawImage(car1_imagetag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imagetag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed)
     if(keyPressed == '38')
     {
         car1up();
         console.log("up arrow key");
     }
     if(keyPressed == '40')
     {
         car1down();
         console.log("down arrow key");
     }
     if(keyPressed == '37')
     {
         car1left();
         console.log("left arrow key");
     }
     if(keyPressed == '39')
     {
         car1right();
         console.log("rightarrow key");
     }
     if(keyPressed == '87')
     {
         car2up();
         console.log(" key w");
     }
     if(keyPressed == '67')
     {
         car2left();
         console.log(" key a");
     }
     if(keyPressed == '83')
     {
         car2back();
         console.log(" key s");
     }
     if(keyPressed == '6d')
     {
         car2right();
         console.log(" key d");
     }
}