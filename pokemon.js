export class Pokemon {
  constructor(game) {
    this.game = game;
    this.image = pikachu;
    this.width = 50;
    this.height = 46;
    this.x = 10;
    this.y = 10;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 111;
    this.fps = 15;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
  }

  update(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) {
        this.frameX = 0;
      } else {
        this.frameX++;
      }
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

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
