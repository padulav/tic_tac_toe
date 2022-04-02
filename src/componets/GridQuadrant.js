import React from "react";
import o from "../assets/o.png"
import x from "../assets/x.png"

import NameSystem   from '../models/gridPositionNameSystem'
import ValueSystem  from '../models/gridValueSystem'
import StatusSystem from '../models/gameStatusModel'

export default class GridQuadrant extends React.Component{

    imageConditionalRender(){   
        if (this.props.value === 0){
            return
        }
        if (this.props.value === 'x'){
            return <img  src={x} className="xo_image" alt="x"/>
        }
        
        if (this.props.value === 'o'){
            return <img  src={o} className="xo_image" alt="o"/>
        }
    }
 
    render(){
        return (<div className="gridQuadrant" onClick={this.props.onClick}>
                    {this.imageConditionalRender()}
                </div>)
    }


}