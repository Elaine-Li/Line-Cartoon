function setup() {
  createCanvas(640,480);
}

function draw() {
  fill(0);
  ellipse(200,320,270,80);//base
  ellipseMode(CENTER);
  fill(255);
  stroke(5);
  ellipse(200,257,220,200);//head
  ellipse(160,150,50,120);//lt ear
  ellipse(240,150,50,120);//rt ear
  noStroke();
  ellipse(160,200,49,119);//lt ear empty
  noStroke();
  ellipse(240,200,49,119);//rt ear empty
  fill('#fae');
  ellipse(161.2,167,35,100);
  ellipse(239.2,167,35,100);
  fill(255);
  rect(140,177,40,110);//lt pink
  rect(220,177,40,110);//rt pink
  fill(0);
  ellipse(171.2,235,15,15);//lt eye
  ellipse(229.2,235,15,15);//rt eye
  fill(242,35,35);
  arc(200,290, 48, 80, 0, PI);//mouth
  fill(242,120,120);
  arc(200,300, 45,67,0,PI);
  strokeWeight(2);
  stroke(5);
  fill(255);
  ellipse(200,258,17,17);//nose
  line(200,267,200,290);
  noStroke();
  fill(249,199,199);
  ellipse(160,255,35,10);//lt blush
  ellipse(240,255,35,10);//rt blush
  
  
  
}