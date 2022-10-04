import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'

function Grid() {
  const { store, actions } = useContext(Context)
  //Function to check if grid is boat to highlight them if Show Boats is pressed.
  const checkIfBoat = (position) => {
    if(store.playerGrid[position[0]][position[1]] === 2 && store.showBoats){
        return 'square show'
    }else{
        return 'square'
    }
  }  

  return (
    <div className='grid'>
        {/* Column Coordinates Section */}
        <div className='column-coordinates'>
            <div className='column-counter'>
                <p>1</p>
            </div>
            <div className='column-counter'>
                <p>2</p>
            </div>
            <div className='column-counter'>
                <p>3</p>
            </div>
            <div className='column-counter'>
                <p>4</p>
            </div>
            <div className='column-counter'>
                <p>5</p>
            </div>
            <div className='column-counter'>
                <p>6</p>
            </div>
            <div className='column-counter'>
                <p>7</p>
            </div>
            <div className='column-counter'>
                <p>8</p>
            </div>
            <div className='column-counter'>
                <p>9</p>
            </div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>1</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[0,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>2</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[1,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>3</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[2,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>4</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[3,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>5</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[4,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>6</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[5,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>7</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[6,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>8</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[7,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>9</p></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,0])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,1])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,2])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,3])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,4])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,5])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,6])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,7])}></div>
            <div className='square' onClick={(e) => actions.handleClick(e,[8,8])}></div>
        </div>
        
    </div>
  )
}

export default Grid