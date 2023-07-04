export class inputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key == "ArrowUp" ||
          e.key == "ArrowDown" ||
          e.key == "ArrowRight" ||
          e.key == "ArrowLeft") &&
        this.keys.indexOf(e.key) == -1
      ) {
        this.keys.push(e.key);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (
        e.key == "ArrowUp" ||
        e.key == "ArrowDown" ||
        e.key == "ArrowRight" ||
        e.key == "ArrowLeft"
      ) {
        this.keys.splice(e.key, 1);
      }
    });
  }
}
