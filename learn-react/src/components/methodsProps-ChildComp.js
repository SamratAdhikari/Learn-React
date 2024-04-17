import React from 'react'

export function ChildComp(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}