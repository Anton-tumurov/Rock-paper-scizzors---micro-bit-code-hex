input.onButtonPressed(Button.A, function () {
    basic.showString("person won")
    person_wins += 1
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Draw!")
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Computer won")
    Computer_wins += 1
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
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
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let hand = 0
let Computer_wins = 0
let person_wins = 0
person_wins = 0
Computer_wins = 0
hand = 0
basic.forever(function () {

})
