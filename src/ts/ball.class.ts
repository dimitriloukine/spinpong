class Ball {
  public x: number = 0;
  public y: number = 0;
  public radius: number = 10;
  public lineWidth: number = 2;
  public color: string = "red";
  constructor(x: number, y: number, radius: number ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  public draw = (ctx: any): void => {
    ctx.save();
    ctx.beginPath();
    // ctx.strokeStyle = this.color;
    ctx.fillStyle = "#FF0000";
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    ctx.arc(this.x , this.y, this.radius / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.restore();

  }
}
export default Ball;