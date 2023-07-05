export class BattleAnimation {
  constructor(game) {
    this.game = game;
    this.c = this.game.c;
  }

  animate(timeStamp) {
    this.c.clearRect(0, 0, this.game.width, this.game.height);
    this.c.fillStyle = "red";
    this.c.fillRect(0, 0, 50, 50);
    requestAnimationFrame(animate);
  }
}
