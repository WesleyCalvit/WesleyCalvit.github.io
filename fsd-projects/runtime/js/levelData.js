var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 850, y: groundY },
          { type: "reward", x: 700, y: groundY - 130},
          { type: "marker", x: 1200, y: groundY - 50}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 1000, y: groundY - 115 },
          { type: "sawblade", x: 1100, y: groundY },
          { type: "enemy", x: 1200, y: groundY - 30},
          { type: "enemy", x: 1300, y: groundY - 40},
          { type: "sawblade", x: 1300, y: groundY},
          { type: "sawblade", x: 1400, y: groundY - 150 },
          { type: "marker", x: 1500, y: groundY - 50}
        ],
      },
    {
      name: "Enemy Ambush",
      number: 3,
      speed: -1,
      gameItems: [
        {type: "enemy", x: 500 , y: groundY - 50 },
        {type: "enemy", x: 600, y: groundY - 50},
        {type: "enemy", x: 900 , y: groundY - 50 },
        {type: "enemy", x: 1100 , y: groundY - 50},
       // {type: "reward", x: , y: },
        {type: "reward", x: 1100, y: groundY - 80 },
        {type: "sawblade", x: 800, y: groundY - 120 },
        {type: "sawblade", x: 1100, y: groundY },
        {type: "marker", x: 1200, y: groundY - 50}

      ],
    },
  ]
  
    window.opspark.levelData = levelData;
};

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
