import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        Focus here - refs:  
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
