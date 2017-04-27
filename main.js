//Create our 'main' state that will contain the game
var mainStage ={
    preload: function() {
    //This function will be exexcuted at the beginning
        //That's where we load the images and sound
    },
    create: function() {
    //This function is called after the preload function 
        //Here we setup the game,display sprites, etc.
    },
    update: function() {
    //This function is callde 60 times per second 
        //It contains the games logic 
    },
};

//Initailise Phaser, and create a 400px x 490x game
var game = new Phaser.game(400, 490);

//Add the 'mainstate' and call it 'main'
game.state.add('main', mainState);

//Start the state to actually start the game 
game.state.start('main');