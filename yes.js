const canvas = document.getElementById('canvas');
 const c = canvas.getContext('2d');
 const ballradius = 20;
 let ball = {
   x:10,
   y: 50,
   radius: ballradius,
   dx: 3,
   dy: -3,
}
function draw(){
    c.clearRect(0,0,300,300);
    c.beginPath();
    c.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
    c.closePath();
    c.fill();
    if( ball.x<0 || ball.x>300){
        ball.dx=-ball.dx;
        c.fillStyle = getRandomColor();
    }
    if(ball.y<0 ||ball.y>300){
       ball.dy=-ball.dy;
        c.fillStyle = getRandomColor();
    }
       ball.x+= ball.dx;
      ball.y+= ball.dy;

}
setInterval(draw,10); 
function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}