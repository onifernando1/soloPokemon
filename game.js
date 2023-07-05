import { Background } from "./background.js";
import { Pokemon } from "./pokemon.js";
import { Player } from "./player.js";
import { inputHandler } from "./inputHandler.js";
import { Boundary, Collisions } from "./collisions.js";
import { Battle } from "./battle.js";
import { BattleAnimation } from "./battleAnimation.js";
import { pokemonList } from "./pokemonList.js";

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
      this.groundBattle,
      this.moveables
    );
    this.pikachu = new Pokemon(this, 50, 46, 111, "pikachu");
    this.pikachu.setDetails(
      pokemonList.pikachu.back.image,
      pokemonList.pikachu.back.width,
      pokemonList.pikachu.back.height,
      pokemonList.pikachu.back.maxFrame
    );
    console.log(pokemonList.pikachu.back.width);
    this.player = new Player(this);
    this.lastTime = 0;
    this.deltaTime = 0;
    this.inputHandler = new inputHandler(this);
    this.fps = 3;
    this.frameInterval = 10000 / this.fps;
    this.frameTimer = 0;
    this.battleScene = false;
    this.battleAnimation = new BattleAnimation(this);
  }

  battleRandomiser(deltaTime) {
    this.battleScene = false;
    if (this.groundBattle.groundBattleZoneHit) {
      if (this.frameTimer > this.frameInterval) {
        console.log("battle");
        this.battleScene = true;
        this.frameTimer = 0;
      } else {
        this.frameTimer += deltaTime;
      }
    }
  }

  animate = (timeStamp) => {
    if (this.battleScene) return;
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
    this.battleRandomiser(this.deltaTime);

    if (this.battleScene) {
      // trigger battle

      gsap.to("#transitionScreen", {
        opacity: 1,
        repeat: 4,
        yoyo: true,
        duration: 0.4,
        onComplete: () => {
          gsap.to("#transitionScreen", {
            opacity: 1,
            duration: 0.4,
          });
          this.battleAnimation.animate(0);
        },
      });
    }

    requestAnimationFrame(this.animate);
  };
}
