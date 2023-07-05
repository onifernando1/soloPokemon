export class Attacks {
  constructor() {
    this.attacks = {
      tackle: { name: "Tackle", damage: 20, animation: this.tackleAnimation },
    };
  }

  tackleAnimation(attacker, recipient) {
    gsap.to(attacker, {
      y: attacker.y - 30,
      x: attacker.x + 10,
      repeat: 3,
      duration: 0.2,
      yoyo: true,
      onComplete() {
        gsap.to(recipient, {
          y: recipient.y - 15,
          yoyo: true,
          repeat: 1,
          duration: 0.2,
        });
        gsap.to(recipient, {
          opacity: 0.5,
          repeat: 1,
          duration: 0.3,
          yoyo: true,
          repeat: 3,
        });
      },
    });

    // gsap.to(recipient, { opacity: 0, duration: 0.3, yoyo: true, repeat: 3 });
    // console.log(attacker.x);
  }
}
