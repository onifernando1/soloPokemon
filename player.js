export class Player {
  constructor(game) {
    this.game = game;
    this.image = playerDown;
    this.width = this.image.width / 4;
    this.height = this.image.height;
    this.x = 10;
    this.y = 10;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 3;
    this.fps = 15;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  update() {}

  draw(c) {
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
