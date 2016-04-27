//

var walksLike = "duck";
var soundsLike = document.getElementById("soundsLike");

if (walksLike == "dog") {
    soundsLike.innerHTML = "Woof! Woof!";
}
else if (walksLike == "duck") {
    soundsLike.innerHTML = "Quack, Quack";
}
else {
    soundsLike.innerHTML = "Silence";
}
