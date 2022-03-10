import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void{
    this.game.gameStart();
    const currentPlayer = 'Ruch gracza: ' + this.game.currentTurn;
    var information = document.querySelector('.current-status');
    // information.innerHTML = currentPlayer;    
  }


  async clickSubField( subfield: any) : Promise<void>{
      if (this.game.gameStatus ==1 ) {
        const position = subfield.currentTarget.getAttribute('position');
        console.log(position);

        this.game.setField(position, this.game.currentTurn);
        const color = this.game.getPlayerColorClass();
        subfield.currentTarget.classList.add(color);
      }

     this.game.checkGameEndWinner();

     this.game.checkGameEndFull();


      this.game.changePlayer();
  }
}
