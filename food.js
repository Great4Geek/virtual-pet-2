class Food{
    constructor() 
    {
        this.foodStock;
        this.lastFed;
        this.milk = loadImage("images/Milk.png");
    }

    getFoodStock(){
        var foodref = database.ref('food');
        foodref.on("value",function(data){
            food = data.val();
        })
    }

    update(foodamount){
        database.ref('/').update({
            food: foodamount 
        });
    }

   /* update(state){
        database.ref('/').update({
          gameState: state 
        });
      }*/


    getFedTime() {
        var fedTimeRef = database.ref('lastFed');
        fedTimeRef.on("value", (data)=>{
            lastFed = data.val();
        });
    }

    updateFedTime() {
        database.ref('/').update({
            lastFed: hour()
        });
    }

  
 

    display(){
        
        var x=80, y=100;
        var foodS;
        imageMode(CENTER);
        image(this.milk,720,220,70,70);

       
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
          text("last fed:" + lastFed%12 + "PM", 350,30)
         
          }else if (lastFed==0){
          }else{
            text("last fed:" + lastFed + "AM" ,350,30);
          }
        if(this.foodStock!=0){
         for(var i = 0; i<this.foodStock; i ++){
             if(i%10==0){
                 x=80;
                 y= y+50;
             }
             image(this.milk,x,y,50,50);
             x=x+30;
             
         }
       }
      
}

/*feedDog = () =>
{
    dog.addImage(dogimg0);
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
        Food:foodObj.getFoodStock(),
        feedTime:hour()
    })
        
    
  }

   


addFoods = () =>
{
foodS++;
database.ref('/').update({
    Food:foodS
})
}}*/}