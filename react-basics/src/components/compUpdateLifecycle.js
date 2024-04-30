import React, { Component } from 'react'

class CompUpdateLifecycleChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name: 'KillerBee'
    }
  }

  static getDerivedStateFromProps(props, state){
      console.log('Child 1. getDerivedStateFromProps')
      return null
  }

  shouldComponentUpdate(){
    console.log('Child 2. shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Child 4. getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('Child 5. componentDidUpdate')
  }

render() {
  console.log('Child  3. render')
  return (
      <div>
        Component Updating Lifecycle  Methods (Child) - console
      </div>
  )
}
}




export class CompUpdateLifecycleParent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       name: 'Samrat'
    }
  }

    static getDerivedStateFromProps(props, state){
        console.log('Parent 1. getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
      console.log('Parent 2. shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Parent 4. getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('Parent 5. componentDidUpdate')

    }



    changeState = () => {
      this.setState({
        name: 'MrYeti'
      })
    }
  render() {
    console.log('Parent  3. render')
    return (
        <div>
            <div>
                Component Updating Lifecycle  Methods (Parent) - console
            </div>
            <button onClick={this.changeState}>Change state</button>
            <CompUpdateLifecycleChild/>
        </div>
    )
  }
}

