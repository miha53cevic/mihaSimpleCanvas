function init() {
    createCanvas(400, 400);
    clear('black');
    line(0, 0, WIDTH, HEIGHT);
    drawFillRect(0, 0, WIDTH / 2,  HEIGHT / 2);
}

window.onload = init;