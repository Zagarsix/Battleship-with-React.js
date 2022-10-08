import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'

function PreGame() {
    const { store,actions } = useContext(Context)

    for(var row = 0 ; row < store.playerGrid.length ; row++){
        for(var column = 0 ; column < 9 ; column++){
            if(store.playerGrid[row][column] === 2){
                console.log("pregame"+String(row)+String(column))
                document.getElementById("pregame"+String(row)+String(column)).className= 'square placed'
            }
        }
    }

    return (
        <>
            <h1 className='text-center p-3'>Place your boats!</h1>
            {/* Dinamic Headline when placing boats */}
            {store.fiveGridBoat === 1 ? <h3 className='text-center p-2'>Put your 5-Grid Carrier! ({store.fiveGridBoat} left.)</h3> : null}
            {store.fourGridBoat >= 1 && store.fiveGridBoat === 0 ?  <h3 className='text-center p-2'>Put your 4-Grid Battleships! ({store.fourGridBoat} left.)</h3> : null }
            {store.threeGridBoat >= 1 && store.fiveGridBoat === 0 && store.fourGridBoat === 0 ?  <h3 className='text-center p-2'>Put your 3-Grid Cruiser! ({store.threeGridBoat} left.)</h3> : null }
            {store.twoGridBoat === 1 && store.fiveGridBoat === 0 && store.fourGridBoat === 0 && store.threeGridBoat === 0 ?  <h3 className='text-center p-2'>Put your 2-Grid Destroyer! ({store.twoGridBoat} left.)</h3> : null }
            {store.twoGridBoat === 0 && store.fiveGridBoat === 0 && store.fourGridBoat === 0 && store.threeGridBoat === 0 ?  <h3 className='text-center p-2'>Game's Ready! , Prepare!!!</h3> : null }
            {/* Checks for horizontal or vertical placement */}
            <div className='d-flex justify-content-center pb-4'>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                        onClick={() => {actions.handleDirectionHorizontal()}}
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                        Horizontal
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        defaultValue="option2"
                        onClick={() => {actions.handleDirectionVertical()}}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                        Vertical
                    </label>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
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
                        <div id='pregame00' className='square' onClick={(e) => actions.handleBoatPlacement([0, 0])}></div>
                        <div id='pregame01' className='square' onClick={(e) => actions.handleBoatPlacement([0, 1])}></div>
                        <div id='pregame02' className='square' onClick={(e) => actions.handleBoatPlacement([0, 2])}></div>
                        <div id='pregame03' className='square' onClick={(e) => actions.handleBoatPlacement([0, 3])}></div>
                        <div id='pregame04' className='square' onClick={(e) => actions.handleBoatPlacement([0, 4])}></div>
                        <div id='pregame05' className='square' onClick={(e) => actions.handleBoatPlacement([0, 5])}></div>
                        <div id='pregame06' className='square' onClick={(e) => actions.handleBoatPlacement([0, 6])}></div>
                        <div id='pregame07' className='square' onClick={(e) => actions.handleBoatPlacement([0, 7])}></div>
                        <div id='pregame08' className='square' onClick={(e) => actions.handleBoatPlacement([0, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>2</p></div>
                        <div id='pregame10' className='square' onClick={(e) => actions.handleBoatPlacement([1, 0])}></div>
                        <div id='pregame11' className='square' onClick={(e) => actions.handleBoatPlacement([1, 1])}></div>
                        <div id='pregame12' className='square' onClick={(e) => actions.handleBoatPlacement([1, 2])}></div>
                        <div id='pregame13' className='square' onClick={(e) => actions.handleBoatPlacement([1, 3])}></div>
                        <div id='pregame14' className='square' onClick={(e) => actions.handleBoatPlacement([1, 4])}></div>
                        <div id='pregame15' className='square' onClick={(e) => actions.handleBoatPlacement([1, 5])}></div>
                        <div id='pregame16' className='square' onClick={(e) => actions.handleBoatPlacement([1, 6])}></div>
                        <div id='pregame17' className='square' onClick={(e) => actions.handleBoatPlacement([1, 7])}></div>
                        <div id='pregame18' className='square' onClick={(e) => actions.handleBoatPlacement([1, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>3</p></div>
                        <div id='pregame20' className='square' onClick={(e) => actions.handleBoatPlacement([2, 0])}></div>
                        <div id='pregame21' className='square' onClick={(e) => actions.handleBoatPlacement([2, 1])}></div>
                        <div id='pregame22' className='square' onClick={(e) => actions.handleBoatPlacement([2, 2])}></div>
                        <div id='pregame23' className='square' onClick={(e) => actions.handleBoatPlacement([2, 3])}></div>
                        <div id='pregame24' className='square' onClick={(e) => actions.handleBoatPlacement([2, 4])}></div>
                        <div id='pregame25' className='square' onClick={(e) => actions.handleBoatPlacement([2, 5])}></div>
                        <div id='pregame26' className='square' onClick={(e) => actions.handleBoatPlacement([2, 6])}></div>
                        <div id='pregame27' className='square' onClick={(e) => actions.handleBoatPlacement([2, 7])}></div>
                        <div id='pregame28' className='square' onClick={(e) => actions.handleBoatPlacement([2, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>4</p></div>
                        <div id='pregame30' className='square' onClick={(e) => actions.handleBoatPlacement([3, 0])}></div>
                        <div id='pregame31' className='square' onClick={(e) => actions.handleBoatPlacement([3, 1])}></div>
                        <div id='pregame32' className='square' onClick={(e) => actions.handleBoatPlacement([3, 2])}></div>
                        <div id='pregame33' className='square' onClick={(e) => actions.handleBoatPlacement([3, 3])}></div>
                        <div id='pregame34' className='square' onClick={(e) => actions.handleBoatPlacement([3, 4])}></div>
                        <div id='pregame35' className='square' onClick={(e) => actions.handleBoatPlacement([3, 5])}></div>
                        <div id='pregame36' className='square' onClick={(e) => actions.handleBoatPlacement([3, 6])}></div>
                        <div id='pregame37' className='square' onClick={(e) => actions.handleBoatPlacement([3, 7])}></div>
                        <div id='pregame38' className='square' onClick={(e) => actions.handleBoatPlacement([3, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>5</p></div>
                        <div id='pregame40' className='square' onClick={(e) => actions.handleBoatPlacement([4, 0])}></div>
                        <div id='pregame41' className='square' onClick={(e) => actions.handleBoatPlacement([4, 1])}></div>
                        <div id='pregame42' className='square' onClick={(e) => actions.handleBoatPlacement([4, 2])}></div>
                        <div id='pregame43' className='square' onClick={(e) => actions.handleBoatPlacement([4, 3])}></div>
                        <div id='pregame44' className='square' onClick={(e) => actions.handleBoatPlacement([4, 4])}></div>
                        <div id='pregame45' className='square' onClick={(e) => actions.handleBoatPlacement([4, 5])}></div>
                        <div id='pregame46' className='square' onClick={(e) => actions.handleBoatPlacement([4, 6])}></div>
                        <div id='pregame47' className='square' onClick={(e) => actions.handleBoatPlacement([4, 7])}></div>
                        <div id='pregame48' className='square' onClick={(e) => actions.handleBoatPlacement([4, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>6</p></div>
                        <div id='pregame50' className='square' onClick={(e) => actions.handleBoatPlacement([5, 0])}></div>
                        <div id='pregame51' className='square' onClick={(e) => actions.handleBoatPlacement([5, 1])}></div>
                        <div id='pregame52' className='square' onClick={(e) => actions.handleBoatPlacement([5, 2])}></div>
                        <div id='pregame53' className='square' onClick={(e) => actions.handleBoatPlacement([5, 3])}></div>
                        <div id='pregame54' className='square' onClick={(e) => actions.handleBoatPlacement([5, 4])}></div>
                        <div id='pregame55' className='square' onClick={(e) => actions.handleBoatPlacement([5, 5])}></div>
                        <div id='pregame56' className='square' onClick={(e) => actions.handleBoatPlacement([5, 6])}></div>
                        <div id='pregame57' className='square' onClick={(e) => actions.handleBoatPlacement([5, 7])}></div>
                        <div id='pregame58' className='square' onClick={(e) => actions.handleBoatPlacement([5, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>7</p></div>
                        <div id='pregame60' className='square' onClick={(e) => actions.handleBoatPlacement([6, 0])}></div>
                        <div id='pregame61' className='square' onClick={(e) => actions.handleBoatPlacement([6, 1])}></div>
                        <div id='pregame62' className='square' onClick={(e) => actions.handleBoatPlacement([6, 2])}></div>
                        <div id='pregame63' className='square' onClick={(e) => actions.handleBoatPlacement([6, 3])}></div>
                        <div id='pregame64' className='square' onClick={(e) => actions.handleBoatPlacement([6, 4])}></div>
                        <div id='pregame65' className='square' onClick={(e) => actions.handleBoatPlacement([6, 5])}></div>
                        <div id='pregame66' className='square' onClick={(e) => actions.handleBoatPlacement([6, 6])}></div>
                        <div id='pregame67' className='square' onClick={(e) => actions.handleBoatPlacement([6, 7])}></div>
                        <div id='pregame68' className='square' onClick={(e) => actions.handleBoatPlacement([6, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>8</p></div>
                        <div id='pregame70' className='square' onClick={(e) => actions.handleBoatPlacement([7, 0])}></div>
                        <div id='pregame71' className='square' onClick={(e) => actions.handleBoatPlacement([7, 1])}></div>
                        <div id='pregame72' className='square' onClick={(e) => actions.handleBoatPlacement([7, 2])}></div>
                        <div id='pregame73' className='square' onClick={(e) => actions.handleBoatPlacement([7, 3])}></div>
                        <div id='pregame74' className='square' onClick={(e) => actions.handleBoatPlacement([7, 4])}></div>
                        <div id='pregame75' className='square' onClick={(e) => actions.handleBoatPlacement([7, 5])}></div>
                        <div id='pregame76' className='square' onClick={(e) => actions.handleBoatPlacement([7, 6])}></div>
                        <div id='pregame77' className='square' onClick={(e) => actions.handleBoatPlacement([7, 7])}></div>
                        <div id='pregame78' className='square' onClick={(e) => actions.handleBoatPlacement([7, 8])}></div>
                    </div>
                    <div className='grid-row'>
                        <div className='row-counter'><p>9</p></div>
                        <div id='pregame80' className='square' onClick={(e) => actions.handleBoatPlacement([8, 0])}></div>
                        <div id='pregame81' className='square' onClick={(e) => actions.handleBoatPlacement([8, 1])}></div>
                        <div id='pregame82' className='square' onClick={(e) => actions.handleBoatPlacement([8, 2])}></div>
                        <div id='pregame83' className='square' onClick={(e) => actions.handleBoatPlacement([8, 3])}></div>
                        <div id='pregame84' className='square' onClick={(e) => actions.handleBoatPlacement([8, 4])}></div>
                        <div id='pregame85' className='square' onClick={(e) => actions.handleBoatPlacement([8, 5])}></div>
                        <div id='pregame86' className='square' onClick={(e) => actions.handleBoatPlacement([8, 6])}></div>
                        <div id='pregame87' className='square' onClick={(e) => actions.handleBoatPlacement([8, 7])}></div>
                        <div id='pregame88' className='square' onClick={(e) => actions.handleBoatPlacement([8, 8])}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreGame