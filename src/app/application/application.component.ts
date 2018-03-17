import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getGeneralForm } from './store/application.selector';
import { Observable } from 'rxjs/Observable';
import { FormGroupState } from 'ngrx-forms';
import { General } from './model';

@Component({
  selector: 'wizz-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {

  generalForm$: Observable<FormGroupState<General>>;

  constructor(private store: Store<any>) {
    this.generalForm$ = store.select(getGeneralForm);
  }

  ngOnInit() {
  }

}
