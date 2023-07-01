export class Background {
  constructor(game) {
    this.game = game;
    this.canvas1 = this.game.canvas1;
    this.image = map1;
    this.image.style.transform = "scale(4)";
    this.image.style.imageRendering = "pixelated";
  }

  draw(c) {
    c.drawImage(
      map1,
      290,
      150,
      canvas1.width,
      canvas1.height,
      0,
      0,
      map1.width * 4,
      map1.height * 4
    );
  }
}
