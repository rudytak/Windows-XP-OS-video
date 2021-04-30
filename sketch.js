var bg, icn, vid;

function preload() {
    bg = loadImage("background.png")
    icn = loadImage("icn.png")
    vid = createVideo("vid.mp4")

    vid.hide();
}

function setup() {
    var c = createCanvas(innerWidth - 5, innerHeight - 5);
    document.body.style.margin = "0px";
    document.body.style.overflow = "hidden";
    print(bg, icn, vid)
}

function draw() {
    image(bg, 0, 0, width, width / bg.width * bg.height)
    image(icn, 327 * width / bg.width, 600 * height / bg.height, 150 * width / bg.width, 150 * width / bg.width)
}