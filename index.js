import Game from "./game.js";
import { Background } from "./background.js";
import { Pokemon } from "./pokemon.js";

window.addEventListener("load", () => {
  const canvas1 = document.getElementById("canvas1");
  canvas1.width = 1024;
  canvas1.height = 576;
  const c = canvas1.getContext("2d");

  const game = new Game(canvas1);

  const map1 = new Background(game);

  const pikachu = new Pokemon(game);

  const draw = () => {
    // map1.draw(c);
    pikachu.draw(c);
  };

  let lastTime = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    c.clearRect(0, 0, canvas1.width, canvas1.height);
    pikachu.update(deltaTime);
    pikachu.draw(c);
    requestAnimationFrame(animate);
  };

  animate(0);
});
