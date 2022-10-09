import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../store/appContext'
import BotGrid from './BotGrid.jsx'
import Grid from './Grid.jsx'

function MainGame() {
  const { store , actions } = useContext(Context)
  const chosenCoordinates = useRef([])
  
  //Function to generate a Random Coordinate that is not present on the chosenCoordinates Array.
  function generateRandomCoordinate(){
    var first = Math.floor(Math.random() * 9)
    var second = Math.floor(Math.random() * 9)
    if(chosenCoordinates.current.includes([first,second])){
      generateRandomCoordinate();
    }else{
      chosenCoordinates.current.push([first,second])
      return [first,second]
    }
  }

  function selectOrientation(){
    var number = Math.floor(Math.random() * 100 + 1)
    if( number <= 50 ){
      return 'vertical'
    }else{
      return 'horizontal'
    }
  }

  //Random Grid Generation for Bot
  useEffect(() => {
    var botFiveGridBoat = 1
    var botFourGridBoat = 3
    var botThreeGridBoat = 2
    var botTwoGridBoat = 1
    //Beginning of Placement Function for Bot Boats.

    var placed = 0
    while(placed < 7){
        var coordinate = generateRandomCoordinate();
        var orientation = selectOrientation();
        var grid = store.botGrid;
         //5-GRID BOAT
        if(botFiveGridBoat > 0 && placed === 0){
            //5-Grid Carrier Placement - VERTICAL
            if(orientation === 'vertical'){
                //Boat Placement Check , to prevent boat placement outside the grid.
                if(coordinate[0] <= 4){
                    var counter = 0
                    //Boat Placement if everything is OK
                    while( counter < 5 ){
                        grid[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botFiveGridBoat = 0
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            //5 - Grid Carrier Placement - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //Boat Placement Check , to prevent boat placement outside the grid.
                if(coordinate[1] <= 4){
                    var counter = 0
                    //Boat Placement if everything is OK
                    while( counter < 5 ){
                        grid[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botFiveGridBoat = 0 
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            }
        //4-GRID BOAT
        }else if(botFourGridBoat > 0 && 1 < placed <= 4){
            //4-Grid Boat Check - VERTICAL
            if(orientation === 'vertical'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[0] <= 5){
                    for(var i = 0 ; i < 4 ; i++){
                        if(grid[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[0] <= 5 && !boatOverlap){
                    var counter = 0
                    while( counter < 4 ){
                        grid[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botFourGridBoat = botFourGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            
            //4-Grid Boat Check - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[1] <= 5){
                    for(var i = 0 ; i < 4 ; i++){
                        if(grid[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[1] <= 5 && !boatOverlap){
                    var counter = 0
                    while( counter < 4 ){
                        grid[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botFourGridBoat = botFourGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate);
                }
            }
        //3-GRID BOAT    
        }else if(botThreeGridBoat > 0 &&  5 <= placed < 6 ){
            //3-Grid Boat Check - VERTICAL
            if(orientation === 'vertical'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[0] <= 6){
                    for(var i = 0 ; i < 3 ; i++){
                        if(grid[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[0] <= 6 && !boatOverlap){
                    var counter = 0
                    while( counter < 3 ){
                        grid[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botThreeGridBoat = botThreeGridBoat - 1
                    placed+=1
                }else{
                  chosenCoordinates.current.push(coordinate);
                }
            
            //3-Grid Boat Check - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[1] <= 6){
                    for(var i = 0 ; i < 3 ; i++){
                        if(grid[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[1] <= 6 && !boatOverlap){
                    var counter = 0
                    while( counter < 3 ){
                        grid[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botThreeGridBoat = botThreeGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            }
        //2-GRID BOAT    
        }else if(botTwoGridBoat > 0 && placed === 6){
            //2-Grid Boat Check - VERTICAL
            if(orientation === 'vertical'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[0] <= 7){
                    for(var i = 0 ; i < 2 ; i++){
                        if(grid[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[0] <= 7 && !boatOverlap){
                    var counter = 0
                    while( counter < 2 ){
                        grid[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botTwoGridBoat = botTwoGridBoat - 1 
                    placed+=1
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            
            //2-Grid Boat Check - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //Boat Placement Checking
                var boatOverlap = false;
                //Check if there is another boat on the place that the boat will be placed
                if(coordinate[1] <= 7){
                    for(var i = 0 ; i < 2 ; i++){
                        if(grid[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //Boat Placement if everything is OK
                if(coordinate[1] <= 7 && !boatOverlap){
                    var counter = 0
                    while( counter < 2 ){
                        grid[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botTwoGridBoat = botTwoGridBoat - 1 
                    placed+=1
                }else{
                  chosenCoordinates.current.push(coordinate);
                }
            }
        }
    }
  },[])

  //Win Condition Check
  useEffect(() => {
    if(store.moveCount === 162 || store.playerHitCount === 25 || store.botHitCount === 25){
      actions.endGame()
    }
  }, [store.moveCount])
  
  return (
    <>
    <div className='headline text-center'>
      {/* TITLE DISPLAY DEPENDING ON PLAYER OR COMPUTER TURN */}
      {store.isPlayerTurn ? <h2>It's Your Turn!</h2> : <h2>It's the Computer's Turn!</h2>}
      {store.gameOver ? (!store.isPlayerTurn ? <h1>Game Over!, You Won!</h1> : <h1>Game Over!, The Computer Won!</h1>) : null}
    </div>
    <div className='gameboard'>
      <div className='playerboard'>
        <div className='board-header text-center'>
          <h2>Player Board</h2>
        </div>
        <Grid />
        <div className='text-center'><div className='btn btn-outline-secondary' onClick={() => {actions.toggleShowBoat()}}>Show Boats</div></div>
      </div>
      <div className='botboard'>
        <div className='board-header text-center'>
          <h2>Computer Board</h2>
        </div>
        <BotGrid />
      </div>
    </div>
    </>
  )
}

export default MainGame