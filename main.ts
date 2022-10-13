input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
function game_over () {
    if (aaaaaaa.isTouching(vv)) {
        vv.delete()
        game.addScore(1)
    }
    if (aaaaaaa.isTouching(vv2)) {
        vv2.delete()
        game.addScore(1)
    }
    if (aaaaaaa.isTouching(vv3)) {
        game.addScore(1)
        aaaaaaa.delete()
        vv3.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        music.playMelody("C5 - A - F - D - ", 170)
        basic.showString("Congratulations!")
        game.gameOver()
    }
}
let vv3: game.LedSprite = null
let vv2: game.LedSprite = null
let vv: game.LedSprite = null
let aaaaaaa: game.LedSprite = null
aaaaaaa = game.createSprite(0, 2)
vv = game.createSprite(randint(1, 2), randint(0, 4))
vv2 = game.createSprite(randint(2, 3), randint(0, 4))
vv3 = game.createSprite(randint(4, 4), randint(0, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        aaaaaaa.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        game_over()
    }
    while (input.logoIsPressed()) {
        aaaaaaa.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        game_over()
    }
    while (input.buttonIsPressed(Button.A)) {
        aaaaaaa.move(-1)
        basic.pause(100)
        game_over()
    }
    while (input.buttonIsPressed(Button.B)) {
        aaaaaaa.move(1)
        basic.pause(100)
        game_over()
    }
})
loops.everyInterval(3000, function () {
    vv.set(LedSpriteProperty.X, randint(0, 2))
    vv.set(LedSpriteProperty.Y, randint(0, 4))
    vv2.set(LedSpriteProperty.X, randint(1, 3))
    vv2.set(LedSpriteProperty.Y, randint(1, 4))
    vv3.set(LedSpriteProperty.X, randint(3, 4))
    vv3.set(LedSpriteProperty.Y, randint(0, 4))
})
