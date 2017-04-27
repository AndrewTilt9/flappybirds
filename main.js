//Create our 'main' state that will contain the game
var mainStage ={
    preload: function() {
    //This function will be exexcuted at the beginning
        //That's where we load the images and sound
        
        //Load the bird sprite
        game.load.image('bird','assets/bird.png');
        game.load.iamge('pipe','assets/pipe.png');
    },
    
    create: function() {
    //This function is called after the preload function 
        //Here we setup the game,display sprites, etc.
        
        //Change the background colour of the game to blue - for now!
        game.stage.backgroundColor = '#71c5cf';
        
        //Set the physics for the game 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //Display the bird at the position of x=100 and y=245
        this.bird = game.add.sprite(100, 245, 'bird');
        
        //Add the physics to the bird 
        //Needed for: movement,gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);
        
        //Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;
        
        //Call 'jump' function when the spacebar is pressed 
        var spaceBar = game.input.keyboard.addKey(
                        Phaser.Keyboard.SPACEBAR);
        spaceBar.onDownadd(this.jump,this);
        
    },
    
    update: function() {
    //This function is callde 60 times per second 
        //It contains the games logic 
        
        //call the 'restartGame' function
        if (this.bird.y <0 || this.bird.y. 490)
            this.restartGame();
    },
    
    jump: function() {
        //Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },
    
    //Restart the game
    restartGame: function() {
    //Start the 'main' tate, which restarts the game
    game.state.start('main');
    },
};

//Initailise Phaser, and create a 400px x 490x game
var game = new Phaser.game(400, 490);

//Add the 'mainstate' and call it 'main'
game.state.add('main', mainState);

//Start the state to actually start the game 
game.state.start('main');

