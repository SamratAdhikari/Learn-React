import React, { Component } from 'react'




export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
  render() {

    if (this.state.hasError){
        return <h4>Error - Something went wrong</h4>
    }
    
    return this.props.children
  }
}

export function Hero({heroName}) {

    if (heroName === 'Joker'){
        throw new Error('Not a hero')
    }
  return (
    <div>
      Error boundary - {heroName}
    </div>
  )
}

