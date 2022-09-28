import React from 'react'

function Square({onClick}) {
  return (
    <div className='square' onClick={onClick}></div>
  )
}

export default Square