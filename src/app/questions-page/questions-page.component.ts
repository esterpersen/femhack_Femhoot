import { Question } from './../interfaces/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent implements OnInit {

  public questionToSend: Question = {
    question: "who is the smartest in the class?",
    answers : {
      correctAnswer: "Sara",
      incorrectAnswer1: "Sara",
      incorrectAnswer2: "Sara",
      incorrectAnswer3: "Sara",
    }
  }
  showComponent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getAQuestion(){
    console.log("I want to get a question!");
    this.showComponent = true;
  }



}
