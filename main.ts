input.onButtonPressed(Button.A, function () {
    basic.showString("person won")
    person_wins += 1
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
    radio.sendValue("PW", control.deviceSerialNumber())
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Draw!")
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
    radio.sendValue("DW", control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Computer won")
    Computer_wins += 1
    basic.showNumber(person_wins)
    basic.showNumber(Computer_wins)
    radio.sendValue("CW", control.deviceSerialNumber())
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    for (let index = 0; index < hand + 1; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
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
    can_win = "YES"
})
radio.onReceivedValue(function (name, value) {
    if (true) {
        basic.showString("New player located,")
        basic.showString("Player ID:" + value)
        if (name == "CW") {
            basic.showString("Computer won")
        } else if (name == "PW") {
            basic.showString("Player won")
        } else if (name == "DW") {
            basic.showString("Drawer")
        } else {
        	
        }
    } else {
        basic.showString("New player located")
    }
})
let hand = 0
let Computer_wins = 0
let person_wins = 0
let can_win = ""
can_win = "NO"
person_wins = 0
Computer_wins = 0
hand = 0
basic.forever(function () {
	
})
