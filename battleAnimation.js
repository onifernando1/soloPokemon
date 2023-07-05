export class BattleAnimation {
  constructor(game) {
    this.game = game;
    this.c = this.game.c;
  }

  animate(timeStamp) {
    this.c.clearRect(0, 0, this.game.width, this.game.height);
    this.drawImage(battleScene, 0, 0, this.game.width, this.game.height);
    requestAnimationFrame(animate);
  }
}
