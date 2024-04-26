
import React, { Component } from 'react'


const FRefInput = React.forwardRef( (props, ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
} )


export class ForwardRefs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRefInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Forward Ref</button>
      </div>
    )
  }
}

