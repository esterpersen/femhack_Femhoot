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

}
