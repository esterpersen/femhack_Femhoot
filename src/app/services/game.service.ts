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

  updateUser(newUser: string): string {
    this.user.username = newUser;
    return this.user.username;
  }

  private setNewUser_localStorage(user: User): void {
    localStorage.setItem("New User", JSON.stringify(user));
  }

  private getNewUser_localStorage(): User {
    return JSON.parse(localStorage.getItem("New User")!);
  }

  getSingleQuestion(): Question {
    this.currentQuestion = this.questionsDDBB[this.currentQuestionId];
    this.currentQuestionId++;
    return this.currentQuestion;

  }

  disorderAnswerList(question: Question) {
    let answerListOrdered = question.answers;

  }

  //   answerListOrdered = [
  //     "Ada Lovelace",
  //     "Charles Babbage",
  //     "Konrad Zuse",
  //     "Fran Bilas",
  //   ];
  //   answerListDisordered = [];

  //   giveRandomAnswer() {
  //     let randomIndex = Math.floor(Math.random() * this.answerListOrdered.length); //generate random index
  //     let randomAnswer = this.answerListOrdered[randomIndex]; //select the answer associate to this index
  //     this.answerListDisordered.push(randomAnswer); //add the random answer to the new array
  //     this.answerListOrdered = this.answerListOrdered.filter(function (item) {
  //       return item !== randomAnswer; //update answer list to remove the selected item
  //     });
  //   }

  //   for(let i = 0; i < 4; i++) {
  //   giveRandomAnswer();
  // }

}
