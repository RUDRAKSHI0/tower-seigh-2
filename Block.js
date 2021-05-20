class Block{
  constructor(x, y, width, height) {
    var options = {
        restitution :0.4,
        friction :0.00,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("block.png");
    this.visibility=255
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<4){ 
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      push()
      this.visibility=this.visibility-5
      tint(255,this.visibility)
      //rect(this.body.position.x,this.body.position.y,30,40)
      image(this.image,this.body.position.x,this.body.position.y,30,40)
      pop()
    }
   // var pos= this.body.position;
   // rectMode(CENTER);
   // rect(pos.x,pos.y,this.width, this.height);
  }

}