var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [
        BootScene,
        WorldScene
    ]
};

var game = new Phaser.Game(config);

preload: function ()
{

},
    
create: function ()
{
    
},

update: function ()
{

},
