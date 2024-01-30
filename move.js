function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

function arrowMovement(left, bottom, call) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'

    function characterMovement() {
        if (direction === "west") {
            x -= 1
        }
        else if (direction === "east") {
            x += 1
        }
        else if (direction === "north") {
            y += 1
        }
        else if (direction === "south") {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(characterMovement, 1)

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            direction = left
        }
        else if (event.key === 'ArrowRight') {
            direction = right
        }
        else if (event.key === 'ArrowUp') {
            direction = up
        }
        else if (event.key === 'ArrowDown') {
            direction = down
        }
        call(direction)
    })
    document.addEventListener('keyup', function(event) {
        direction = null
        call(direction)
    })
}

return {
    to: moveToCoordinates,
    withArrowKeys: arrowMovement
}