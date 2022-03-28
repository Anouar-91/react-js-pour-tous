import React from 'react'
import ReactDOM from 'react-dom'

export default function MyComponent() {
  return ReactDOM.createPortal (
    <div>MyComponent</div>, document.getElementById('second-root')
  )
}
