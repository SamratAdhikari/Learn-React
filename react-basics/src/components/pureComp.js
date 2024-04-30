import React, { PureComponent, Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log('Regular Component Render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}


class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Render')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}





export class ParentComponentClass extends PureComponent {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Samrat'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'Samrat'
      })
    }, 2000)
  }
  
  render() {
    console.log('Parent Component Render')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

