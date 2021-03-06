import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import {FormsModule} from '@angular/forms';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: 'game', component: GameComponent},
      {path: 'form', component: FormComponent},
      { path: '**', redirectTo: 'form'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
