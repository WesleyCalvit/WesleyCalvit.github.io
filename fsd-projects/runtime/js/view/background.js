var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        var post;
        var buildings = [];
        var buildings2 = [];
        var buildings3 = [];

        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            //var backgroundFill = draw.rect(canvasWidth,groundY,'orange');
            //background.addChild(backgroundFill);
            var backgroundImage = draw.bitmap("https://static.vecteezy.com/system/resources/previews/004/478/338/non_2x/background-with-red-planet-and-mountains-with-water-dawn-in-space-the-sun-on-the-horizon-cartoon-illustration-vector.jpg");
            background.addChild(backgroundImage);
            var groundColor = draw.rect(canvasWidth, canvasHeight/2, "brown");
            background.addChild(groundColor);
            groundColor.y = groundY;
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("https://bitacolor.ro/wp-content/uploads/revslider/parallax_slider/sun.png");
            moon.x = 825;
            moon.y = -200;
            moon.scaleX = 1.5;
            moon.scaleY = 1.5;
            background.addChild(moon);
            
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

            for (var i = 0; i < 13; ++i) {
                var buildings3Height = Math.random() * 400
                var building3 = draw.rect(75, buildings3Height, "Brown", "Brown", 1);
                building3.y = groundY - buildings3Height;
                building3.x = 125 * i
                background.addChild(building3);
                buildings3.push(building3);
              }


            for (var i = 0; i < 13; ++i) {
                var buildingHeight = 150 + Math.random() * 100
                var building = draw.rect(75, buildingHeight, "DarkRed", "DarkRed", 1);
                building.x = 100 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
              for (var i = 0; i < 13; ++i) {
                var buildings2Height = Math.random() * 200
                var building2 = draw.rect(75, buildings2Height, "DarkOrange", "DarkOrange", 1);
                building2.x = 100 * i;
                building2.y = groundY - buildings2Height;
                background.addChild(building2);
                buildings2.push(building2);
              }

              

              
              
            
            // TODO 3: Part 1 - Add a tree
            post = draw.bitmap("https://spaces-cdn.clipsafari.com/und8yux76p5oc57hw0b2oy538hbr");
            post.x = 0;
            post.y = groundY/2 - 80 ;
            post.scaleX = 0.15
            post.scaleY = 0.125  
            background.addChild(post);
            
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            post.x = post.x - 3;
            if (post.x < -200) {
            post.x = canvasWidth;
}
            
            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i < buildings.length; i++) {
                buildings[i].x = buildings[i].x - 1
                var eachBuilding = buildings[i]
                
                if(eachBuilding.x < -100){
                    buildings[i].x = canvasWidth;
                }
    
              }

              for (var i = 0; i < buildings2.length; i++) {
                buildings2[i].x = buildings2[i].x - 2
                var eachBuilding2 = buildings2[i]
                
                if(eachBuilding2.x < -100){
                    buildings2[i].x = canvasWidth;
                }
    
              }

              for (var i = 0; i < buildings3.length; i++) {
                buildings3[i].x = buildings3[i].x - 0.5
                var eachBuilding3 = buildings3[i]
                
                if(eachBuilding3.x < -100){
                    buildings3[i].x = canvasWidth;
                }
    
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
