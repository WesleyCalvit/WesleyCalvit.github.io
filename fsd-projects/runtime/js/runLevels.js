var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlades(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25
    obstacleImage.y = -25
    sawBladeHitZone.addChild(obstacleImage);
    }

  


    function createEnemy(x,y){
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -1;
    enemy.rotationalVelocity = 2;
    enemy.onPlayerCollision = function () {
    game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.shrink();
    }
  }

  function createReward(x,y){
    var reward = game.createGameItem("reward", 25);
    var blueSquare = draw.rect(50, 50, "blue");
    blueSquare.x = -25;
    blueSquare.y = -25;
    reward.addChild(blueSquare);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -2;
    reward.rotationalVelocity = 2;
    reward.onPlayerCollision = function () {
    game.changeIntegrity(20)
    game.increaseScore(100);
    reward.fadeOut();
    };
    reward.onProjectileCollision = function(){
      game.increaseScore(100);
      reward.fadeOut();
    }
  }

  function createMarker(x,y){
    var marker = game.createGameItem("marker", 25);
    var greenSquare = draw.rect(50, 50, "green");
    greenSquare.x = -25;
    greenSquare.y = -25;
    marker.addChild(greenSquare);
    marker.x = x;
    marker.y = y;
    marker.velocityX = -1;
    marker.rotationalVelocity = 1
    game.addGameItem(marker);
    marker.onProjectileCollision = function(){
      marker.fadeOut();
      startLevel();
    }
    marker.onPlayerCollision = function(){
      marker.fadeOut();
      startLevel();
    }
  }
 
    
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems

      for(i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];
        var firstX = element.x;
        var firstY = element.y;
        if(element.type === "sawblade"){
          createSawBlades(firstX, firstY);
        }
        if(element.type === "reward"){
          createReward(firstX, firstY);
        }
        if(element.type === "marker"){
          createMarker(firstX, firstY);
        }
        if(element.type === "enemy"){
          createEnemy(firstX, firstY);
        }
        
  
      }



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
}