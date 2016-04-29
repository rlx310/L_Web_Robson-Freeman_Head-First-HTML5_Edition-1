//

function Dog() {
    this.bark = function() {
        if (this.weight > 25) {
            console.log(this.name + " says Woof!");
        }
        else {
            console.log(this.name + " says Yip!");
        }
    }
}

var fido =  new Dog();
fido.name = "Fido";
fido.weight = 40;
fido.breed = "Mixed";
fido.loves = ["walks", "fetching balls"];

if (fido.weight > 25) {
    console.log("Woof");
}
else {
    console.log("Yip");
}

var breed = fido["breed"];
if (breed == "mixed") {
    console.log("Best in show");
}

fido.weight = 27;
fido.breed = "Chawalla/Great Dane mix";
fido.loves.push("chewing bones");

var prop;
for (prop in fido) {
    console.log("Fido has a " + prop + " property ");
    if (prop == "name") {
        console.log("This is " + fido[prop]);
    }
}

var likes = fido.loves;
var likesString = "Fido likes";
for (var i = 0; i < likes.length; i++) {
    likesString += " " + likes[i];
}
console.log(likesString);

fido.age = 5;
console.log(fido.age);
delete fido.age;
console.log(fido.age);

window.onload = function() {
    fido.bark();
};