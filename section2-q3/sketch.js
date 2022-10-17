function setup() {
  createCanvas(200, 200);

fill(0,0,0);
ellipse(100,100,200);

for(let i = 0; i < 20; i++){
 if((i%2)==0){
  stroke(255,255,255);
  fill(0,255,0);
  arc(100,100,170,170,PI*i/10,(1+i)*PI/10,PIE);
 }else{
  stroke(255,255,255);
  fill(255,0,0);
  arc(100,100,170,170,PI*i/10,(1+i)*PI/10,PIE);
 }
}

for(let i = 0; i < 20; i++){
 if((i%2)==0){
  stroke(255,255,255);
  fill(247,208,169);
  arc(100,100,165,165,PI*i/10,(1+i)*PI/10,PIE);
 }else{
  stroke(255,255,255);
  fill(0,0,0);
  arc(100,100,165,165,PI*i/10,(1+i)*PI/10,PIE);
 }
}

for(let i = 0; i < 20; i++){
 if((i%2)==0){
  stroke(255,255,255);
  fill(0,255,0);
  arc(100,100,115,115,PI*i/10,(1+i)*PI/10,PIE);
 }else{
  stroke(255,255,255);
  fill(255,0,0);
  arc(100,100,115,115,PI*i/10,(1+i)*PI/10,PIE);
 }
}

for(let i = 0; i < 20; i++){
 if((i%2)==0){
  stroke(255,255,255);
  fill(247,208,169);
  arc(100,100,110,110,PI*i/10,(1+i)*PI/10,PIE);
 }else{
  stroke(255,255,255);
  fill(0,0,0);
  arc(100,100,110,110,PI*i/10,(1+i)*PI/10,PIE);
 }
}

fill(0,255,0);
ellipse(100,100,20);

fill(255,0,0);
ellipse(100,100,10);
}
