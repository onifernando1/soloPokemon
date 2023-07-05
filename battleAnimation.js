import { pokemonList } from "./pokemonList.js";
export class BattleAnimation {
  constructor(game) {
    this.game = game;
    this.c = this.game.c;
    this.playerPokemon = "";
    this.wildPokemon = "";
    this.playerPokemonInfo = "";
    this.deltaTime = 0;
    this.lastTime = 0;
  }

  findPokemon() {
    this.playerPokemonInfo = pokemonList[this.game.player.currentPokemon.name];
    this.playerPokemon = this.game.player.currentPokemon;
  }

  changePokemonImage() {
    this.playerPokemon.setDetails(
      this.playerPokemonInfo.back.image,
      this.playerPokemonInfo.back.width,
      this.playerPokemonInfo.back.height,
      this.playerPokemonInfo.back.maxFrame
    );
    this.playerPokemon.x = 300;
    this.playerPokemon.y = 320;
  }

  animate = (timeStamp) => {
    this.deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    document.getElementById("transitionScreen").style.opacity = "0";
    this.c.clearRect(0, 0, this.game.width, this.game.height);
    this.c.drawImage(battleScene, 0, 0, this.game.width, this.game.height);
    this.findPokemon();
    // this.c.drawImage(this.playerPokemonInfo.image, 0, 0);
    this.changePokemonImage();
    this.playerPokemon.update(this.deltaTime);
    this.playerPokemon.draw(this.c);
    requestAnimationFrame(this.animate);
  };
}
