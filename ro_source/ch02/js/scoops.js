//

var scoops = 10;
while (scoops >= 0) {
    if (scoops == 3) {
        console.log("Ice cream is running low!");
    }
    else if (scoops > 9) {
        console.log("Eat faster, the ice cream is going the melt!");
    }
    else if (scoops == 2) {
        console.log("Going once!");
    }
    else if (scoops == 1) {
        console.log("Goinge twice!");
    }
    else if (scoops == 0) {
        console.log("Gone!");
    }
    scoops = scoops - 1;
}
console.log("life without ice cream isn't the same");
