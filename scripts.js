var canvas = document.getElementById("gameDisplay");
var ctx = canvas.getContext("2d");
var walls = [];

function loadGame() {
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function startGame() {
    var frameCount = 0;
    var interval = setInterval(function(){
        ctx.fillStyle = "black";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.y += 0.5;
        ctx.fillRect(player.x, player.y, 20, 20);
        $("#points").html("Points: " +frameCount);
        for (var i = 0; i < walls.length; i++){
            walls[i].x -= 2;
            if(walls[i].x < -100){
                walls.splice(i,1);
            }
            ctx.fillRect(walls[i].x, walls[i].y, 10, 100);
            ctx.fillRect(walls[i].x, (walls[i].y - canvas.height + 10), 10, 100);
            if((walls[i].x <= 20 && walls[i].x >= 1) && (walls[i].y <= (player.y+20) || (walls[i].y-40) >= player.y)){
                clearInterval(interval);
                gameOver();
            }
        }
        if ((frameCount % 40) == 0){
            var random = Math.floor((Math.random() * 100) + 40);
            walls.push(new obstacle(300, random));
        }
        frameCount++;
    }, 50);
}

function gameOver() {
    walls = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "Red";
    ctx.fillText("Game over",70,70);
}