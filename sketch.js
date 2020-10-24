//Create variables here
var dog, happydog, database,foodStock,readStock,food
var dogimg1,dogimg0
var foodS
var feedbutton, addfoodbutton
var fedTime, lastFed
var foodObj


function preload()
{
  //load images here
dogimg1 = loadImage ("images/dogImg.png");
dogimg0 = loadImage ("images/dogImg1.png");
}





function setup() {
  createCanvas(900,700);
  database = firebase.database();
  //foodStock = database.ref("food");
  //foodStock.on("value", readStock);
  dog = createSprite(400,250,50,70);
  dog.addImage(dogimg0);
  dog.scale = 0.3;

  
// make the food object
  foodObj = new Food();

   //make the html buttons
   feedbutton = createButton("feed the dog");
   feedbutton.position(700,120);
   
 
   addfoodbutton = createButton("Add Food");
   addfoodbutton.position(800,120)
   
  
  //call the function to read the value
  foodObj.getFoodStock();


}
  feedDog = () =>
{
    dog.addImage(dogimg0);
    food = food -1;
    foodObj.update(food)
    foodObj.updateFedTime();
    lastFed = hour();
    dog.addImage(dogimg1)

    
  }

  addFoods = () =>
  {
  food++;
  database.ref('/').update({
      food: food


  })
  }

 



function draw() {  
background(rgb(46,139,87));
feedbutton.mousePressed(feedDog)
addfoodbutton.mousePressed(addFoods);

/*fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});*/





  //console.log(lastFed)
  //console.log(foodS)

foodObj.display();


  drawSprites();
  textSize(20)
  text("Foodstock:" + food, 20,300)
  
  
} 




  /*function writeStock(x){
    if(x<=0){
      x = 0;
    }
    else{
      x = x-1;
    }
    console.log(x)
    

    
    database.ref("/").update({
      food:x
    });
  } */
  
  

 





