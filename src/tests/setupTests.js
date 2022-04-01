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
