//

var i;

// snippets 1
var count = 0;
for (i = 0; i < 5; i++) {
    count = count + i;
}
console.log("count is " + count);


// snippets 2
var tops = 5;
while (tops > 0) {
    for (var spins = 0; spins < 3; spins++) {
        console.log("Top is spinning!");
    }
    tops = tops - 1;
}


// snippets 3
for (var berries = 5; berries > 0; berries--) {
    console.log("Eating a berry");
}


// snippets 4
for (var scoops = 0; scoops < 10; scoops++) {
    console.log("There's more ice cream!");
}
console.log("life without ice cream isn't the same");