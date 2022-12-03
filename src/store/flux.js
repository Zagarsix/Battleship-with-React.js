const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // N° de botes ,  1 portaaviones(5 espacios) , 3 acorazados (4 espacios), 
            // 2 cruceros (3 espacios), 1 buque (2 espacios)

            // --Tablero del jugador--//
            // 0 --> estado del tablero por defecto
            // 1 --> disparo fallido
            // 2 --> disparo acertado
            gamerBoard: [
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
            //Sumatoria de disparos acertados. Para ganar deben sumar 25.//
            playerHitCount: 0,

            // --Tablero de la CPU--//
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
            //Sumatoria de disparos acertados por la CPU.//
            botHitCount: 0,
            //Representa el número de movimientos realizados.//
            moveCount: 0,
            //Determina  a quien le toca disparar (jugador y CPU).//
            isPlayerTurn: true,
            //Determina el estado del juego.//
            gameOver : false,
            //Muestra la posición de los barcos en el tablero del jugador.//
            showBoats: false,

            //--------Variables globales de la construcción de los tableros-----------//
            //Redirige al juego principal, cuando todos los barcos del jugador están posicionados.//
            gridBuilding : true,
            //Establece la ubicación del barco: horizontal ó vertical.//
            isHorizontal: true,
            //Número de barcos para el tablero del jugador.//
            fiveGridBoat : 1,
            fourGridBoat: 3,
            threeGridBoat: 2,
            twoGridBoat: 1,
             //Número de barcos para el tablero de la CPU.//
            botFiveGridBoat: 1,
            botFourGridBoat: 3,
            botThreeGridBoat: 2,
            botTwoGridBoat: 1,
            //Genera un tablero aleatorio para la CPU y renderiza el juego principal.//
            isPlacementDone: false,
            },
        
            actions: {
            //Función Global HandleClick para el jugador.//
            handleClick: (e, coordinate) => {
                const store = getStore();
                if(!store.gameOver){
                    if(store.isPlayerTurn){
                        //Tablero para atacar.//
                        var board = store.botGrid
                        //Disparo fallido.//
                        if (board[coordinate[0]][coordinate[1]] === 0) {
                            board[coordinate[0]][coordinate[1]] = 1
                            //Guardando el tablero actualizado en Store.//
                            setStore({ botGrid: board })
                            setStore({ moveCount: store.moveCount + 1})
                            e.target.className = 'square miss';
                        //Disparo//
                        } else if (board[coordinate[0]][coordinate[1]] === 2) {
                            //Verifica si ya se hizo click en el cuadrado.//
                            if(e.target.className !== 'square hit'){
                                setStore({ playerHitCount: store.playerHitCount+1})
                                setStore({ moveCount: store.moveCount + 1})
                            }else{
                                return null
                            }
                            e.target.className = 'square hit';
                        //Si se clickea sobre un cuadrado ya seleccionado.//
                        }else if(board[coordinate[0]][coordinate[1]] === 1){
                            return null
                        }
                        //Permite el turno de la CPU.//
                        setStore({ isPlayerTurn : false})
                    }
                }
            },
            //Función Global HandleClick para la CPU.//
            handleBotClick: (e,coordinate) => {
                const store = getStore();
                if(!store.gameOver){
                    if(!store.isPlayerTurn){
                       //Tablero para atacar.//
                        var board = store.gamerBoard
                        //Disparo perdido.//
                        if (board[coordinate[0]][coordinate[1]] === 0) {
                            board[coordinate[0]][coordinate[1]] = 1
                            //Guardando el tablero actualizado en Store.//
                            setStore({ gamerBoard: board })
                            setStore({ moveCount: store.moveCount + 1})
                            e.target.className = 'square miss';
                        //Disparo//
                        } else if (board[coordinate[0]][coordinate[1]] === 2) {
                            //Verifica si ya se hizo click en el cuadrado.//
                            if(e.target.className !== 'square hit'){
                                setStore({ botHitCount: store.botHitCount+1})
                                setStore({ moveCount: store.moveCount + 1})
                            }
                            e.target.className = 'square hit';
                        //Si se clickea sobre un cuadrado ya seleccionado.//    
                        }else if(board[coordinate[0]][coordinate[1]] === 1){
                            return null
                        }
                        //Permite el turno del jugador.//
                        setStore({ isPlayerTurn : true})
                    }

                }
            },
            /* Finaliza el bucle */
            endGame : () => {
                setStore({gameOver : true})
            },
            /* Resalta la posición de los barcos del jugador */
            toggleShowBoat: () => {
                const store = getStore()
                setStore({ showBoats : !store.showBoats })
                if(store.showBoats){
                    //Este bucle permite que el tablero del jugador cambie su estilo//
                    for(var row = 0 ; row < store.gamerBoard.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.gamerBoard[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = "5px solid red"
                            }
                        }
                    }
                }else{
                    //Este bucle revierte los cambios realizados en los bucles anteriores.//
                    for(var row = 0 ; row < store.gamerBoard.length ; row++){
                        for(var column = 0 ; column < 9 ; column++){
                            if(store.gamerBoard[row][column] === 2){
                                document.getElementById(String(row)+String(column)).style.border = ""
                            }
                        }
                    }
                }
                
            },
            //Controla la construcción del tablero del jugador (posición válida de cada barco).//
            handleBoatPlacement: (coordinate) => {
                const store = getStore();
                var board = store.gamerBoard;
                //PORTAAVIONES (5 espacios)//
                if(store.fiveGridBoat > 0){
                    if(!store.isHorizontal){
                        //Previene la ubicación del barco fuera del tablero.//
                        if(coordinate[0] <= 4){
                            var counter = 0
                            //La ubicación del barco está ok.//
                            while( counter < 5 ){
                                board[coordinate[0]+counter][coordinate[1]] = 2
                                counter+=1
                            }
                            setStore({fiveGridBoat: 0})
                        }}
                        else if(store.isHorizontal){
                        //Previene la ubicación del barco fuera del tablero.//
                        if(coordinate[1] <= 4){
                            var counter = 0
                            //La ubicación del barco está ok.//
                            while( counter < 5 ){
                                board[coordinate[0]][coordinate[1]+counter] = 2
                                counter+=1
                            }
                            setStore({ fiveGridBoat: 0 })
                        }
                    }
                //ACORAZADOS (4 espacios)//
                }else if(store.fourGridBoat > 0){
                    //4-Comprueba la posición del barco - VERTICAL
                    if(!store.isHorizontal){
                        //Verificando la ubicación del barco
                        var boatOverlap = false;
                        ////Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[0] <= 5){
                            for(var i = 0 ; i < 4 ; i++){
                                if(board[coordinate[0]+i][coordinate[1]] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[0] <= 5 && !boatOverlap){
                            var counter = 0
                            while( counter < 4 ){
                                board[coordinate[0]+counter][coordinate[1]] = 2
                                counter+=1
                            }
                            setStore({ fourGridBoat: store.fourGridBoat - 1 })
                        }
                    
                    //4-Comprueba la posición del barco - HORIZONTAL   
                    }else if(store.isHorizontal){
                        //Verifica la ubicación del barco.//
                        var boatOverlap = false;
                        //Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[1] <= 5){
                            for(var i = 0 ; i < 4 ; i++){
                                if(board[coordinate[0]][coordinate[1]+i] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[1] <= 5 && !boatOverlap){
                            var counter = 0
                            while( counter < 4 ){
                                board[coordinate[0]][coordinate[1]+counter] = 2
                                counter+=1
                            }
                            setStore({ fourGridBoat: store.fourGridBoat - 1 })
                        }
                    }
                //CRUCEROS (3 ESPACIOS)   
                }else if(store.threeGridBoat > 0){
                    //3 Comprueba la posición del barco - VERTICAL
                    if(!store.isHorizontal){
                        //Verificando la ubicación del barco
                        var boatOverlap = false;
                        //Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[0] <= 6){
                            for(var i = 0 ; i < 3 ; i++){
                                if(board[coordinate[0]+i][coordinate[1]] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[0] <= 6 && !boatOverlap){
                            var counter = 0
                            while( counter < 3 ){
                                board[coordinate[0]+counter][coordinate[1]] = 2
                                counter+=1
                            }
                            setStore({ threeGridBoat: store.threeGridBoat - 1 })
                        }
                    
                    //3-Comprueba la posición del barco - HORIZONTAL    
                    }else if(store.isHorizontal){
                        //Verificando la ubicación del barco
                        var boatOverlap = false;
                        //Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[1] <= 6){
                            for(var i = 0 ; i < 3 ; i++){
                                if(board[coordinate[0]][coordinate[1]+i] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[1] <= 6 && !boatOverlap){
                            var counter = 0
                            while( counter < 3 ){
                                board[coordinate[0]][coordinate[1]+counter] = 2
                                counter+=1
                            }
                            setStore({ threeGridBoat: store.threeGridBoat - 1 })
                        }
                    }
                //BUQUES (2 espacios)    
                }else if(store.twoGridBoat > 0){
                    //2-Comprueba la posición del barco - VERTICAL
                    if(!store.isHorizontal){
                        //Verificando la ubicación del barco
                        var boatOverlap = false;
                        //Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[0] <= 7){
                            for(var i = 0 ; i < 2 ; i++){
                                if(board[coordinate[0]+i][coordinate[1]] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[0] <= 7 && !boatOverlap){
                            var counter = 0
                            while( counter < 2 ){
                                board[coordinate[0]+counter][coordinate[1]] = 2
                                counter+=1
                            }
                            setStore({ twoGridBoat: store.twoGridBoat - 1 })
                        }
                    
                    //2-Comprueba la posición del barco - HORIZONTAL   
                    }else if(store.isHorizontal){
                        //Verificando la ubicación del barco
                        var boatOverlap = false;
                        //Comprueba si hay otro barco en el lugar seleccionado//
                        if(coordinate[1] <= 7){
                            for(var i = 0 ; i < 2 ; i++){
                                if(board[coordinate[0]][coordinate[1]+i] === 2){
                                    boatOverlap  = true;
                                }
                            }
                        }
                        //La ubicación del barco está ok.//
                        if(coordinate[1] <= 7 && !boatOverlap){
                            var counter = 0
                            while( counter < 2 ){
                                board[coordinate[0]][coordinate[1]+counter] = 2
                                counter+=1
                            }
                            setStore({ twoGridBoat: store.twoGridBoat - 1 })
                        }
                    }
                    if(store.fiveGridBoat === 0 && store.fourGridBoat === 0 && store.threeGridBoat === 0 && store.twoGridBoat === 0){
                        //Genera un tablero aleatorio para la CPU y renderiza el juego principal.//
                        setTimeout(() => {setStore({ isPlacementDone: true})},"1500")
                    }
                }
            },
            //Establece la ubicación de forma horizontal//
            handleDirectionHorizontal: () => {
                setStore({ isHorizontal: true })
            },
            //Establece la ubicación de forma vertical//
            handleDirectionVertical: () => {
                setStore({ isHorizontal: false })
            }
        }
    };
};

export default getState;