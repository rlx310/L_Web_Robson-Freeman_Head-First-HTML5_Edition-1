//

twitterBlue = "rgb(0, 173, 239)";

window.onload = function() {
    var button = document.getElementById("previewButton");
    button.onclick = previewHandler;
    makeImage();
};

function previewHandler() {
    var canvas  = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");

    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    }
    else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }
    drawText(canvas, context);
    drawBird(canvas, context);
}

function fillBackgroundColor(canvas, context) {
    var selectedObj = document.getElementById("backgroundColor");
    var index = selectedObj.selectedIndex;

    context.fillStyle = selectedObj[index].value;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.fillStyle = twitterBlue;
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);

    context.fillStyle = twitterBlue;
    context.fill();
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function drawText(canvas, context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;

    context.fillStyle = selectObj[index].value;
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);

    // selectObj = document.getElementById("tweets");
    // index = selectObj.selectedIndex;
    // var tweet = selectObj[index].value;
    // context.font = "italic 1.2em serif";
    // context.fillText(tweet, 30, 100);

    context.font = "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("and all I got was this lousy t-shirt!", canvas.width - 20, canvas.height - 40);
}

function drawBird(canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "images/twitterBird.png";
    twitterBird.onload = function() {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}

function makeImage() {
    var canvas = document.getElementById("tshirtCanvas");
    canvas.onclick = function() {
        window.location = canvas.toDataURL("images/png");
    };
}

