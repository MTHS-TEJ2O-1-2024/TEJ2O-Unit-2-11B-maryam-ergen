/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Oct 2024
 * This program compares numbers
*/
let numberOne: number
let numberTwo: number

numberOne = randint(0, 99)
numberTwo = randint(0, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showString("#1:" + (numberOne).toString())
    basic.pause(1000)

})

input.onButtonPressed(Button.B, function () {
    basic.showString("#2:" + (numberTwo).toString())
    basic.pause(1000)

})

//whn microbit is shaken 
input.onGesture(Gesture.Shake, function () {
    if (numberOne < numberTwo) {
        basic.clearScreen()
        basic.showString((numberOne).toString() + "<" + (numberTwo).toString())
        basic.pause(1000)
    }
    else {
        basic.clearScreen()
        basic.showString((numberOne).toString() + ">" + (numberTwo).toString())
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Sad)
})