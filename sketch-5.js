for(x1=width/2, x2=0, x3=width/2; x2<=height/2; x1=x1-10,x3=x3+10,x2=x2+10){ 
line(x1,x2,x3, x2)
}

for(x=0,x1=width, x2=height/2; x2<height; x=x+10, x2=x2+10,x1=x1-10){
line(x,x2,x1, x2)
}
