import { Question } from './../interfaces/question';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent implements OnInit {

  public questionToSend: Question = {
    id: 68,
    question: "who is the smartest in the class?",
    answers : {
      correctAnswer: "Sara R.",
      incorrectAnswer1: "Ester",
      incorrectAnswer2: "Justine",
      incorrectAnswer3: "Sara M.",
    }
  }
  showComponent: boolean = false;

  constructor(private gameService: GameService ) { }

  ngOnInit(): void {
  }

  getAQuestion(){
    this.questionToSend = this.gameService.getSingleQuestion();
    this.showComponent = true;
    this.gameService.pointsAdded = false;
    this.gameService.isClicked = false;
  }

}
