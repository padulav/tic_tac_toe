

export default class TicTacToeController {
    constructor(usingNamingSystem, usingValueSystem, usingGameStatus){
    /**
    * @param  
    * @param  
    * @param
    */
        this.nameSystem = usingNamingSystem
        this.valueSystem = usingValueSystem
        this.gameStatus = usingGameStatus

        this.grid = new Array(9)
        this.grid.fill(this.valueSystem.empty)
    }

    getGrid()    {
        return this.grid
    }

    emptyGrid(){
        this.grid.fill(this.valueSystem.empty)
    }

    updateGrid(position, value){
    /**
    * @param  {gridPositionNameSystem} position position on the grid table
    * @param  {gridValueSystem}        value    new value on the position
    * @return {String}      gameStatus model object
    */

        // positions with 2 win scenarios
        if (position === this.nameSystem.superiorMid  ) this.grid[1] = value
        if (position === this.nameSystem.midLeft      ) this.grid[3] = value
        if (position === this.nameSystem.midRight     ) this.grid[5] = value
        if (position === this.nameSystem.bottomMid    ) this.grid[7] = value

        //positions with 3 wins scenarios
        if (position === this.nameSystem.superiorLeft ) this.grid[0] = value
        if (position === this.nameSystem.superiorRight) this.grid[2] = value
        if (position === this.nameSystem.bottomLeft   ) this.grid[6] = value        
        if (position === this.nameSystem.bottomRight  ) this.grid[8] = value

        //positions with 4 wins scenarios 
        if (position === this.nameSystem.center       ) this.grid[4] = value



        if (this.isALock()) return this.gameStatus.matchLock
        if (this.isAWin()){
            if(value === this.valueSystem.x)
            return this.gameStatus.matchWinX 
            else 
            return this.gameStatus.matchWinO
        }
        else                return this.gameStatus.onGoing  

            

    }

    isALock(){
        return !this.grid.includes(this.valueSystem.empty) && !this.isAWin()
    }

    isAWin(){
    /**
    * @return 
    */
        //horizontal wins
        if(this.grid[0] === this.grid[1] &&  this.grid[0] === this.grid[2] && this.grid[0]  !== this.valueSystem.empty)
        {console.log("win scenario 1"); return true}

        if(this.grid[3] === this.grid[4] &&  this.grid[3] === this.grid[5] && this.grid[3]  !== this.valueSystem.empty )
        {console.log("win scenario 2"); return true}

        if(this.grid[6] === this.grid[7] &&  this.grid[6] === this.grid[8] && this.grid[6] !== this.valueSystem.empty )
        {console.log("win scenario 3");return true}


        //vertical wins
        if(this.grid[0] === this.grid[3] && this.grid[0] === this.grid[6] &&  this.grid[0] !== this.valueSystem.empty )
        {console.log("win scenario 4"); return true}

        if(this.grid[1] === this.grid[4] &&  this.grid[1] === this.grid[7] &&  this.grid[1] !== this.valueSystem.empty )
        {console.log("win scenario 5"); return true}

        if(this.grid[2] === this.grid[5] &&  this.grid[2] === this.grid[8] &&  this.grid[2] !== this.valueSystem.empty )
        {console.log("win scenario 6"); return true}

        //diagonal wins
        if(this.grid[0] === this.grid[4] &&  this.grid[0]  === this.grid[8] &&  this.grid[0] !== this.valueSystem.empty )
        {console.log("win scenario 7");return true}
        if(this.grid[2] === this.grid[4] &&  this.grid[2] === this.grid[6]  &&  this.grid[2] !== this.valueSystem.empty )
        {console.log("win scenario 8");return true}
        
        return false
        
    }

}



// TEST SCENARIO
//const nameSystem = require('../models/gridPositionNameSystem').nameSystem
//const valueSystem = require('../models/gridValueSystem').valueSystem
//const statusSystem = require('../models/gameStatusModel').gameStatus
//
//game = new TicTacToeController (usingNamingSystem=nameSystem, usingValueSystem=valueSystem, usingGameStatus=statusSystem)
//
//let status 
//
//
///*
//lock scenario 
//                o|o|x
//                x|x|o
//                o|x|x
//*/
//status= game.updateGrid(position=nameSystem.superiorLeft, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.superiorMid, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.midRight, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.bottomLeft, value=valueSystem.x)
//status= game.updateGrid(position=nameSystem.superiorRight, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.midLeft, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.center, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.bottomMid, value=valueSystem.o)
//status= game.updateGrid(position=nameSystem.bottomRight, value=valueSystem.o)
//
//console.log(status)
//console.log(game.getGrid())
//
//