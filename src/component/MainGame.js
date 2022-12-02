import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../store/appContext'
import CPUBoard from "./CPUBoard.js";
import PlayerBoard from "./PlayerBoard.js";

function MainGame() {
  const { store , actions } = useContext(Context)
  const chosenCoordinates = useRef([])
  
  //Genera una coordenada aleatoria//
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

  //Genera una orientación aleatoria para posicionar la nave//
  function selectOrientation(){
    var number = Math.floor(Math.random() * 100 + 1)
    if( number <= 50 ){
      return 'vertical'
    }else{
      return 'horizontal'
    }
  }

  //Tablero aleatorio para el CPU//
  useEffect(() => {
    var botFiveGridBoat = 1
    var botFourGridBoat = 3
    var botThreeGridBoat = 2
    var botTwoGridBoat = 1

    //Posiciona los barcos del CPU, de modo, que las coordenadas no se repitan.//
    var placed = 0
    while(placed < 7){
        var coordinate = generateRandomCoordinate();
        var orientation = selectOrientation();
        var board = store.botGrid;

        if(botFiveGridBoat > 0 && placed === 0){
            if(orientation === 'vertical'){
                //Comprueba la posición de la nave, para que no esté fuera del tablero.//
                if(coordinate[0] <= 4){
                    var counter = 0
                    while( counter < 5 ){
                        board[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botFiveGridBoat = 0
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            //5 - Posición barco - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //Comprueba la posición de la nave, para que no esté fuera del tablero.//
                if(coordinate[1] <= 4){
                    var counter = 0
                    while( counter < 5 ){
                        board[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botFiveGridBoat = 0 
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            }
        //4-Tablero del barco
        }else if(botFourGridBoat > 0 && 1 < placed <= 4){
            //4-Comprueba el tablero del barco - VERTICAL
            if(orientation === 'vertical'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[0] <= 5){
                    for(var i = 0 ; i < 4 ; i++){
                        if(board[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //La posición del barco está OK//
                if(coordinate[0] <= 5 && !boatOverlap){
                    var counter = 0
                    while( counter < 4 ){
                        board[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botFourGridBoat = botFourGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            
            //4-Comprueba el tablero del barco - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[1] <= 5){
                    for(var i = 0 ; i < 4 ; i++){
                        if(board[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                 //La posición del barco está OK//
                if(coordinate[1] <= 5 && !boatOverlap){
                    var counter = 0
                    while( counter < 4 ){
                        board[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botFourGridBoat = botFourGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate);
                }
            }
        //3-Tablero del barco    
        }else if(botThreeGridBoat > 0 &&  5 <= placed < 6 ){
            //3-Comprueba el tablero del barco - VERTICAL
            if(orientation === 'vertical'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[0] <= 6){
                    for(var i = 0 ; i < 3 ; i++){
                        if(board[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //La posición del barco está OK//
                if(coordinate[0] <= 6 && !boatOverlap){
                    var counter = 0
                    while( counter < 3 ){
                        board[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botThreeGridBoat = botThreeGridBoat - 1
                    placed+=1
                }else{
                  chosenCoordinates.current.push(coordinate);
                }
            
            //3-Comprueba el tablero del barco - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[1] <= 6){
                    for(var i = 0 ; i < 3 ; i++){
                        if(board[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //La posición del barco está OK//
                if(coordinate[1] <= 6 && !boatOverlap){
                    var counter = 0
                    while( counter < 3 ){
                        board[coordinate[0]][coordinate[1]+counter] = 2
                        counter+=1
                    }
                    botThreeGridBoat = botThreeGridBoat - 1
                    placed+=1;
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            }
        //2-Tablero del barco    
        }else if(botTwoGridBoat > 0 && placed === 6){
            //2-Comprueba el tablero del barco - VERTICAL
            if(orientation === 'vertical'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[0] <= 7){
                    for(var i = 0 ; i < 2 ; i++){
                        if(board[coordinate[0]+i][coordinate[1]] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //La posición del barco está OK//
                if(coordinate[0] <= 7 && !boatOverlap){
                    var counter = 0
                    while( counter < 2 ){
                        board[coordinate[0]+counter][coordinate[1]] = 2
                        counter+=1
                    }
                    botTwoGridBoat = botTwoGridBoat - 1 
                    placed+=1
                }else{
                  chosenCoordinates.current.push(coordinate)
                }
            
            //2-Comprueba el tablero del barco - HORIZONTAL   
            }else if(orientation === 'horizontal'){
                //comprobando la posición//
                var boatOverlap = false;
                //Comprueba si hay otro barco en el lugar que ocupará este barco//
                if(coordinate[1] <= 7){
                    for(var i = 0 ; i < 2 ; i++){
                        if(board[coordinate[0]][coordinate[1]+i] === 2){
                            boatOverlap  = true;
                        }
                    }
                }
                //La posición del barco está OK//
                if(coordinate[1] <= 7 && !boatOverlap){
                    var counter = 0
                    while( counter < 2 ){
                        board[coordinate[0]][coordinate[1]+counter] = 2
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

  //Comprueba la condición ganadora//
  useEffect(() => {
    if(store.moveCount === 162 || store.playerHitCount === 25 || store.botHitCount === 25){
      actions.endGame()
    }
  }, [store.moveCount])
  
  return (
    <>
    <div className='headline text-center p-3 mt-2'>
      {/* Título depende del turno de jugador */}
      {store.isPlayerTurn ? <h2 className='btn btn-success'>Te toca disparar!</h2> : <h2 className='btn btn-danger'>Dispara tu enemigo!</h2>}
      {store.gameOver ? (!store.isPlayerTurn ? <h1>Has ganado! Increíble juego!</h1> : <h1>Has perdido! Tu enemigo es más fuerte!</h1>) : null}
    </div>
    {/* Div principal, contiene ambos tableros */}
    <div className='gameboard'>
      <div className='playerboard'>
        <div className='board-header text-center'>
          <h2>Tu tablero</h2>
        </div>
        <PlayerBoard />
        <div className='text-center pd-4 mt-4'><div className='btn btn-outline-danger' onClick={() => {actions.toggleShowBoat()}}>Mostrar barcos</div></div>
      </div>
      <div className='botboard'>
        <div className='board-header text-center'>
          <h2>Tablero enemigo</h2>
        </div>
        <CPUBoard />
      </div>
    </div>
    </>
  )
}

export default MainGame