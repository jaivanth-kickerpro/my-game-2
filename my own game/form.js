class form{
constructor(){
this.play=createButton("play Now")
this.worldtour=createButton("world Tour")
this.Trainingsession=createButton("Trainingsession")

}
display(){
this.play.position(displayWidth/2,displayHeight/2);
this.play.mousePressed(()=>{
   this.play.hide();
    gameState="choose"});

   if{ this.worldTour.position(displayWidth/2-200,displayHeight/2-500);
this.worldTour.mousePressed(()=>{
   this.worldTour.hide();
    gameState="choose"});
   }
   if(gameState="choose again"){ this.worldTour.position(500,500,10,15);
    this.Trainingsession.mousePressed(()=>{
       this.worldTour.hide();
        gameState="choose"});
       }


}

}