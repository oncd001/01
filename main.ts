input.onButtonPressed(Button.A, function () {
    basic.showString("start")
    걸음수 = 0
    while (!(input.buttonIsPressed(Button.B))) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    걸음수 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(걸음수)
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
})
let 걸음수 = 0
basic.showString("Hi")
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Giraffe)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(100)
}
basic.forever(function () {
    if (10 < 걸음수) {
        basic.showIcon(IconNames.Heart)
    } else if (5 < 걸음수) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
