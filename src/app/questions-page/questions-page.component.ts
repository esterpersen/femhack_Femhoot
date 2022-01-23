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
      correctAnswer: "Sara",
      incorrectAnswer1: "Ester",
      incorrectAnswer2: "Xavi",
      incorrectAnswer3: "Montagut",
    }
  }
  showComponent: boolean = false;

  constructor(private gameService: GameService ) { }

  ngOnInit(): void {
  }

  getAQuestion(){
    console.log("I want to get a question!");
    this.questionToSend = this.gameService.getSingleQuestion();
    this.showComponent = true;
  }



}
