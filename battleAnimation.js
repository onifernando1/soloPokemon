import { pokemonList } from "./pokemonList.js";
import { pokemonNamesList } from "./pokemonList.js";
import { Pokemon } from "./pokemon.js";
import { Attacks } from "./attacks.js";
export class BattleAnimation {
  constructor(game) {
    this.game = game;
    this.c = this.game.c;
    this.playerPokemon = "";
    this.wildPokemon = "";
    this.wildPokemonInfo = "";
    this.playerPokemonInfo = "";
    this.deltaTime = 0;
    this.lastTime = 0;
    this.findPokemon();
    this.changePokemonImage();

    this.generateWildPokemon();
    this.attacks = new Attacks();
    this.assignButtons();
  }

  findPokemon() {
    this.playerPokemonInfo = pokemonList[this.game.player.currentPokemon.name];
    this.playerPokemon = this.game.player.currentPokemon;
  }

  generateWildPokemon() {
    let randomIndex = Math.floor(Math.random() * pokemonNamesList.length);
    let wildPokemonName = pokemonNamesList[randomIndex];
    this.wildPokemonInfo = pokemonList[wildPokemonName];
    let wildP = new Pokemon(
      this.game,
      this.wildPokemonInfo.front.width,
      this.wildPokemonInfo.front.height,
      this.wildPokemonInfo.front.maxFrame,
      wildPokemonName,
      this.wildPokemonInfo.front.image
    );
    this.wildPokemon = wildP;
    this.wildPokemon.x = 800;
    this.wildPokemon.y = 100;
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

  assignButtons() {
    const attack1 = document.getElementById("attack1");
    attack1.innerHTML = this.playerPokemonInfo.attacks[0].name;
    attack1.addEventListener("click", () => {
      this.playerPokemonInfo.attacks[0].animation(
        this.playerPokemon,
        this.wildPokemon
      );
    });
  }

  animate = (timeStamp) => {
    this.deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    document.getElementById("transitionScreen").style.opacity = "0";
    this.c.clearRect(0, 0, this.game.width, this.game.height);
    this.c.drawImage(battleScene, 0, 0, this.game.width, this.game.height);
    this.playerPokemon.update(this.deltaTime);
    this.playerPokemon.draw(this.c);
    this.wildPokemon.update(this.deltaTime);
    this.wildPokemon.draw(this.c);
    requestAnimationFrame(this.animate);
  };
}
