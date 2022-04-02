import React from "react";
import Quadrant from './GridQuadrant'
import TicTacToeController from '../controllers/ticTacToeController'

import NameSystem   from '../models/gridPositionNameSystem'
import ValueSystem  from '../models/gridValueSystem'
import StatusSystem from '../models/gameStatusModel'


export default class TicTacToe extends React.Component{
    constructor(){
        super()
        this.state = {turn: ValueSystem.x, status: StatusSystem.OnGoing}
        this.game = new TicTacToeController(NameSystem, ValueSystem, StatusSystem)
        this.restartButton = this.restartButton.bind(this)
    }
    
    QuadrantClickHandler(name){
        let status = this.game.updateGrid(name, this.state.turn)
        this.setState({status: status})
        this.state.turn === ValueSystem.x ? this.setState({turn: ValueSystem.o}) : this.setState({turn: ValueSystem.x})
        //console.log(this.state.turn)
        return this.state.turn
    }

    displayMessage(){
        if(this.state.status === StatusSystem.onGoing){
            return}
        if(this.state.status === StatusSystem.matchLock){
            return "Nobody Wins!"}
        if(this.state.status === StatusSystem.matchWinO){
            return "Circle Wins!"}
        if(this.state.status === StatusSystem.matchWinX){
            return "Cross Wins!"}
    }

    restartButton(){
        window.location.reload(false)
    }

    render(){
        return (
            <div>

                <span className="title"> {this.displayMessage()} </span>

                <div className="gameTable">
                <div className="line">
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.superiorLeft)}  value={this.game.getValueByPositionName(NameSystem.superiorLeft)} />
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.superiorMid)}   value={this.game.getValueByPositionName(NameSystem.superiorMid)}/>
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.superiorRight)} value={this.game.getValueByPositionName(NameSystem.superiorRight)}/>
                </div>
                <div className="line">
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.midLeft)}  value={this.game.getValueByPositionName(NameSystem.midLeft)}  />
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.center)}   value={this.game.getValueByPositionName(NameSystem.center)}  />
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.midRight)} value={this.game.getValueByPositionName(NameSystem.midRight)}  />
                </div>
                <div className="line">
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.bottomLeft)}  value={this.game.getValueByPositionName(NameSystem.bottomLeft)}  />
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.bottomMid)}   value={this.game.getValueByPositionName(NameSystem.bottomMid)}   />
                    <Quadrant onClick={() => this.QuadrantClickHandler(NameSystem.bottomRight)} value={this.game.getValueByPositionName(NameSystem.bottomRight)} />
                </div>
                </div>

                <button onClick={this.restartButton} className="button">Start New Game</button>

                
            </div>
        )}
}