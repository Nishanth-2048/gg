var sticks, stick1, stick2, stick3, stick4;
var coins , barrier, car1, car2, cone;

var canvas;
var coin;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var track, stick1_img, stick2_img, stick3_img, stick4_img, track_img;


function preload(){
    track_img = loadImage("images/track.png");
    stick1_img = loadImage("images/stick.png");
    stick2_img = loadImage("images/stick2.png");
    stick3_img = loadImage("images/stick3.png");
    stick4_img = loadImage("images/stick4.png");
    coin = loadImage("images/coin.jpg");
  }
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}
function draw(){
 background('track_img');
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
//    clear();
    game.play();

  }
  if(gameState === 2){
    game.end();
  }
}
 
  