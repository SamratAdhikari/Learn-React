import React, { Component } from 'react'

const UserContext = React.createContext('default - Killer Bee')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
// Method 2
// export default UserContext





class ComponentC extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (userName) => {
                    return <div>Context - Hello {userName} from Component C</div>

                }
            }
        </UserConsumer>
    )
  }
}


class ComponentB extends Component{
    // static contextType = UserContext
    render(){
        return (
            <div>
                {/* Component E context {this.context} */}
                <ComponentC/>
            </div>
        )
    }
}


export class ComponentA extends Component {
  render() {
    return <ComponentB/>
  }
}
