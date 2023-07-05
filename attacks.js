export class Attacks {
  constructor() {
    this.attacks = {
      tackle: { name: "Tackle", damage: 20, animation: this.tackleAnimation },
    };
  }

  tackleAnimation(attacker, recipient) {
    console.log("hey");
  }
}
