
images = ['ball.jpg','ball2.jpg','ball3.jpg','ball4.jpg'];

random_number = Math.floor(Math.random() * 4);

var i = 0;
function add() { 
 
   if(i == 4)
     {
       i=0;
     }
   
    document.getElementById("ball1").src = images[i];
  i++;
 
}