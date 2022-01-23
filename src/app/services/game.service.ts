import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public user: User =
    {
      username : "",
      gamePoints : 0
    }

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


// JAVASCRIPT FOR QUESTION PAGE + QUESTION
// const btnRequestQuestion = document.querySelector(".btn-request-question");
// btnRequestQuestion.addEventListener("click", getAQuestion);

// const question = document.querySelector(".question");

// let answer = null;

// function getAQuestion() {
//   question.innerHTML = CREATED IN THE QUESTION.HTML
//                 
//   answer = document.querySelector(".answer");
//   answer.addEventListener("click", checkAnswer);
// }

// const point = document.querySelector(".point");

// function checkAnswer(event) {
//   let answer = event.target.id;
//   let correctAnswer = "answer1";
//   let pointsNumber = 0;
//   console.log(answer);
//   if (answer === correctAnswer) {
//     pointsNumber += 10;
//     point.innerHTML = <p class="card-text point">SCORE : ${pointsNumber} points</p>;
//   }
// }

}
