export class Pokemon {
  constructor(game, width, height, maxFrame, name, image) {
    this.game = game;
    this.image = image;
    this.width = width;
    this.height = height;
    this.x = 10;
    this.y = 10;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = maxFrame;
    this.fps = 15;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.name = name;
    this.displayWidth = this.width * 2;
    this.displayHeight = this.height * 2;
  }

  setDetails(image, width, height, maxFrame) {
    (this.image = image), (this.width = width);
    (this.height = height), (this.maxFrame = maxFrame);
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
    console.log(`in draw ${this.image}`);
    c.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.displayWidth,
      this.displayHeight
    );
  }
}
