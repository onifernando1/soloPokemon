const states = {
  WALKING_DOWN: 0,
  WALKING_UP: 1,
  WALKING_LEFT: 2,
  WALKING_RIGHT: 3,
};

export class PlayerStates {
  constructor(state, game) {
    this.game = game;
    this.state = state;
  }
}

const walkingDownImage = new Image();
walkingDownImage.src = "../assets/playerDown.png";

const walkingUpImage = new Image();
walkingUpImage.src = "../assets/playerUp.png";

export class WalkingDown extends PlayerStates {
  constructor(game) {
    super("WALKING DOWN", game);
  }

  enter() {
    this.game.player.image = walkingDownImage;
  }

  handleInput(keys) {
    if (keys.includes("ArrowUp")) {
      this.game.player.setState(states.WALKING_UP);
    } else if (keys.includes("ArrowRight")) {
      this.game.player.setState(states.WALKING_RIGHT);
    } else if (keys.includes("ArrowLeft")) {
      this.game.player.setState(states.WALKING_LEFT);
    }
  }
}

export class WalkingUp extends PlayerStates {
  constructor(game) {
    super("WALKING UP", game);
  }

  enter() {
    this.game.player.image = playerUp;
  }

  handleInput(keys) {
    if (keys.includes("ArrowDown")) {
      this.game.player.setState(states.WALKING_DOWN);
    } else if (keys.includes("ArrowRight")) {
      this.game.player.setState(states.WALKING_RIGHT);
    } else if (keys.includes("ArrowLeft")) {
      this.game.player.setState(states.WALKING_LEFT);
    }
  }
}

export class WalkingLeft extends PlayerStates {
  constructor(game) {
    super("WALKING UP", game);
  }

  enter() {
    this.game.player.image = playerLeft;
  }

  handleInput(keys) {
    if (keys.includes("ArrowDown")) {
      this.game.player.setState(states.WALKING_DOWN);
    } else if (keys.includes("ArrowRight")) {
      this.game.player.setState(states.WALKING_RIGHT);
    } else if (keys.includes("ArrowUp")) {
      this.game.player.setState(states.WALKING_UP);
    }
  }
}

export class WalkingRight extends PlayerStates {
  constructor(game) {
    super("WALKING UP", game);
  }

  enter() {
    this.game.player.image = playerRight;
  }

  handleInput(keys) {
    if (keys.includes("ArrowDown")) {
      this.game.player.setState(states.WALKING_DOWN);
    } else if (keys.includes("ArrowUp")) {
      this.game.player.setState(states.WALKING_UP);
    } else if (keys.includes("ArrowLeft")) {
      this.game.player.setState(states.WALKING_LEFT);
    }
  }
}
