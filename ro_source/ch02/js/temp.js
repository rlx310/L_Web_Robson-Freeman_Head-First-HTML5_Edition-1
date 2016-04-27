//

function showTemps() {
    var tempByHour = [];
    tempByHour[0] = 59.2;
    tempByHour[1] = 60.1;
    tempByHour[2] = 63;
    tempByHour[3] = 65;
    tempByHour[4] = 62;
    
    for (var i = 0; i < tempByHour.length; i++) {
        var temp = tempByHour[i];
        var id = "temp" + i;
        var li = document.getElementById(id);
        
        if (i == 0) {
            li.innerHTML = "The temperature at noon was " + temp;
        }
        else {
            li.innerHTML = "The temperature at " + i + " was " + temp;
        }
    }
}
window.onload = showTemps;
