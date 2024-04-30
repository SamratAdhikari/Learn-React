import React from "react"
import {UseStateHooks} from './components/useStateHooks'
import UseStatePrevState from "./components/UseStatePrevState"
import UseStateObjects from "./components/UseStateObjects"
import UseStateArray from "./components/UseStateArray"
function App() {
  return (
    <div className="App">

      {/* useState hook */}
      <UseStateHooks/>
    
      <hr/>
      {/* useState hook with prev state */}
      <UseStatePrevState/>

      <hr/>
      {/* useState hook with object */}
      <UseStateObjects/>

      <hr/>
      {/* useState hook with array */}
      <UseStateArray/>

      <hr/>
      {/* useEffect hook */}

      <hr/>
    </div>
  )
}

export default App
