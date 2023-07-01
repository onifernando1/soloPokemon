import Game from "./game.js";
import { Background } from "./background.js";
import { Pokemon } from "./pokemon.js";
import { Player } from "./player.js";

window.addEventListener("load", () => {
  const canvas1 = document.getElementById("canvas1");
  canvas1.width = 1024;
  canvas1.height = 576;
  const c = canvas1.getContext("2d");

  const game = new Game(canvas1);
  game.animate(0);
});
