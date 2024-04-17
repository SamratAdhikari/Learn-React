import React, {Component} from "react";

export class State extends Component{

    constructor(){
        super();
        this.state = {
            msg: 'Naruto'
        }
        
    }


    changeMsg(){
        this.setState({
            msg: 'Sage mode Naruto'
        })
    }

    render(){
        return(
            <div>
                <span>State: {this.state.msg} aka {this.props.heroName}</span>
                <br></br>
                <button onClick={()=> this.changeMsg()}>Sage Mode</button>
            </div>
        )
    }
};




// Counter
export class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }


    increament(){
        this.setState(
            (prevState) => ({ 
                count: prevState.count + 1
            }),
            () => {console.log('This is a call back function')}) 
    }

    increamentByFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }



    render() {
        return (
        <div>
            <span>Count - {this.state.count}</span>
            <br></br>
            <button onClick={()=> this.increamentByFive()}>Increase Count</button>
        </div>
        )
    }
};