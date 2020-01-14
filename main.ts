let hand = 0
let score = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    hand = Math.randomRange(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (score > 0) {
        score += -1
        basic.showNumber(score)
    }
})
