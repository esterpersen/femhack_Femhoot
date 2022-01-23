import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private gameService: GameService) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    loginUsername: [null, [Validators.required]],
    loginGameNumber: [null, [Validators.required]]
  })


  updateUser(){
    let newUserName: string = this.loginForm.value.loginUsername;
    this.gameService.user.gamePoints = 0;
    this.gameService.updateUser(newUserName);
  }

  reset(form: FormGroup) {
    form.reset();
  }

}
