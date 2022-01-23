import { QuestionDDBB } from '../mock-database/question-ddbb';
import { Question } from './../interfaces/question';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public questionsDDBB: Question[] = QuestionDDBB;

  public user: User =
    {
      username: "",
      gamePoints: 0
    }
  public currentQuestion!: Question;
  public currentQuestionId: number = 0;

  public pointsAdded: boolean = false;
  public isClicked: boolean = false;

  public answerListOrdered: String[] = [];
  public answerListDisordered: String[] = [];

  updateUser(newUser: string): string {
    this.user.username = newUser;
    this.setNewUser_localStorage(this.user);
    return this.user.username;
  }

  private setNewUser_localStorage(user: User): void {
    localStorage.setItem("User", JSON.stringify(user));
  }

  public getNewUser_localStorage(): User {
    return JSON.parse(localStorage.getItem("User")!);
  }

  getSingleQuestion(): Question {
    this.currentQuestion = this.questionsDDBB[this.currentQuestionId];
    this.currentQuestionId++;
    return this.currentQuestion;
  }

  //* CODE TO DEVELOP IN THE FUTURE: GET THE ANSWERS TO SHOW IN A RANDOM ORDER
  disorderAnswerList(question: Question) {
    this.answerListOrdered.push(question.answers.correctAnswer, question.answers.incorrectAnswer1, question.answers.incorrectAnswer2,question.answers.incorrectAnswer3);
    this.giveRandomAnswer();
  }

  giveRandomAnswer() {
    let randomIndex = Math.floor(Math.random() * this.answerListOrdered.length); //generate random index
    let randomAnswer = this.answerListOrdered[randomIndex]; //select the answer associate to this index
    this.answerListDisordered.push(randomAnswer); //add the random answer to the new array
    this.answerListOrdered = this.answerListOrdered.filter(function (item) {
      return item !== randomAnswer; //update answer list to remove the selected item
    });
  }

}


