

export default class TicTacToeController {
    constructor(usingNamingSystem, usingValueSystem, usingGameStatus){
    /**
    * CONSTRUCTOR 
    * @param  usingNamingSystem NameSystem Object to standardize and avoid the use of string identification across compontes and classes
    * @param  usingValueSystem ValueSystem Object to standardize and avoid the use of string identification across compontes and classes
    * @param  usingGameStatus StatusSystem Object to standardize and avoid the use of string identification across compontes and classes
    */
        this.nameSystem = usingNamingSystem
        this.valueSystem = usingValueSystem
        this.gameStatus = usingGameStatus
        this.currentStatus = this.gameStatus.OnGoinG
        this.grid = new Array(9)
        this.grid.fill(this.valueSystem.empty)
    }

    getGrid(){
    /**
    *  Getter for the game table 
    * @return {List} List of 9 values within the ValueSystem standart of values
    */
        return this.grid
    }

    getValueByPositionName(position){
    /**
    * Getter to access a single value on the game grid using the NameSystem to access the
    * value on the table
    * @param  {String} position  position on the grid table within NameSystem standart
    * @return {String}           value within ValueSystem standart
    */
        if (position === this.nameSystem.superiorMid  ) {return this.grid[1]}
        if (position === this.nameSystem.midLeft      ) {return this.grid[3]}
        if (position === this.nameSystem.midRight     ) {return this.grid[5]}
        if (position === this.nameSystem.bottomMid    ) {return this.grid[7]}
        if (position === this.nameSystem.superiorLeft ) {return this.grid[0]}
        if (position === this.nameSystem.superiorRight) {return this.grid[2]}
        if (position === this.nameSystem.bottomLeft   ) {return this.grid[6]}
        if (position === this.nameSystem.bottomRight  ) {return this.grid[8]}
        if (position === this.nameSystem.center       ) {return this.grid[4]}
    }
    
    restart(){
    /**
    * empties the table and clears the game status so a new game can run 
    */
        this.currentStatus = this.gameStatus.OnGoinG
        this.grid.fill(this.valueSystem.empty)
    }

    updateGrid(position, value){
    /**
    * @param  {String}  position  position on the grid table on the NameSystem value
    * @param  {String}  value     new value on the position on the ValueSystem standart
    * @return {String}            status string using the StatusSystem standart
    */

        if (this.currentStatus === this.gameStatus.onGoing){
            // positions with 2 win scenarios
            if (position === this.nameSystem.superiorMid  ) {this.__fillGridOnIndex(1,value)}
            if (position === this.nameSystem.midLeft      ) {this.__fillGridOnIndex(3,value)}
            if (position === this.nameSystem.midRight     ) {this.__fillGridOnIndex(5,value)}
            if (position === this.nameSystem.bottomMid    ) {this.__fillGridOnIndex(7,value)}
            //positions with 3 wins scenarios
            if (position === this.nameSystem.superiorLeft ) {this.__fillGridOnIndex(0,value)}
            if (position === this.nameSystem.superiorRight) {this.__fillGridOnIndex(2,value)}
            if (position === this.nameSystem.bottomLeft   ) {this.__fillGridOnIndex(6,value)}
            if (position === this.nameSystem.bottomRight  ) {this.__fillGridOnIndex(8,value)}
            //positions with 4 wins scenarios 
            if (position === this.nameSystem.center       ) {this.__fillGridOnIndex(4,value)}
        }

        return this.__updateStatus(value)

    }

    isALock(){
    /**
    * @return {Boolean} Verify the scenario in wich the game is over and there is no winners
    */
        return !this.grid.includes(this.valueSystem.empty) && !this.isAWin()
    }

    isAWin(){
    /**
    * @return {String} Verify the current game grid is a win scenarios
    */
        //horizontal wins
        if(this.grid[0] === this.grid[1] &&  this.grid[0] === this.grid[2] && this.grid[0] !== this.valueSystem.empty){return true}
        if(this.grid[3] === this.grid[4] &&  this.grid[3] === this.grid[5] && this.grid[3] !== this.valueSystem.empty){return true}
        if(this.grid[6] === this.grid[7] &&  this.grid[6] === this.grid[8] && this.grid[6] !== this.valueSystem.empty){return true}
        //vertical wins
        if(this.grid[0] === this.grid[3] &&  this.grid[0] === this.grid[6] && this.grid[0] !== this.valueSystem.empty){return true}
        if(this.grid[1] === this.grid[4] &&  this.grid[1] === this.grid[7] && this.grid[1] !== this.valueSystem.empty){return true}
        if(this.grid[2] === this.grid[5] &&  this.grid[2] === this.grid[8] && this.grid[2] !== this.valueSystem.empty){return true}
        //diagonal wins
        if(this.grid[0] === this.grid[4] &&  this.grid[0] === this.grid[8] && this.grid[0] !== this.valueSystem.empty){return true}
        if(this.grid[2] === this.grid[4] &&  this.grid[2] === this.grid[6] && this.grid[2] !== this.valueSystem.empty){return true}

        return false
        
    }

    __updateStatus(value){
    /**
    * Internal function to prevent the winner to change if 
    * the function is called and there is already a winner defined 
    * @param  {String}  position Position within NameSystem standart
    * @return {String}           status value within StatusSystem standart 
    */
        if (this.isALock()){
            this.currentStatus = this.gameStatus.matchLock
            return this.gameStatus.matchLock
        } 
        else if (this.isAWin()){
            if(value === this.valueSystem.x && this.currentStatus !== this.gameStatus.matchWinO){
                this.currentStatus = this.gameStatus.matchWinX
                return this.gameStatus.matchWinX 
            }
            else if(value === this.valueSystem.o && this.currentStatus !== this.gameStatus.matchWinX){
                this.currentStatus = this.gameStatus.matchWinO
                return this.gameStatus.matchWinO
            }
        }
        else {
            this.currentStatus = this.gameStatus.onGoing
            return this.gameStatus.onGoing  
        }
    }

    __fillGridOnIndex(idx, value){
    /**
    * Updates the grid list per index value
    * @param  {Int}     idx   list index value
    * @param  {String}  value value within ValueSystem standart
    */
        if (this.grid[idx]===this.valueSystem.empty){
            console.log("considered " + this.grid[idx] + " a empty value")
            this.grid[idx] = value
        } else{
            console.log("false")
            return
        }
    }

}