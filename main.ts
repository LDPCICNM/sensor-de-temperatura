let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    if (input.isGesture(Gesture.Shake)) {
        basic.showNumber(temperatura)
    }
    if (input.buttonIsPressed(Button.AB)) {
        led.plotBarGraph(
        temperatura,
        50
        )
    }
})
