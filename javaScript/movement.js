// Universal speed of ship
var speedVelocity = 7;

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    Space: {
        pressed: false
    }
}

addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'a':
            console.log('left')
            keys.a.pressed = true
            break
        case 'd':
            console.log('right')
            keys.d.pressed = true
            break
        case 'ArrowLeft':
            console.log('ArrorLeft')
            keys.ArrowLeft.pressed = true
            break
        case 'ArrowRight':
            console.log('ArrorRight')
            keys.ArrowRight.pressed = true
            break
        case ' ':
            // console.log('Space')
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width / 2,
                        y: player.position.y
                    },
                    velocity: {
                        x: 0,
                        y: -10
                    }
                  })
                )
            console.log(projectiles)
            break
    }
})
addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'a':
            // console.log('left')
            keys.a.pressed = false
            break
        case 'd':
            // console.log('right')
            keys.d.pressed = false
            break
        case 'ArrowLeft':
            // console.log('ArrorLeft')
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowRight':
            // console.log('ArrorRight')
            keys.ArrowRight.pressed = false
            break
        case ' ':
        // console.log('Space')
        break
    }
})
