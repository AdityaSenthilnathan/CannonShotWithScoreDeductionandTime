class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.img = loadImage('sprites/brick.png');
    this.visibility = 255;
    World.add(world, this.body);
  }
  
    //rect(pos.x, pos.y, this.width, this.height);
    /*display(){
    var pos =this.body.position;
    image(this.img, pos.x, pos.y, this.width, this.height);
    }*/
   display(){
      if (this.body.speed < 3){
        var pos = this.body.position;
        image(this.img, pos.x, pos.y, this.width, this.height);
  
      }
      else{
        if ( this.visibility > -105){  
        push();
        tint(255, this.visibility);
        image(this.img, this.body.position.x, this.body.position.y,this.width, this.height);
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        pop();
      }
      }
      this.score();
    }


    score(){
      if (this.visibility< 0 && this.visibility>-105){
        score++;


      }

    }
    };
