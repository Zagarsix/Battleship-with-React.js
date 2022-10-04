import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import BotGrid from './BotGrid.jsx'
import Grid from './Grid.jsx'

function MainGame() {
  const { store , actions } = useContext(Context)
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