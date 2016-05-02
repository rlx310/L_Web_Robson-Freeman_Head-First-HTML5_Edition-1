//

window.onload = function() {
    var canvas = document.getElementById("smiley");
    var context = canvas.getContext("2d");
    
    // face
    context.beginPath();
    context.arc(300, 300, 200, 0, degreesToRadians(360), true);
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();
    
    // left eye
    context.beginPath();
    context.arc(200, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();
    // right eye
    context.beginPath();
    context.arc(400, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();
    
    // nose
    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 350);
    context.stroke();

    // mouth
    context.beginPath();
    context.arc(300, 350, 75, degreesToRadians(20), degreesToRadians(160), false);
    context.stroke();
};

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}