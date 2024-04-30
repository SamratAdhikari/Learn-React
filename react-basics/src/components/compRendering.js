import React, { Component } from 'react'

export class IfELseRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    if (this.state.isLoggedIn){
        return <>IfElse - Welcome User</>
    }else{
        return <>IfElse - Welcome Guest</>
    }
  }
}


//
export class ElementVariable extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: true
        }
      }

  render() {
    let message
    if (this.state.isLoggedIn){
        message = <>Variable - Welcome User</>
    }else{
        message = <>Variable - Welcome Guest</>
    }
    return (
      <div>{ message }</div>
    )
  }
}

// 
export class TernaryConditionalOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }


  render() {
    return (
      this.state.isLoggedIn ?
      <>TertConOp - Welcome User</> :
      <>TertConOp - Guest</>
    )
  }
}



export class ShortCktOperator extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

  render() {
    return this.state.isLoggedIn && <div>ShortCktOP - Welcome User</div>
  }
}




