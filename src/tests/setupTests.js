// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';




//winnable_scenarios with X 
let horizontal_win_1 = ["x", "x", "x", 0,0,0,0,0,0]
let horizontal_win_2 = [0,0,0,"x", "x", "x",0,0,0]
let horizontal_win_3 = [0,0,0,0,0,0,"x", "x", "x"]

let vertical_win_1 = ["x",0,0,"x",0,0,"x",0,0]
let vertical_win_2 = [0,"x",0,0,"x",0,0,"x",0]
let vertical_win_3 = [0,0,"x",0,0,"x",0,0,"x"]

let diagonal_win_1 = ["x",0,0,0,"x",0,0,0,"x"]
let diagonal_win_2 = [0,0,"x",0,"x",0,"x",0,0]



// TEST SCENARIO
//const nameSystem = require('../models/gridPositionNameSystem').nameSystem
//const valueSystem = require('../models/gridValueSystem').valueSystem
//const statusSystem = require('../models/gameStatusModel').gameStatus
//
//game = new TicTacToeController (usingNamingSystem=nameSystem, usingValueSystem=valueSystem, usingGameStatus=statusSystem)
//
//let status 
//
//
///*
//lock scenario 
//                o|o|x
//                x|x|o
//                o|x|x
//*/
//status= game.updateGrid(position=nameSystem.superiorLeft, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.superiorMid, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.midRight, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.bottomLeft, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.superiorRight, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.midLeft, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.center, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.bottomMid, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.bottomRight, value=valueSystem.o)
//
//console.log(status)
//console.log(game.getGrid())
//
//