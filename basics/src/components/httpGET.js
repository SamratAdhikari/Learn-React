import React, { Component } from 'react'
import axios from 'axios'

export class HttpGET extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: '',
      }
    }

    // executes only once in its lifetime and only at the first time the component is mounted
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error getting the data'})
        })
    }
    
  render() {

    const {posts, errorMsg} = this.state
    return (
      <div>
        List of posts
        {
            posts.length > 0 ?
            posts.slice(0, 10).map(post => <div key={post.id}>
                {post.title}
            </div>) :
            null
        }
        {
            errorMsg ? <div>{errorMsg}</div> : null
        }
      </div>
    )
  }
}
