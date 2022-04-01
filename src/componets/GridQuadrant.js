import React from "react";
import o from "../assets/o.png"
import x from "../assets/x.png"

import NameSystem   from '../models/gridPositionNameSystem'
import ValueSystem  from '../models/gridValueSystem'
import StatusSystem from '../models/gameStatusModel'

export default class GridQuadrant extends React.Component{
    constructor(){
        super()
        this.state = {turn: 0}
    }


    imageConditionalRender(){   
        if (this.state.turn === 0){
            return
        }
        if (this.state.turn === 'x'){
            return <img  src={x} className="xo_image" alt="x"/>
        }
        
        if (this.state.turn === 'o'){
            return <img  src={o} className="xo_image" alt="o"/>
        }
    }

    clickHandler(){
        let currentValue = this.props.onClick()
        this.setState({turn: currentValue})

    }

    


    render(){
        return (<div className="gridQuadrant" onClick={() => this.clickHandler()}>
                    {this.imageConditionalRender()}
                </div>)
    }


}