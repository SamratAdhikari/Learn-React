import React, { Component } from 'react'
import { ChildComp } from './methodsProps-ChildComp'

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
