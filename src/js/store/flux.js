const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // N° of Boats ,  1 - 5-Grid Boat , 3 - 4-Grid Boat , 2 - 3-Grid Boat, 1- 2-Grid Boat
            // PLAYER GRID
            // 0 --> default grid state
            // 1 --> missed grid
            // 2 --> boat grid
            playerGrid: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            //Sum of Boat Squares hit -> used to determine winner. TO WIN SUM MUST BE: 25
            playerHitCount: 0,
            // COMPUTER GRID
            botGrid: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
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

            //--------Grid Building Section of Global Variables-----------
            //Boolean to go to the main game when player grid is created.
            gridBuilding : true,
            //Boolean to set the boat placement horizonal or vertical.
            isHorizontal: true,
            //Number of Boats to be placed <- For Player Grid Construction.
            fiveGridBoat : 1,
            fourGridBoat: 3,
            threeGridBoat: 2,
            twoGridBoat: 1,
            //Number of Boats to be placed <- For Bot Grid Construction.
            botFiveGridBoat: 1,
            botFourGridBoat: 3,
            botThreeGridBoat: 2,
            botTwoGridBoat: 1,
            //Boolean to Start Random Grid Generating for Bot and Main Game Render
            isPlacementDone: false,

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
            /* Function to end the game loop */
            endGame : () => {
                setStore({gameOver : true})
            },
            /* Function to highlight where the player boats are placed */
            toggleShowBoat: () => {
                const store = getStore()
                setStore({ showBoats : !store.showBoats })
                if(store.showBoats){
                    //This loop cans the playerGrid to change its style whenever a 2 is found. (2 is where a boat is placed on the Grid)
                    for(var row = 0 ; row < store.playerGrid.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.playerGrid[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = "2px solid orange"
                            }
                        }
                    }
                }else{
                    //This loop is to revert the changes the above loops made.
                    for(var row = 0 ; row < store.playerGrid.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.playerGrid[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = ""
                            }
                        }
                    }
                }
                
            },
            //Function to control the grid construction for the player, only admitting valid positions.
            handleBoatPlacement: (coordinate) => {
                const store = getStore();
                var grid = store.playerGrid;
                //5-GRID BOAT
                if(store.fiveGridBoat > 0){
                    //5-Grid Carrier Placement - VERTICAL
                    if(!store.isHorizontal){
                        //Boat Placement Check , to prevent boat placement outside the grid.
                        if(coordinate[0] <= 4){
                            var counter = 0
                            //Boat Placement if everything is OK
                            while( counter < 5 ){
                                grid[coordinate[0]+counter][coordinate[1]] = 2
                                counter+=1
                            }
                            setStore({fiveGridBoat: 0})
                        }
                    //5 - Grid Carrier Placement - HORIZONTAL   
                    }else if(store.isHorizontal){
                        //Boat Placement Check , to prevent boat placement outside the grid.
                        if(coordinate[1] <= 4){
                            var counter = 0
                            //Boat Placement if everything is OK
                            while( counter < 5 ){
                                grid[coordinate[0]][coordinate[1]+counter] = 2
                                counter+=1
                            }
                            setStore({ fiveGridBoat: 0 })
                        }
                    }
                //4-GRID BOAT
                }else if(store.fourGridBoat > 0){
                    //4-Grid Boat Check - VERTICAL
                    if(!store.isHorizontal){
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
                            setStore({ fourGridBoat: store.fourGridBoat - 1 })
                        }
                    
                    //4-Grid Boat Check - HORIZONTAL   
                    }else if(store.isHorizontal){
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
                            setStore({ fourGridBoat: store.fourGridBoat - 1 })
                        }
                    }
                //3-GRID BOAT    
                }else if(store.threeGridBoat > 0){
                    //3-Grid Boat Check - VERTICAL
                    if(!store.isHorizontal){
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
                            setStore({ threeGridBoat: store.threeGridBoat - 1 })
                        }
                    
                    //3-Grid Boat Check - HORIZONTAL   
                    }else if(store.isHorizontal){
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
                            setStore({ threeGridBoat: store.threeGridBoat - 1 })
                        }
                    }
                //2-GRID BOAT    
                }else if(store.twoGridBoat > 0){
                    //2-Grid Boat Check - VERTICAL
                    if(!store.isHorizontal){
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
                            setStore({ twoGridBoat: store.twoGridBoat - 1 })
                        }
                    
                    //2-Grid Boat Check - HORIZONTAL   
                    }else if(store.isHorizontal){
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
                            setStore({ twoGridBoat: store.twoGridBoat - 1 })
                        }
                    }
                    if(store.fiveGridBoat === 0 && store.fourGridBoat === 0 && store.threeGridBoat === 0 && store.twoGridBoat === 0){
                        //Boolean Change to Proceed with the Bot Generation and render Main Game
                        setTimeout(() => {setStore({ isPlacementDone: true})},"2000")
                    }
                }
            },
            //To set the placement to Horizontal
            handleDirectionHorizontal: () => {
                setStore({ isHorizontal: true })
            },
            //To set the placement to Vertical
            handleDirectionVertical: () => {
                setStore({ isHorizontal: false })
            }
        }
    };
};

export default getState;