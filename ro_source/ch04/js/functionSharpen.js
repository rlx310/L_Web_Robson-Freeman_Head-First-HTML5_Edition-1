//

function dogsAge(age) {
    return age * 7;
}

function rectangleArea(width, height) {
    return width * height;
}

function addUp(a) {
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total;
}

function getAvatar(points) {
    var avatar;
    if (points < 100) {
        avatar = "Mouse";
    }
    else if (points > 100 && points < 1000) {
        avatar = "Cat";
    }
    else {
        avatar = "Ape";
    }
    return avatar;
}

var myDogsAge = dogsAge(4);
var rectArea = rectangleArea(3, 4);
var theTotal = addUp([1, 5, 3, 9]);
var myAvatar = getAvatar(335);

window.onload = outputResults;
function outputResults() {
    var output = document.getElementById("output");
    output.innerHTML = "Dog's age: " + myDogsAge + "<br>rectArea: " + rectArea + "<br>theTotal: " + theTotal + "<br>myAvatar: " + myAvatar;
}