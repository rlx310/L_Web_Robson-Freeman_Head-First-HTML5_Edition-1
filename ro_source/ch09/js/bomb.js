//

localStorage.setItem("fuse", "-");
while (true) {
    var fuse = localStorage.getItem("fuse");
    try {
        localStorage.setItem("fuse", fuse + fuse);
    }
    catch(e) {
        console.log("You're browser blew up at " + fuse.length + " with exception: " + e);
        break;
    }
}
localStorage.removeItem("fuse");