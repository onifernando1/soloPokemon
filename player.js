import {
  WalkingDown,
  WalkingUp,
  WalkingLeft,
  WalkingRight,
} from "./playerStates.js";

import { Pokemon } from "./pokemon.js";

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
    this.states = [
      new WalkingDown(this.game),
      new WalkingUp(this.game),
      new WalkingLeft(this.game),
      new WalkingRight(this.game),
    ];
    this.currentState = this.states[0];
    this.animate = false;
    this.pikachu = new Pokemon(this, 50, 46, 111, "pikachu");
    this.pokemon = [this.pikachu];
    this.currentPokemon = this.pokemon[0];
  }

  update(deltaTime, keys) {
    //sprite animation

    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) {
        this.frameX = 0;
      } else {
        if (this.animate) {
          this.frameX++;
        }
      }
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }

    //input
    if (keys.length == 1) {
      this.currentState.handleInput(keys);
    }
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
