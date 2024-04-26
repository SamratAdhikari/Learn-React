import React, { Component } from 'react'

export class FormComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'React'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}\n ${this.state.comments}\n ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const {username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username: </label>
            <input type='text' 
            value={username}
            onChange={this.handleUsernameChange}/>
        </div>

        <div>
            <label>Comments: </label>
            <textarea value={comments} 
            onChange={this.handleCommentsChange}/>
        </div>

        <div>
            <label>Topic: </label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value='react' >React</option>
                <option value='django'>Django</option>
                <option value='laravel'>Laravel</option>
            </select>
        </div>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
