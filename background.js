export class Background {
  constructor(game, offsetX, offsetY) {
    this.game = game;
    this.canvas1 = this.game.canvas1;
    this.image = mainMap;
    this.image.style.transform = "scale(4)";
    this.image.style.imageRendering = "pixelated";
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    // this.x = this.offsetX;
    // this.y = this.offsetY;
    this.x = 0;
    this.y = 0;
  }

  update(keys) {
    this.game.player.animate = false;
    if (keys.length == 1) {
      if (keys.includes("ArrowUp")) {
        //vertical movement
        this.y += 10;
        this.game.player.animate = true;
        this.game.collisions.boundaries.forEach((collision) => {
          collision.y += 10;
        });
      } else if (keys.includes("ArrowDown")) {
        this.y -= 10;
        this.game.player.animate = true;
        this.game.collisions.boundaries.forEach((collision) => {
          collision.y -= 10;
        });
      }

      //horizontal movement
      if (keys.includes("ArrowLeft")) {
        this.x += 10;
        this.game.player.animate = true;
        this.game.collisions.boundaries.forEach((collision) => {
          collision.x += 10;
        });
      } else if (keys.includes("ArrowRight")) {
        this.x -= 10;
        this.game.player.animate = true;
        this.game.collisions.boundaries.forEach((collision) => {
          collision.x -= 10;
        });
      }
    }
  }

  draw(c) {
    c.drawImage(
      this.image,
      this.x - this.offsetX,
      this.y - this.offsetY,
      this.image.width * 4,
      this.image.height * 4
    );
  }
}
