import { Background } from "./background.js";
import { Pokemon } from "./pokemon.js";
import { Player } from "./player.js";
import { inputHandler } from "./inputHandler.js";

export default class Game {
  constructor() {
    this.canvas1 = document.getElementById("canvas1");
    this.c = this.canvas1.getContext("2d");
    this.width = 1024;
    this.height = 576;
    this.map1 = new Background(this);
    this.pikachu = new Pokemon(this, 50, 46, 111);
    this.player = new Player(this);
    this.lastTime = 0;
    this.deltaTime = 0;
    this.inputHandler = new inputHandler(this);
  }

  animate = (timeStamp) => {
    this.deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    this.c.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
    this.map1.update(this.inputHandler.keys);
    this.map1.draw(this.c);
    // pikachu.update(deltaTime);
    // pikachu.draw(c);
    this.player.update(this.deltaTime, this.inputHandler.keys);
    this.player.draw(this.c);
    requestAnimationFrame(this.animate);
  };
}
