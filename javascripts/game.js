(function() {
  var Game = window.Game = function(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.ctx.font = "40px Arial";

  }

  Game.prototype = {
    start: function(){
      //use Pipes method to draw background
      this.level = new Level(canvas);
      this.bird = new Bird((this.width/2 - 40), (this.height/2) - 40, 60, 30);
      this.level.drawBackground();
      this.play();
      this.canvas.addEventListener("mousedown", this.bird.flap.bind(this.bird));
    },
    drawGameOver: function(){
      this.ctx.beginPath();
      this.ctx.fillStyle = "black";
      this.ctx.rect(160, 200, 320, 80);
      this.ctx.fill();

      this.ctx.fillStyle = "yellow";
      this.ctx.fillText("GAME OVER", 200, 250)
    },
    drawScore: function(){
      this.ctx.strokeStyle="black";
      this.ctx.lineWidth = 2;
      this.ctx.fillStyle = "yellow";
      this.ctx.fillText("Score: " + this.level.score, 415, 40);
      this.ctx.strokeText("Score: " + this.level.score, 415, 40);
    },
    tick: function() {
      console.log(this.level.pipes);
      this.level.tick();
      this.bird.tick(this.ctx);
      this.level.checkScore(this.bird.getBounds());
      this.drawScore();

      var birdCoords = this.bird.getBounds();
      if (this.level.collidesWith(birdCoords)) {
        this.drawGameOver();
        clearInterval(this.gameInterval);
      }
    },
    play: function() {
      this.gameInterval = setInterval(this.tick.bind(this), (1000/60));
    }
  }
})();
