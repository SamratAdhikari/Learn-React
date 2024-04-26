import React, { Component } from 'react'

function ChildComp(props) {
    return (
      <div>
          <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
      </div>
    )
  }

export class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }


    render() {
        return (
            <div>
              <ChildComp greetHandler={this.greetParent}/>
            </div>
        )
    }
}
