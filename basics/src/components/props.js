import React, { Component } from "react";


// Destructuring States
export class PropsClass extends Component{
    render(){

        // const {state1, state2} = this.state

        return (
            <div>
                <span>Props Class name: {this.props.name} aka {this.props.heroName}</span>
                {this.props.children}
            </div>
        )
    }
}


// Destructuring Props
// export const PropsFunc = ({name, heroName}) => {  :: method 1
export const PropsFunc = (props) => {
        
    // method 2 :
    const {name, heroName} = props
    return (

        <div>
            <span>Props Functional name: {name} aka {heroName}</span>
            {props.children}
        </div>
    )
}