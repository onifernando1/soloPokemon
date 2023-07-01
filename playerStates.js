export class PlayerStates {
  constructor(game) {
    this.game = game;
    this.states = {
      WALKING_DOWN: 0,
      WALKING_UP: 1,
      WALKING_LEFT: 2,
      WALKING_RIGHT: 3,
    };
  }
}
