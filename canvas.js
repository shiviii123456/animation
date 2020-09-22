var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');
  c.lineWidth = 3;
  
  const ballradius = 20;
  let ball = {
    x:10,
    y: 150,
    radius: ballradius,
    speed: 4,
    dx: 4,
    dy: -4,
}
//dra
//drawing ball
function creatingball(){
    c.beginPath();
    c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    c.fillStyle = yellow;
    c.fill();
    c.stroke();
    
    }
 }
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height)  {
        ball.dy = -ball.dy;
        c.fillStyle = getRandomColor();
        c.fill();     
    
  }


setInterval(creatingball,1000); 
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 function animate(){
     c.clearRect(0, 0, canvas.width, canvas.height);
     creatingball();
         //using request animation frame to create a loop.when we call this animate function it is going to create loop for us.
         requestAnimationFrame(animate);
 }animate();
   