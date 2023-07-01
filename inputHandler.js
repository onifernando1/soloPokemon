export class inputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp" && this.keys.indexOf("ArrowUp") == -1) {
        this.keys.push("ArrowUp");
      }
      console.log(this.keys);
    });
  }
}
