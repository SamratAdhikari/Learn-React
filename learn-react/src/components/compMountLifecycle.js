import React, { Component } from 'react'

class CompMountLifecycleChild extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'KillerBee'
      }

      console.log('Child 1. constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Child 2. getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Child 4. componentDidMount')
    }

  render() {
    console.log('Child  3. render')
    return (
        <div>
            Component Mounting Lifecycle  Methods (Child) - console
        </div>
    )
  }
}




export class CompMountLifecycleParent extends Component {

    constructor(props) {
      super(props)
        console.clear()
      this.state = {
         name: 'Samrat'
      }

      console.log('Parent 1. constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Parent 2. getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Parent 4. componentDidMount')
    }

  render() {
    console.log('Parent  3. render')
    return (
        <div>
            <div>
                Component Mounting Lifecycle  Methods (Parent) - console
            </div>
            <CompMountLifecycleChild/>
        </div>
    )
  }
}

