import { GameService } from './../services/game.service';
import { Question } from './../interfaces/question';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionReceived !: Question;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    //* CODE TO DEVELOP IN THE FUTURE: GET THE ANSWERS TO SHOW IN A RANDOM ORDER
    //this.gameService.disorderAnswerList(this.questionReceived); 
  }

  checkAnswer(resp: any) {
    if (!this.gameService.pointsAdded) {
      if (this.questionReceived.answers.correctAnswer == resp) {
        this.gameService.user.gamePoints += 10;
        this.gameService.pointsAdded = true;
        this.gameService.isClicked = true;
      }
      this.gameService.isClicked = true;
    }
  }

}
