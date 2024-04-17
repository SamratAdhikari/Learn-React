import React, { Component } from "react";

export const PropsFunc = (props) => {
    return (

        <div>
            <span>Props Functional name: {props.name} aka {props.heroName}</span>
            {props.children}
        </div>
    )
}

export class PropsClass extends Component{
    render(){
        return (
            <div>
                <span>Props Class name: {this.props.name} aka {this.props.heroName}</span>
                {this.props.children}
            </div>
        )
    }
}