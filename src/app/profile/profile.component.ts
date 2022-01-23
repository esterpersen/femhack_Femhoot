import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private gameService: GameService) { }

  updatedUser: User = this.gameService.user;

  ngOnInit(): void {
    this.updatedUser.username = this.gameService.user.username;
    console.log("updatedUserName: ",this.updatedUser.username);
    this.updatedUser.gamePoints = this.gameService.user.gamePoints;
  }
  
}
