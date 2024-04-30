import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    focusInput (){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}




export class RefsClass extends Component {
    constructor(props) {
      super(props)
    
      this.compRef = React.createRef()
    }

    clickHandler = () => {
        this.compRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        Ref Class
        <Input ref={this.compRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

