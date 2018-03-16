import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {getStepsForm} from "../../store/selector";
import {ValidationErrors} from "@angular/forms";

export class Breadcrumb {
  formKey: string;
  title: string;
  errors: ValidationErrors
}

export class BreadcrumbError {
  formKey: string;
  errors: ValidationErrors
}

@Component({
  selector: 'wizz-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnChanges {

  @Input() breadcrumbs: Breadcrumb[];
  @Output() click = new EventEmitter<string>();

  formState$;

  constructor(private store: Store<any>) {
    this.formState$ = store.select(getStepsForm);
  }

  @Input() set errors(errors: BreadcrumbError[]) {
    this.errors.forEach(error => this.breadcrumbs.find(breadcrumb => breadcrumb.formKey == error.formKey).errors = error.errors)
  };

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
