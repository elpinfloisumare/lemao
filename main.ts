function game_over () {
    if (aaaaaaa.isTouching(vv)) {
        aaaaaaa.delete()
        vv.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        music.playMelody("C5 - A - F - D - ", 170)
        game.gameOver()
        if (game.isGameOver()) {
            control.reset()
        }
    }
}
let vv: game.LedSprite = null
let aaaaaaa: game.LedSprite = null
aaaaaaa = game.createSprite(0, 2)
vv = game.createSprite(randint(1, 4), randint(0, 4))
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
