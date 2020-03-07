var canvas
dx = 0
enx = 0
gpy = 0
dy = 0
let moovf = false
let moovb = false
function setup() {
  
canvas =  createCanvas(400, 400);
  //canvas.position(00,40)
 
  
  gun = loadImage('1578401526169.png')
enemy = loadImage('enemy.png')
noCursor()
 button = createButton('shoot');
  button.position(0,410);
  button.size(50,30)
  button.mousePressed(shoot);
}
let i = 0;
let j = 0;
let ix = 1;
let jy = 2;
//function mousePressed(){
//dx = dx+1
//  dy = dy+1
function shoot()
{

  //image(enemy,i-100-enx,j ,50+dx,100+dy)
  e1= i - 100+enx
  e2 = j
  e3 = e1 + 50+dx + gpy
  e4 = e2 + 50 +dy + gpy
if (e1<200 && e3>200 &&e2<200 && e4>200)
{ 
  gpy = random (1,100)
  enx = random(50,gpy*5)
}
  

}
//}


