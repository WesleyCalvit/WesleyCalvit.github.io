$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      //toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(100, 650, 100, 10, "red");
      createPlatform(200, 550, 100, 10, "red");
      createPlatform(400, 500, 100, 10);
      createPlatform(100, 375, 100, 10, "red");
      createPlatform(400, 300, 100, 10, "red");
      
      


    // TODO 3 - Create Collectables
      createCollectable("diamond", 200, 170, 0, 0);
      createCollectable("database", 425, 450, 0, 0);
      createCollectable("coin", 750, 300, 0, 0)



    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 700);
    createCannon("bottom", 300, 725);
    createCannon("right", 750, 800);
    
    createPlatform(500, 200, 100, 10, "red");
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
