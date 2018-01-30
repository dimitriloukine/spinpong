import '../scss/style.scss';
import Ball from './ball.class';
console.log('Init');
function greeter(personName) {
    return "Hello, " + personName;
}
var userName = "world";
var canvas;
var ctx;
window.onload = function () {
    var canvas = document.getElementById('spinpong');
    ctx = canvas.getContext("2d");
    main();
};
function main() {
    requestAnimationFrame(main);
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, 800, 600);
    var ball = new Ball(300, 300, 20);
}
document.getElementById("title").innerHTML = greeter(userName);
//# sourceMappingURL=index.js.map