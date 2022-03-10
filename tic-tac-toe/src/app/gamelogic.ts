import{ Status } from './gamestatus';

export class Gamelogic {



    gamefield: Array<number> = [];

    currentTurn: number = 0;

    gameStatus: Status;


    public constructor() {
        this.gameStatus = Status.STOP;
        this.gamefield = [0,0,0,0,0,0,0,0,0];
    }

    gameStart(): void {
        this.gamefield = [0,0,0,0,0,0,0,0,0];
        this.currentTurn = this.randomPlayerStart();
        console.log(this.currentTurn);
        this.gameStatus = Status.START;
      }

    randomPlayerStart(): number {
        const startPlayer = Math.floor(Math.random()*2)+1;
        return startPlayer;
    }

    setField(position: number, value: number): void {
        this.gamefield[position] = value;
        console.log(this.gamefield);
    }

    getPlayerColorClass():string{
        const colorClass = (this.currentTurn == 2) ? 'player-two' : 'player-one';
        return colorClass;
    }

    changePlayer(): void{
        this.currentTurn = (this.currentTurn ==2)? 1 :2;
    }

    checkGameEndFull(): boolean {
        let isFull = true;
        if (this.gamefield.includes(0)){
            isFull = false;
        }
        if (isFull){
            console.log('field is full');
            this.gameEnd();
            return true;
        } else { 
            return false;
        }
      }

      gameEnd(){
        this.gameStatus = Status.STOP;
      }

      checkGameEndWinner() {

      }
}
