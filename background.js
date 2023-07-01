export class Background {
  constructor(game) {
    this.game = game;
    this.canvas1 = this.game.canvas1;
    this.image = map1;
    this.image.style.transform = "scale(4)";
    this.image.style.imageRendering = "pixelated";
    this.x = 290;
    this.y = 150;
  }

  update(keys) {
    //vertical movement
    if (keys.includes("ArrowUp")) {
      this.y--;
    } else if (keys.includes("ArrowDown")) {
      this.y++;
    }

    //horizontal movement
    if (keys.includes("ArrowLeft")) {
      this.x--;
    } else if (keys.includes("ArrowRight")) {
      this.x++;
    }
  }

  draw(c) {
    c.drawImage(
      map1,
      this.x,
      this.y,
      canvas1.width,
      canvas1.height,
      0,
      0,
      map1.width * 4,
      map1.height * 4
    );
  }
}
