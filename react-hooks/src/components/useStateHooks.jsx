import React, { Component, useState } from 'react'


class CounterWithoutUseState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
        this.setState(() => {
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
            Count: {this.state.count}
        </button>
      </div>
    )
  }
}



export function UseStateHooks() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1) }>Count: {count}</button>
    </div>
  )
}

