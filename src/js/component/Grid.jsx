import React from 'react'
import Square from './Square.jsx'

function Grid() {
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
            <Square style={'square miss'} />
            <Square style={'square hit'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>2</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>3</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>4</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>5</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>6</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>7</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>8</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>9</p></div>
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
            <Square style={'square'} />
        </div>
        
    </div>
  )
}

export default Grid