import Game from "./game.js";
import { Background } from "./background.js";

window.addEventListener("load", () => {
  const canvas1 = document.getElementById("canvas1");
  canvas1.width = 1024;
  canvas1.height = 576;
  const c = canvas1.getContext("2d");

  const game = new Game(canvas1);

  const map1 = new Background(game);

  const draw = () => {
    map1.draw(c);
  };

  draw();
});
