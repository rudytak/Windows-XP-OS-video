var bg, icn, vid, kick, snare;
var playVid = false;

function preload() {
    bg = loadImage("background.png")
    icn = loadImage("icn.png")
    vid = createVideo("vid.mp4")

    soundFormats('mp3', 'ogg');
    kick = loadSound('kick');
    snare = loadSound("snare");

    vid.hide();
}

function setup() {
    var c = createCanvas(innerWidth - 5, innerHeight - 5);
    document.body.style.margin = "0px";
    document.body.style.overflow = "hidden";
}

function draw() {
    var imW = width
    var imH = width / bg.width * bg.height
    image(bg, 0, 0, imW, imH)
    image(icn, 327 * imW / bg.width, 525 * imH / bg.height, 150 * width / bg.width, 150 * width / bg.width)

    if (playVid) {
        vid.elt.style.display = "";
        vid.size(imW, imH)
        vid.elt.style.position = "absolute"
        vid.play();
    }
}

function mousePressed() {
    var imW = width
    var imH = width / bg.width * bg.height

    var x = 327 * imW / bg.width
    var y = 525 * imH / bg.height
    var w = 150 * width / bg.width
    var h = 150 * width / bg.width
    var mx = mouseX
    var my = mouseY

    if (mx > x && mx < x + w && my > y && my < y + h) {
        playVid = true;
    } else if (playVid == true) {
        vid.stop()
        playVid = false;
        vid.elt.style.display = "none";
    }
}

function windowResized() {
    resizeCanvas(innerWidth - 5, innerHeight - 5);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snare.play()
    } else if (keyCode === RIGHT_ARROW) {
        kick.play();
    }
}