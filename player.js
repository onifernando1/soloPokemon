export class Player {
  constructor(game) {
    this.game = game;
    this.image = playerDown;
    this.width = this.image.width / 4;
    this.height = this.image.height;
    this.x = this.game.width / 2 - this.width / 2;
    this.y = this.game.height / 2 - this.height / 2;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 3;
    this.fps = 15;
    this.frameInterval = 2000 / this.fps;
    this.frameTimer = 0;
  }

  update(deltaTime) {
    // console.log(this.game.width);
    // console.log(this.x);
    // console.log(this.x);
    // if (this.frameTimer > this.frameInterval) {
    //   if (this.frameX >= this.maxFrame) {
    //     this.frameX = 0;
    //   } else {
    //     this.frameX++;
    //   }
    //   this.frameTimer = 0;
    // } else {
    //   this.frameTimer += deltaTime;
    // }
  }

  draw(c) {
    c.fillStyle = "black";
    c.strokeRect(this.x, this.y, this.width, this.height);
    c.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
