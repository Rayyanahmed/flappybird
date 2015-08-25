(function(){
  PHYSICS = {
    GRAVITY: .5,
    FLAP_VEL: -8
  }
  var Bird = window.Bird = function(x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vel = 0;
    this.img = new Image();
    this.img.src = "./ptery.png";
  };

  Bird.prototype = {
    move: function(){
      this.vel += PHYSICS.GRAVITY;
      this.y += this.vel;
    },
    draw: function(ctx){
      // ctx.beginPath();
      // ctx.fillStyle = "yellow";
      // ctx.rect(this.x, this.y, this.width, this.height);
      // ctx.fill();
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    tick: function(ctx){
      this.move(ctx);
      this.draw(ctx);
    },
    flap: function() {
      this.vel = PHYSICS.FLAP_VEL;
    },
    getBounds: function() {
      var coordinates = {
        leftX: this.x,
        leftY: this.y,
        rightX: this.x + this.width,
        rightY: this.y + this.height
      }
      return coordinates;
    }
  }
})();
