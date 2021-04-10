canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
backgrond_img = "mars.jpg";
rover_img = "rover.png";

function add() {
    backgrond_img_tag = new Image();
    backgrond_img_tag.onload = uploadBackground;
    backgrond_img_tag.src = backgrond_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_img_tag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(backgrond_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", myKeydown)

function myKeydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == "38") {
        up();
        console.log("up arrow key");
    }

    if (keyPress == "40") {
        down();
        console.log("down arrow key");
    }

    if (keyPress == "37") {
        left();
        console.log("left arrow key");
    }

    if (keyPress == "39") {
        right();
        console.log("rite arrow key");
    }

}

function up() {

    if (rover_y >= 0) {
        rover_y -= 10;
        console.log(" rover x = " + rover_x + " rover y = " + rover_y);
        uploadBackground();
        uploadRover();

    }

}

function down() {

    if (rover_y <= 500) {
        rover_y += 10;
        console.log(" rover x = " + rover_x + " rover y = " + rover_y);
        uploadBackground();
        uploadRover();

    }

}

function left() {

    if (rover_x >= 0) {
        rover_x -= 10;
        console.log(" rover x = " + rover_x + " rover y = " + rover_y);
        uploadBackground();
        uploadRover();

    }

}

function right() {

    if (rover_x <= 500) {
        rover_x += 10;
        console.log(" rover x = " + rover_x + " rover y = " + rover_y);
        uploadBackground();
        uploadRover();

    }

}

