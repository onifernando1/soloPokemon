export class Background {
  constructor(game, offsetX, offsetY, collisions, moveables) {
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
    this.collisions = collisions;
    this.moveables = moveables;
  }

  update(keys) {
    this.game.player.animate = false;

    if (keys.length == 1) {
      if (keys.includes("ArrowUp")) {
        //vertical movement

        let futureBoundaries = this.collisions.boundaries.map((boundary) => ({
          ...boundary,
          y: boundary.y + 5,
        }));

        this.collisions.checkCollision(futureBoundaries);

        if (!this.collisions.boundaryHit) {
          this.y += 5;
          this.game.player.animate = true;
          this.moveables.forEach((collision) => {
            collision.y += 5;
          });
        }
      } else if (keys.includes("ArrowDown")) {
        let futureBoundaries = this.collisions.boundaries.map((boundary) => ({
          ...boundary,
          y: boundary.y - 5,
        }));
        this.collisions.checkCollision(futureBoundaries);

        if (!this.collisions.boundaryHit) {
          this.y -= 5;
          this.game.player.animate = true;
          this.moveables.forEach((collision) => {
            collision.y -= 5;
          });
        }
      }

      //horizontal movement
      if (keys.includes("ArrowLeft")) {
        let futureBoundaries = this.collisions.boundaries.map((boundary) => ({
          ...boundary,
          x: boundary.x + 5,
        }));
        this.collisions.checkCollision(futureBoundaries);
        if (!this.collisions.boundaryHit) {
          this.x += 5;
          this.game.player.animate = true;
          this.moveables.forEach((collision) => {
            collision.x += 5;
          });
        }
      } else if (keys.includes("ArrowRight")) {
        let futureBoundaries = this.collisions.boundaries.map((boundary) => ({
          ...boundary,
          x: boundary.x - 5,
        }));
        this.collisions.checkCollision(futureBoundaries);
        if (!this.collisions.boundaryHit) {
          this.x -= 5;
          this.game.player.animate = true;
          this.moveables.forEach((collision) => {
            collision.x -= 5;
          });
        }
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
