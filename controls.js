function moveUp() {
    player.y -= 5;
}

function moveDown() {
    player.y += 2;
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 38: // up
            moveUp();
            break;

        case 40: // down
            moveDown();
            break;

        default: return;
    }
    e.preventDefault();
});
