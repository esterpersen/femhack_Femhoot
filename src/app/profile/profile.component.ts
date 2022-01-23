import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private gameService: GameService) { }

  updatedUserName : string = "";

  ngOnInit(): void {
    this.updatedUserName = this.gameService.user.username;
    console.log("updatedUserName: ",this.updatedUserName);
  }

  

  // let user = "";
  // const form = document.querySelector(".form");
  // form.addEventListener("submit", saveUserName);
  // let profileUserName = document.querySelector(".card-title");
  
  // function saveUserName(event) {
  //   event.preventDefault();
  //   user = document.getElementsByName("user")[0].value;
  //   profileUserName.innerHTML = <h5 class="card-title">${user}</h5>;
  // }

}
