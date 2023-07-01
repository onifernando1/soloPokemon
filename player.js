export class Player {
  constructor(game) {
    this.game = game;
    this.image = playerDown;
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
  }
}
