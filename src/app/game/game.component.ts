import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
// import {Player} from '../app.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerData;
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter();
  public points = 0;


 // tslint:disable-next-line:variable-name
 public constructor(private _router: Router) { }


  ngOnInit(): void {
  }

  onLineCleared() {
    this.points++;
  }

  closeGame() {
    this.close.emit();
// tslint:disable-next-line:align
this._router.navigate(['/form']);
  }

}
