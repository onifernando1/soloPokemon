import { WalkingDown, WalkingUp } from "./playerStates.js";

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
    this.states = [new WalkingDown(this.game), new WalkingUp(this.game)];
    this.currentState = this.states[0];
  }

  update(deltaTime, keys) {
    //sprite animation
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

    //input
    this.currentState.handleInput(keys);
  }

  draw(c) {
    c.fillStyle = "black";
    // c.strokeRect(this.x, this.y, this.width, this.height);
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

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
