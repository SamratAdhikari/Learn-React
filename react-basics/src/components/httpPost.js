import axios from 'axios'
import React, { Component } from 'react'


export class HttpPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userID: '',
         title: '',
         body: ''
      }
    }

    handler = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    submit = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
  render() {
    const {userID, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submit}>
            <div>
                <input type='text' name='userID' value={userID} onChange={this.handler}/>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.handler}/>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.handler}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
