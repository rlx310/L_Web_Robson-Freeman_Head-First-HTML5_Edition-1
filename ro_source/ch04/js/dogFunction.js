//

window.onload = init;

function init() {
    print(bark("Fido", 50));
    print(bark("Fikas", 5));
}

function print(s) {
    document.getElementById("output").innerHTML += s;
}

function bark(name, weight) {
    if (weight <= 10) {
        return name  + " says Yip!<br/>";
    }
    else {
        return name + " says Woof!<br/>";
    }
}

