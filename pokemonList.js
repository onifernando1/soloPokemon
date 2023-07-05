const pikachuImage = document.getElementById("pikachu");
const backPikachuImage = document.getElementById("pikachuBack");

export const pokemonList = {
  pikachu: {
    front: {
      image: pikachuImage,
      height: 46,
      width: 50,
      maxFrame: 111,
    },
    back: {
      image: backPikachuImage,
      height: 47,
      width: 41,
      maxFrame: 112,
    },
  },
  bulbosaur: {
    front: { height: 37, width: 38, maxFrame: 98 },
    back: { height: 33, width: 38, maxFrame: 98 },
  },
  charmander: {
    front: { height: 42, width: 42, maxFrame: 106 },
    back: { height: 43, width: 44, maxFrame: 106 },
  },
};

export const pokemonNamesList = ["pikachu"];
