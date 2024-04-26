import React from 'react'
import './style.css'


export function StyleSheets(props) {
    let className = props.primary ? 'primary' : 'fuck'
    // let className = 'primary'
    console.log(props.primary)
  return (
    //   <div className='primary'>
    <div className={`${className} bold`}>
      CSS stylesheets
    </div>
  )
}




const inline_style = {
    color: 'green',
    fontWeight: 'bold'
}


export function InLine() {
  return (
    <div style={inline_style}>
      Inline Styling CSS
    </div>
  )
}

