import React, { Component } from 'react'


export function FuncClickEvent() {

    function clickHandler(){
        console.log('Button Clicked')
    }
    
    return (
        <div>
        <button onClick={clickHandler}>Func Click Event</button>
    </div>
    )
}


export class ClassClickEvent extends Component{
    constructor(props){
        super(props)

        this.state = {
            msg: 'Event Binding'
        }

        // this.clickHandler = this.clickHandler.bind(this) -- method3
    }

    // clickHandler(){
    //     this.setState({
    //         msg: 'Event Triggered'
    //     })
    // }

    method4 = () => {
        this.setState({
            msg: 'Event Triggered'
        }) 
    }

    render() {
      return (
        <div>
            <span>{this.state.msg}</span>
            <br></br>
            {/* <button onClick={this.clickHandler.bind(this)}>Class Click Event</button>  - method1*/} 
            {/* <button onClick={() => this.clickHandler()}>Class Click Event</button>  - method2  */}
            {/* <button onClick={this.clickHandler}>Class Click Event</button> -- method3 */}
            <button onClick={this.method4}>Class Click Event</button>

        </div>
      )
    }
}