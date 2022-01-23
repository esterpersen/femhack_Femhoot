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
  pointsAdded: boolean = false;
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  checkAnswer(resp: any) {
    console.log(resp);
    if (!this.pointsAdded) {
      if (this.questionReceived.answers.correctAnswer == resp) {
        this.gameService.user.gamePoints += 10;
        console.log(this.gameService.user.gamePoints);
        this.pointsAdded = true;
      }
    }
  }

}
