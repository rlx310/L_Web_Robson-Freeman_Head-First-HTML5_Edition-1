//

var songs = ["Don't stop Bitleaving, by Jourbee",
             "Material Geek, by Modonna",
             "Just Code, by Lady LaLa",
             "We're Not Going to Code IT, by Twisted System",
             "Code on Eileen, by Dexy's Midnight Webbers"];

function suggestSong() {
    var index = Math.floor(Math.random() * songs.length);
    return songs[index];
}

function searchForSong(word) {
    var song;
    for (var i = 0; i < songs.length; i++) {
        song = songs[i];
        if (songs[i].indexOf(word) >= 0) {
            return song;
        }
    }
    return "Song not found";
}

var song = suggestSong();
console.log(song);
var matchedSong = searchForSong("Just");
console.log(matchedSong);
