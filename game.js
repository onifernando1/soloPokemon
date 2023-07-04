import { Background } from "./background.js";
import { Pokemon } from "./pokemon.js";
import { Player } from "./player.js";
import { inputHandler } from "./inputHandler.js";
import { Boundary, Collisions } from "./collisions.js";
import { Battle } from "./battle.js";

export default class Game {
  constructor() {
    this.canvas1 = document.getElementById("canvas1");
    this.c = this.canvas1.getContext("2d");
    this.width = 1024;
    this.height = 576;
    this.offsetX = 500;
    this.offsetY = 800;
    this.collisions = new Collisions(this, this.offsetX, this.offsetY);
    this.collisions.collisionsMapper();
    this.groundBattle = new Battle(this);
    this.groundBattle.collisionsMapper(
      this.groundBattle.groundBattleZones,
      this.groundBattle.collisionsMap,
      this.groundBattle.boundaries
    );
    this.moveables = [
      ...this.collisions.getCollisionArray(),
      ...this.groundBattle.getCollisionArray(),
    ];

    this.mainMap = new Background(
      this,
      this.offsetX,
      this.offsetY,
      this.collisions,
      this.moveables
    );
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
    this.mainMap.update(this.inputHandler.keys);
    this.mainMap.draw(this.c);
    // pikachu.update(deltaTime);
    // pikachu.draw(c);
    this.player.update(this.deltaTime, this.inputHandler.keys);
    this.player.draw(this.c);
    this.collisions.boundaries.forEach((boundary) => {
      boundary.draw(this.c);
    });
    this.groundBattle.boundaries.forEach((boundary) => {
      boundary.draw(this.c);
    });

    requestAnimationFrame(this.animate);
  };
}
