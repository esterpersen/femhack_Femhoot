import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent }

    ]
  }, {
    path: 'game', component: QuestionsPageComponent, children: [
      {
        path: ':id', component: QuestionComponent
      }
    ]

  }, {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
