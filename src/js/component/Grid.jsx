import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'

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
            <div id='00' className='square' onClick={(e) => actions.handleClick(e,[0,0])}></div>
            <div id='01' className='square' onClick={(e) => actions.handleClick(e,[0,1])}></div>
            <div id='02' className='square' onClick={(e) => actions.handleClick(e,[0,2])}></div>
            <div id='03' className='square' onClick={(e) => actions.handleClick(e,[0,3])}></div>
            <div id='04' className='square' onClick={(e) => actions.handleClick(e,[0,4])}></div>
            <div id='05' className='square' onClick={(e) => actions.handleClick(e,[0,5])}></div>
            <div id='06' className='square' onClick={(e) => actions.handleClick(e,[0,6])}></div>
            <div id='07' className='square' onClick={(e) => actions.handleClick(e,[0,7])}></div>
            <div id='08' className='square' onClick={(e) => actions.handleClick(e,[0,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>2</p></div>
            <div id='10' className='square' onClick={(e) => actions.handleClick(e,[1,0])}></div>
            <div id='11' className='square' onClick={(e) => actions.handleClick(e,[1,1])}></div>
            <div id='12' className='square' onClick={(e) => actions.handleClick(e,[1,2])}></div>
            <div id='13' className='square' onClick={(e) => actions.handleClick(e,[1,3])}></div>
            <div id='14' className='square' onClick={(e) => actions.handleClick(e,[1,4])}></div>
            <div id='15' className='square' onClick={(e) => actions.handleClick(e,[1,5])}></div>
            <div id='16' className='square' onClick={(e) => actions.handleClick(e,[1,6])}></div>
            <div id='17' className='square' onClick={(e) => actions.handleClick(e,[1,7])}></div>
            <div id='18' className='square' onClick={(e) => actions.handleClick(e,[1,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>3</p></div>
            <div id='20' className='square' onClick={(e) => actions.handleClick(e,[2,0])}></div>
            <div id='21' className='square' onClick={(e) => actions.handleClick(e,[2,1])}></div>
            <div id='22' className='square' onClick={(e) => actions.handleClick(e,[2,2])}></div>
            <div id='23' className='square' onClick={(e) => actions.handleClick(e,[2,3])}></div>
            <div id='24' className='square' onClick={(e) => actions.handleClick(e,[2,4])}></div>
            <div id='25' className='square' onClick={(e) => actions.handleClick(e,[2,5])}></div>
            <div id='26' className='square' onClick={(e) => actions.handleClick(e,[2,6])}></div>
            <div id='27' className='square' onClick={(e) => actions.handleClick(e,[2,7])}></div>
            <div id='28' className='square' onClick={(e) => actions.handleClick(e,[2,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>4</p></div>
            <div id='30' className='square' onClick={(e) => actions.handleClick(e,[3,0])}></div>
            <div id='31' className='square' onClick={(e) => actions.handleClick(e,[3,1])}></div>
            <div id='32' className='square' onClick={(e) => actions.handleClick(e,[3,2])}></div>
            <div id='33' className='square' onClick={(e) => actions.handleClick(e,[3,3])}></div>
            <div id='34' className='square' onClick={(e) => actions.handleClick(e,[3,4])}></div>
            <div id='35' className='square' onClick={(e) => actions.handleClick(e,[3,5])}></div>
            <div id='36' className='square' onClick={(e) => actions.handleClick(e,[3,6])}></div>
            <div id='37' className='square' onClick={(e) => actions.handleClick(e,[3,7])}></div>
            <div id='38' className='square' onClick={(e) => actions.handleClick(e,[3,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>5</p></div>
            <div id='40' className='square' onClick={(e) => actions.handleClick(e,[4,0])}></div>
            <div id='41' className='square' onClick={(e) => actions.handleClick(e,[4,1])}></div>
            <div id='42' className='square' onClick={(e) => actions.handleClick(e,[4,2])}></div>
            <div id='43' className='square' onClick={(e) => actions.handleClick(e,[4,3])}></div>
            <div id='44' className='square' onClick={(e) => actions.handleClick(e,[4,4])}></div>
            <div id='45' className='square' onClick={(e) => actions.handleClick(e,[4,5])}></div>
            <div id='46' className='square' onClick={(e) => actions.handleClick(e,[4,6])}></div>
            <div id='47' className='square' onClick={(e) => actions.handleClick(e,[4,7])}></div>
            <div id='48' className='square' onClick={(e) => actions.handleClick(e,[4,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>6</p></div>
            <div id='50' className='square' onClick={(e) => actions.handleClick(e,[5,0])}></div>
            <div id='51' className='square' onClick={(e) => actions.handleClick(e,[5,1])}></div>
            <div id='52' className='square' onClick={(e) => actions.handleClick(e,[5,2])}></div>
            <div id='53' className='square' onClick={(e) => actions.handleClick(e,[5,3])}></div>
            <div id='54' className='square' onClick={(e) => actions.handleClick(e,[5,4])}></div>
            <div id='55' className='square' onClick={(e) => actions.handleClick(e,[5,5])}></div>
            <div id='56' className='square' onClick={(e) => actions.handleClick(e,[5,6])}></div>
            <div id='57' className='square' onClick={(e) => actions.handleClick(e,[5,7])}></div>
            <div id='58' className='square' onClick={(e) => actions.handleClick(e,[5,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>7</p></div>
            <div id='60' className='square' onClick={(e) => actions.handleClick(e,[6,0])}></div>
            <div id='61' className='square' onClick={(e) => actions.handleClick(e,[6,1])}></div>
            <div id='62' className='square' onClick={(e) => actions.handleClick(e,[6,2])}></div>
            <div id='63' className='square' onClick={(e) => actions.handleClick(e,[6,3])}></div>
            <div id='64' className='square' onClick={(e) => actions.handleClick(e,[6,4])}></div>
            <div id='65' className='square' onClick={(e) => actions.handleClick(e,[6,5])}></div>
            <div id='66' className='square' onClick={(e) => actions.handleClick(e,[6,6])}></div>
            <div id='67' className='square' onClick={(e) => actions.handleClick(e,[6,7])}></div>
            <div id='68' className='square' onClick={(e) => actions.handleClick(e,[6,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>8</p></div>
            <div id='70' className='square' onClick={(e) => actions.handleClick(e,[7,0])}></div>
            <div id='71' className='square' onClick={(e) => actions.handleClick(e,[7,1])}></div>
            <div id='72' className='square' onClick={(e) => actions.handleClick(e,[7,2])}></div>
            <div id='73' className='square' onClick={(e) => actions.handleClick(e,[7,3])}></div>
            <div id='74' className='square' onClick={(e) => actions.handleClick(e,[7,4])}></div>
            <div id='75' className='square' onClick={(e) => actions.handleClick(e,[7,5])}></div>
            <div id='76' className='square' onClick={(e) => actions.handleClick(e,[7,6])}></div>
            <div id='77' className='square' onClick={(e) => actions.handleClick(e,[7,7])}></div>
            <div id='78' className='square' onClick={(e) => actions.handleClick(e,[7,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>9</p></div>
            <div id='80' className='square' onClick={(e) => actions.handleClick(e,[8,0])}></div>
            <div id='81' className='square' onClick={(e) => actions.handleClick(e,[8,1])}></div>
            <div id='82' className='square' onClick={(e) => actions.handleClick(e,[8,2])}></div>
            <div id='83' className='square' onClick={(e) => actions.handleClick(e,[8,3])}></div>
            <div id='84' className='square' onClick={(e) => actions.handleClick(e,[8,4])}></div>
            <div id='85' className='square' onClick={(e) => actions.handleClick(e,[8,5])}></div>
            <div id='86' className='square' onClick={(e) => actions.handleClick(e,[8,6])}></div>
            <div id='87' className='square' onClick={(e) => actions.handleClick(e,[8,7])}></div>
            <div id='88' className='square' onClick={(e) => actions.handleClick(e,[8,8])}></div>
        </div>
    </div>
  )
}

export default Grid