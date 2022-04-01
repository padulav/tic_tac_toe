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
        console.log(status)
        this.setState({status: status})
        this.state.turn === ValueSystem.x ? this.setState({turn: ValueSystem.o}) : this.setState({turn: ValueSystem.x})
        //console.log(this.state.turn)
        return this.state.turn
    }

    displayMessage(){
        if(this.state.status === StatusSystem.onGoing){
            return}
        if(this.state.status === StatusSystem.matchLock){
            return( <span className="title">Nobody Wins!</span> )}
        if(this.state.status === StatusSystem.matchWinO){
            return( <span className="title">Circle Wins!</span> )}
        if(this.state.status === StatusSystem.matchWinX){
            return( <span className="title">Cross Wins!</span> )}
    }

    restartButton(){
        window.location.reload(false)
    }

    render(){
        return (
            <div className="gameTable">

                <div className="modal" >
                    {this.displayMessage()}
                    
                <div/>
                
                <div className="line">
                    <Quadrant  value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.superiorLeft)} />
                    <Quadrant  value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.superiorMid)} />
                    <Quadrant  value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.superiorRight)} />
                </div>
                <div className="line">
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.midLeft)} />
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.center)} />
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.midRight)} />
                </div>
                <div className="line">
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.bottomLeft)} />
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.bottomMid)} />
                    <Quadrant value={this.state.turn} onClick={() => this.QuadrantClickHandler(NameSystem.bottomRight)} />
                </div>

                <button onClick={this.restartButton} className="button">Start New Game</button>

                </div>
            </div>
        )}
}