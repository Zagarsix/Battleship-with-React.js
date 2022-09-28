import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'
import Square from './Square.jsx'

function Grid() {
  const { store, actions } = useContext(Context)
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
            <Square onClick={(e) => {actions.handleClick(e,[0,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[0,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>2</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[1,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[1,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>3</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[2,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[2,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>4</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[3,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[3,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>5</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[4,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[4,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>6</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[5,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[5,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>7</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[6,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[6,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>8</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[7,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[7,8])}}/>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>9</p></div>
            <Square onClick={(e) => {actions.handleClick(e,[8,0])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,1])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,2])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,3])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,4])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,5])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,6])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,7])}}/>
            <Square onClick={(e) => {actions.handleClick(e,[8,8])}}/>
        </div>
        
    </div>
  )
}

export default Grid