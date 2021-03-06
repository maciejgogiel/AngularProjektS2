import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {Player} from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() submit = new EventEmitter<Player>();

  // tslint:disable-next-line:variable-name
 public constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  submitForm(form: FormGroup) {
    this.submit.emit(form.value);
    this._router.navigate(['/game']);
  }

}
