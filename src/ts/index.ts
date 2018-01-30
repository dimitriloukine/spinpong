import '../scss/style.scss';

import Ball from './ball.class';


console.log('Init');

function greeter(personName: any) : string {
    return "Hello, " + personName;
}

let userName = "world";
let canvas : HTMLCanvasElement;
let ctx: any;

window.onload = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('spinpong');
  ctx = canvas.getContext("2d");
  main();
}

function main() : void{
  requestAnimationFrame(main);
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, 800, 600);

  const ball = new Ball(300, 300, 20);
  ball.draw(ctx);
}




document.getElementById("title").innerHTML = greeter(userName);