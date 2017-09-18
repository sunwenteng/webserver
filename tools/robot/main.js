'use strict';

// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");
const fs = require('fs');
// Speed up the mouse.

// let twoPI = Math.PI * 2.0;
// let screenSize = robot.getScreenSize();
// let height = (screenSize.height / 2) - 10;
// let width = screenSize.width;
// let y = 0;
//
// for (let x = 0; x < width; x++)
// {
//     y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }

// let screenSize = robot.getScreenSize();
// let img = robot.screen.capture(0, 0, screenSize.width, screenSize.height);

// setInterval(()=>{
//     robot.moveMouse(100, 100);
//     robot.mouseClick('right');
// }, 3000);
//
// setInterval(()=>{
//     robot.moveMouse(900, 900);
//     robot.mouseClick('right');
// }, 1000);