function WinA () {
    basic.showString(" AWINS")
    PlayerA += 1
    Turn = true
    HandA = 0
    HandB = 0
}
function WinB () {
    basic.showString(" BWINS")
    PlayerB += 1
    Turn = true
    HandA = 0
    HandB = 0
}
function TIE () {
    basic.showString("TIE!")
    Turn = true
    HandA = 0
    HandB = 0
}
// Rock
input.onButtonPressed(Button.A, function () {
    if (Turn == true) {
        HandA = 1
        basic.showIcon(IconNames.Target)
        Turn = false
    } else if (Turn == false) {
        HandB = 1
        basic.showIcon(IconNames.Target)
    }
})
// Scissors
input.onButtonPressed(Button.AB, function () {
    if (Turn == true) {
        HandA = 3
        basic.showIcon(IconNames.Scissors)
        Turn = false
    } else if (Turn == false) {
        HandB = 3
        basic.showIcon(IconNames.Scissors)
    }
})
// paper
input.onButtonPressed(Button.B, function () {
    if (Turn == true) {
        HandA = 2
        basic.showIcon(IconNames.Square)
        Turn = false
    } else if (Turn == false) {
        HandB = 2
        basic.showIcon(IconNames.Square)
    }
})
// 1 X 3
// 2 X 1
// 3 X 2
function PlayGame () {
    if (HandA == HandB) {
        TIE()
    } else if (HandA == 1 && HandB == 3) {
        WinA()
    } else if (HandA == 3 && HandB == 1) {
        WinB()
    } else if (HandA == 2 && HandB == 1) {
        WinA()
    } else if (HandA == 1 && HandB == 2) {
        WinB()
    } else if (HandA == 3 && HandB == 2) {
        WinA()
    } else if (HandA == 3 && HandB == 2) {
        WinB()
    }
}
let PlayerB = 0
let PlayerA = 0
let Turn = false
let HandB = 0
let HandA = 0
HandA = 0
HandB = 0
Turn = true
basic.forever(function () {
    if (PlayerA == 3) {
        basic.showString("THE WINNER IS A")
        Turn = true
        HandB = 0
        HandA = 0
        PlayerB = 0
        PlayerA = 0
    } else if (PlayerB == 3) {
        basic.showString("THE WINNER IS B")
        Turn = true
        HandB = 0
        HandA = 0
        PlayerB = 0
        PlayerA = 0
    } else {
        if (HandA != 0) {
            if (HandB != 0) {
                PlayGame()
            } else if (Turn == false) {
                basic.showString("B")
            }
        } else {
            if (Turn == true) {
                basic.showString("A")
            } else if (Turn == false) {
                basic.showString("B")
            }
        }
    }
})
