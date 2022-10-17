function setup() {
  createCanvas(100, 100);
  noFill();
  for(let i = 0; i<10 ; i++){
    let x = (i+1)*5;
    ellipse(50,50,x)
     if(i<5){
       stroke(0,0,255);}
     else{
       stroke(255,0,0)
     }
     }

}
