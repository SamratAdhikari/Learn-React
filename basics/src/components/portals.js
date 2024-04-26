import React from 'react'
import ReactDOM from 'react-dom'

export function PortalDemo() {
  return ReactDOM.createPortal(
    <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
      Portals
    </div>,
  document.getElementById('portal-root')
  )
}

