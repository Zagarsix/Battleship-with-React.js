import React, { useContext, useRef } from 'react'
import { Context } from '../store/appContext'


function BotGrid() {
  const { store, actions } = useContext(Context)
  const pickedNumbers = useRef([])

  //This function picks a random number from 1 to 81, if the number was already picked it runs again recursively.
  function GridPicker(){
    var randInt = Math.floor(Math.random() * 81) + 1 // Random Number between 1 to 81 
    if(!pickedNumbers.current.includes(randInt)){
      pickedNumbers.current.push(randInt)
      return "square"+randInt
    }else{
      if (pickedNumbers.current.length  !== 81){
        return GridPicker();
      }else{
        console.log('GAME END!!')
      }
    }
  }
  //Bot Random Grid Picking
  if(!store.isPlayerTurn){
    setTimeout(() => {
      document.getElementById(GridPicker()).click()
    },"750")
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
            <div id="square1" className='square' onClick={(e) => actions.handleBotClick(e,[0,0])}></div>
            <div id="square2" className='square' onClick={(e) => actions.handleBotClick(e,[0,1])}></div>
            <div id="square3" className='square' onClick={(e) => actions.handleBotClick(e,[0,2])}></div>
            <div id="square4" className='square' onClick={(e) => actions.handleBotClick(e,[0,3])}></div>
            <div id="square5" className='square' onClick={(e) => actions.handleBotClick(e,[0,4])}></div>
            <div id="square6" className='square' onClick={(e) => actions.handleBotClick(e,[0,5])}></div>
            <div id="square7" className='square' onClick={(e) => actions.handleBotClick(e,[0,6])}></div>
            <div id="square8" className='square' onClick={(e) => actions.handleBotClick(e,[0,7])}></div>
            <div id="square9" className='square' onClick={(e) => actions.handleBotClick(e,[0,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>2</p></div>
            <div id="square10" className='square' onClick={(e) => actions.handleBotClick(e,[1,0])}></div>
            <div id="square11" className='square' onClick={(e) => actions.handleBotClick(e,[1,1])}></div>
            <div id="square12" className='square' onClick={(e) => actions.handleBotClick(e,[1,2])}></div>
            <div id="square13" className='square' onClick={(e) => actions.handleBotClick(e,[1,3])}></div>
            <div id="square14" className='square' onClick={(e) => actions.handleBotClick(e,[1,4])}></div>
            <div id="square15" className='square' onClick={(e) => actions.handleBotClick(e,[1,5])}></div>
            <div id="square16" className='square' onClick={(e) => actions.handleBotClick(e,[1,6])}></div>
            <div id="square17" className='square' onClick={(e) => actions.handleBotClick(e,[1,7])}></div>
            <div id="square18" className='square' onClick={(e) => actions.handleBotClick(e,[1,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>3</p></div>
            <div id="square19" className='square' onClick={(e) => actions.handleBotClick(e,[2,0])}></div>
            <div id="square20" className='square' onClick={(e) => actions.handleBotClick(e,[2,1])}></div>
            <div id="square21" className='square' onClick={(e) => actions.handleBotClick(e,[2,2])}></div>
            <div id="square22" className='square' onClick={(e) => actions.handleBotClick(e,[2,3])}></div>
            <div id="square23" className='square' onClick={(e) => actions.handleBotClick(e,[2,4])}></div>
            <div id="square24" className='square' onClick={(e) => actions.handleBotClick(e,[2,5])}></div>
            <div id="square25" className='square' onClick={(e) => actions.handleBotClick(e,[2,6])}></div>
            <div id="square26" className='square' onClick={(e) => actions.handleBotClick(e,[2,7])}></div>
            <div id="square27" className='square' onClick={(e) => actions.handleBotClick(e,[2,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>4</p></div>
            <div id="square28" className='square' onClick={(e) => actions.handleBotClick(e,[3,0])}></div>
            <div id="square29" className='square' onClick={(e) => actions.handleBotClick(e,[3,1])}></div>
            <div id="square30" className='square' onClick={(e) => actions.handleBotClick(e,[3,2])}></div>
            <div id="square31" className='square' onClick={(e) => actions.handleBotClick(e,[3,3])}></div>
            <div id="square32" className='square' onClick={(e) => actions.handleBotClick(e,[3,4])}></div>
            <div id="square33" className='square' onClick={(e) => actions.handleBotClick(e,[3,5])}></div>
            <div id="square34" className='square' onClick={(e) => actions.handleBotClick(e,[3,6])}></div>
            <div id="square35" className='square' onClick={(e) => actions.handleBotClick(e,[3,7])}></div>
            <div id="square36" className='square' onClick={(e) => actions.handleBotClick(e,[3,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>5</p></div>
            <div id="square37" className='square' onClick={(e) => actions.handleBotClick(e,[4,0])}></div>
            <div id="square38" className='square' onClick={(e) => actions.handleBotClick(e,[4,1])}></div>
            <div id="square39" className='square' onClick={(e) => actions.handleBotClick(e,[4,2])}></div>
            <div id="square40" className='square' onClick={(e) => actions.handleBotClick(e,[4,3])}></div>
            <div id="square41" className='square' onClick={(e) => actions.handleBotClick(e,[4,4])}></div>
            <div id="square42" className='square' onClick={(e) => actions.handleBotClick(e,[4,5])}></div>
            <div id="square43" className='square' onClick={(e) => actions.handleBotClick(e,[4,6])}></div>
            <div id="square44" className='square' onClick={(e) => actions.handleBotClick(e,[4,7])}></div>
            <div id="square45" className='square' onClick={(e) => actions.handleBotClick(e,[4,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>6</p></div>
            <div id="square46" className='square' onClick={(e) => actions.handleBotClick(e,[5,0])}></div>
            <div id="square47" className='square' onClick={(e) => actions.handleBotClick(e,[5,1])}></div>
            <div id="square48" className='square' onClick={(e) => actions.handleBotClick(e,[5,2])}></div>
            <div id="square49" className='square' onClick={(e) => actions.handleBotClick(e,[5,3])}></div>
            <div id="square50" className='square' onClick={(e) => actions.handleBotClick(e,[5,4])}></div>
            <div id="square51" className='square' onClick={(e) => actions.handleBotClick(e,[5,5])}></div>
            <div id="square52" className='square' onClick={(e) => actions.handleBotClick(e,[5,6])}></div>
            <div id="square53" className='square' onClick={(e) => actions.handleBotClick(e,[5,7])}></div>
            <div id="square54" className='square' onClick={(e) => actions.handleBotClick(e,[5,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>7</p></div>
            <div id="square55" className='square' onClick={(e) => actions.handleBotClick(e,[6,0])}></div>
            <div id="square56" className='square' onClick={(e) => actions.handleBotClick(e,[6,1])}></div>
            <div id="square57" className='square' onClick={(e) => actions.handleBotClick(e,[6,2])}></div>
            <div id="square58" className='square' onClick={(e) => actions.handleBotClick(e,[6,3])}></div>
            <div id="square59" className='square' onClick={(e) => actions.handleBotClick(e,[6,4])}></div>
            <div id="square60" className='square' onClick={(e) => actions.handleBotClick(e,[6,5])}></div>
            <div id="square61" className='square' onClick={(e) => actions.handleBotClick(e,[6,6])}></div>
            <div id="square62" className='square' onClick={(e) => actions.handleBotClick(e,[6,7])}></div>
            <div id="square63" className='square' onClick={(e) => actions.handleBotClick(e,[6,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>8</p></div>
            <div id="square64" className='square' onClick={(e) => actions.handleBotClick(e,[7,0])}></div>
            <div id="square65" className='square' onClick={(e) => actions.handleBotClick(e,[7,1])}></div>
            <div id="square66" className='square' onClick={(e) => actions.handleBotClick(e,[7,2])}></div>
            <div id="square67" className='square' onClick={(e) => actions.handleBotClick(e,[7,3])}></div>
            <div id="square68" className='square' onClick={(e) => actions.handleBotClick(e,[7,4])}></div>
            <div id="square69" className='square' onClick={(e) => actions.handleBotClick(e,[7,5])}></div>
            <div id="square70" className='square' onClick={(e) => actions.handleBotClick(e,[7,6])}></div>
            <div id="square71" className='square' onClick={(e) => actions.handleBotClick(e,[7,7])}></div>
            <div id="square72" className='square' onClick={(e) => actions.handleBotClick(e,[7,8])}></div>
        </div>
        <div className='grid-row'>
            <div className='row-counter'><p>9</p></div>
            <div id="square73" className='square' onClick={(e) => actions.handleBotClick(e,[8,0])}></div>
            <div id="square74" className='square' onClick={(e) => actions.handleBotClick(e,[8,1])}></div>
            <div id="square75" className='square' onClick={(e) => actions.handleBotClick(e,[8,2])}></div>
            <div id="square76" className='square' onClick={(e) => actions.handleBotClick(e,[8,3])}></div>
            <div id="square77" className='square' onClick={(e) => actions.handleBotClick(e,[8,4])}></div>
            <div id="square78" className='square' onClick={(e) => actions.handleBotClick(e,[8,5])}></div>
            <div id="square79" className='square' onClick={(e) => actions.handleBotClick(e,[8,6])}></div>
            <div id="square80" className='square' onClick={(e) => actions.handleBotClick(e,[8,7])}></div>
            <div id="square81" className='square' onClick={(e) => actions.handleBotClick(e,[8,8])}></div>
        </div>
    </div>
  )
}

export default BotGrid