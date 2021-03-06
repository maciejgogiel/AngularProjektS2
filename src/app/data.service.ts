import { Injectable } from '@angular/core';
import {Player} from './app.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {
// tslint:disable-next-line:variable-name
private _data = Player;
  constructor() { }

// tslint:disable-next-line:typedef
public getPlayer() {
  return this._data;
}

}
