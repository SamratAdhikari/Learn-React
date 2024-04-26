import React, { PureComponent } from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      Memo - {name}
    </div>
  )
}

export default React.memo(MemoComp)


export class ParentComponentFunc extends PureComponent {

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
          Memo is similar to Pure component but for functions
          <MemoComp name={this.state.name}/>
        </div>
      )
    }
  }

