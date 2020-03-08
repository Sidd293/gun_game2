ly=400
sco = 0
var canvas
dx = 0
enx = 0
gpy = 0
dy = 0
let moovf = false
let moovb = false
function setup() {
  
canvas =  createCanvas(400, 400);
  canvas.position(250,40)
 
  
  gun = loadImage('1578401526169.png')
enemy = loadImage('enemy.png')
noCursor()
 button = createButton('shoot');
  button.position(400,420);
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
  sco = sco+1
  ly=400
  
}
  

}
//}


function keyPressed() {
  if ((key == 'w') || (key == 'W')) {
    moovf = true
  }
 if ((key == 's') || (key == 'S')) 
  {
    moovb = true
  }
}
function keyReleased() {
  if ((key == 'W') || (key == 'w')) {
    moovf = false
  }
if ((key == 'S') || (key == 's')) {
    moovb = false
  }
}

function mouseMoved()
{

}
function draw() {
  background(220);

  fill(299)

    if (mouseY>450 )
  {i = mouseX 
 j = mouseY -650
  } 
if (moovf == true) {

   dx = dx+1
 dy = dy+1

}
  if (moovb == true) {

   dx = dx-1
 dy = dy-1

}
  rect(i,j, 30+dx, 40+dy)
line(0, 0, i, j)
  line(0, 400, i, j + 40+dy)
 line(400, 400, i + 30+dx, j + 40+dy)
 line(400, 0, i + 30+dx, j)
  image(enemy,i-100+enx,j ,50+dx+gpy,100+dy+gpy)
image(gun,270,270,130,130)
ellipse(200,200,10)
  fill('null')
text(mouseX,10,10)
  text(mouseY,10,30)
fill(225,0,0)
  rect(0,385,ly,15)
  ly=ly-1*0.01.*sco
  fill(48)
 // if(ly<0) 
//    {
//    break;
//      }
text ('score-'+sco,340,40)

}


