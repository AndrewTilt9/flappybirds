//Create our 'main' state that will contain the game
var mainState ={
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
        
        //Create an empty group
        this.pipes= game.add.group();
        
        //Thmer for pipes 
        this.timer = game.time.event.loop(1500,this.addrowOfPipes,this);
        
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
    
    //Add a pipe
    addOnePipe: function(x,y){
        //Create a pipe at the position x and y 
        var pipe = game.add.sprite(x, y, 'pipe');
        
        //Add pipe to group 
        this.pipes.add(pipe); 
        
        //Enable the physiscs on the pipe 
        game.physics.arcade.enable(pipe);
        
        //Add velocity to the pipe to make it move left 
        pipe.body.velocity.x = -200;
        
        //Automatically kill pipe when it is no longer visible
        pipe.checkworldBounds = true;
        pipe.outOfBoundsKill = true;
        
    },
    
    //Many pipes 
    addrowOfPipes: function() {
    //randomly pick a number between 1 and 5 
        //This will be the hole position in the pipe 
        var hole= Math.Floor(math.random() *5) + 1;
        
        //Add 6 pipes 
        for (var i= 0; i < 8 ; i++)
            if (i !=hole && i !=hole+1)
                this.addOnePipe(400, i * 60 +10);
        
    },
};

//Initailise Phaser, and create a 400px x 490x game
var game = new Phaser.Game(400, 490);

//Add the 'mainstate' and call it 'main'
game.state.add('main', mainState);

//Start the state to actually start the game 
game.state.start('main');

