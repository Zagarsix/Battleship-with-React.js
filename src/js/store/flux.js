const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // N° of Boats ,  1 - 5-Grid Boat , 3 - 4-Grid Boat , 2 - 3-Grid Boat, 1- 2-Grid Boat
            // PLAYER GRID
            // 0 --> default grid state
            // 1 --> missed grid
            // 2 --> boat grid
            playerGrid: [
                [2, 0, 2, 2, 2, 2, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 2, 2, 2, 2, 0],
                [2, 0, 2, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 0, 2, 2, 0, 0],
                [0, 0, 2, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 2, 2, 2, 0],
                [0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0, 0, 0],
            ],
            //Sum of Boat Squares hit -> used to determine winner. TO WIN SUM MUST BE: 25
            playerHitCount: 0,
            // COMPUTER GRID
            botGrid: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0, 0, 2],
                [0, 2, 0, 2, 2, 2, 2, 0, 2],
                [0, 2, 0, 0, 0, 0, 0, 0, 2],
                [0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 2, 0, 0, 0, 0, 0, 0],
                [0, 2, 2, 2, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2, 2, 2],
            ],
            //Sum of Boat Squares hit -> used to determine winner. This one is for the Computer.
            botHitCount: 0,
            //Integer to count the number of moves that has been done, used for rendering purposes.
            moveCount: 0,
            //Boolean to control the turn flow.
            isPlayerTurn: true,
            //Boolean to control the game flow.
            gameOver : false,
            //Boolean to show boat position on player grid.
            showBoats: false,
        },
        actions: {
            //Global HandleClick Function for Player
            handleClick: (e, coordinate) => {
                const store = getStore();
                if(!store.gameOver){
                    if(store.isPlayerTurn){
                        //Grid to Attack
                        var grid = store.botGrid
                        //Missed Shot
                        if (grid[coordinate[0]][coordinate[1]] === 0) {
                            grid[coordinate[0]][coordinate[1]] = 1
                            //Saving the updated grid on the Store
                            setStore({ botGrid: grid })
                            setStore({ moveCount: store.moveCount + 1})
                            e.target.className = 'square miss';
                        //Hit
                        } else if (grid[coordinate[0]][coordinate[1]] === 2) {
                            //Verification if square was already clicked
                            if(e.target.className !== 'square hit'){
                                setStore({ playerHitCount: store.playerHitCount+1})
                                setStore({ moveCount: store.moveCount + 1})
                            }else{
                                return null
                            }
                            e.target.className = 'square hit';
                        //If you click on an already clicked square
                        }else if(grid[coordinate[0]][coordinate[1]] === 1){
                            return null
                        }
                        //This one passes the turn to let the Bot Play
                        setStore({ isPlayerTurn : false})
                    }
                }
            },
            //Computer Click Function
            handleBotClick: (e,coordinate) => {
                const store = getStore();
                if(!store.gameOver){
                    if(!store.isPlayerTurn){
                        //Grid to Attack
                        var grid = store.playerGrid
                        //Missed Shot
                        if (grid[coordinate[0]][coordinate[1]] === 0) {
                            grid[coordinate[0]][coordinate[1]] = 1
                            //Saving the updated grid on the Store
                            setStore({ playerGrid: grid })
                            setStore({ moveCount: store.moveCount + 1})
                            e.target.className = 'square miss';
                        //Hit
                        } else if (grid[coordinate[0]][coordinate[1]] === 2) {
                            //Verification if square was already clicked
                            if(e.target.className !== 'square hit'){
                                setStore({ botHitCount: store.botHitCount+1})
                                setStore({ moveCount: store.moveCount + 1})
                            }
                            e.target.className = 'square hit';
                        //If you click on an already clicked square    
                        }else if(grid[coordinate[0]][coordinate[1]] === 1){
                            return null
                        }
                        //This one passes the turn to the Player
                        setStore({ isPlayerTurn : true})
                    }

                }
            },
            endGame : () => {
                setStore({gameOver : true})
            },
            toggleShowBoat: () => {
                const store = getStore()
                setStore({ showBoats : !store.showBoats })
                if(store.showBoats){
                    for(var row = 0 ; row < store.playerGrid.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.playerGrid[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = "2px solid orange"
                            }
                        }
                    }
                }else{
                    for(var row = 0 ; row < store.playerGrid.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.playerGrid[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = ""
                            }
                        }
                    }
                }
                
            }
        }
    };
};

export default getState;