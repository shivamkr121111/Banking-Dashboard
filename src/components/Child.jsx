import React from 'react'

const Child = (props) => {
  return (
    <div>
    <p>I am a child </p>
    <button onClick={() => props.setX("Parent.2")}>Click Me</button>
    </div>
  )
}

export default Child
