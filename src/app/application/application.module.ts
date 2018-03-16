import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './form/info/info.component';
import { GeneralComponent } from './form/steps/general/general.component';
import { PersonComponent } from './form/steps/person/person.component';
import { ItComponent } from './form/steps/it/it.component';
import { PilotComponent } from './form/steps/pilot/pilot.component';
import { SummaryComponent } from './form/steps/summary/summary.component';
import { ResumeComponent } from './form/steps/resume/resume.component';
import { ProgressComponent } from './form/progress/progress.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { applicationFormReducer } from './store/application.reducers';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature('application', applicationFormReducer),
  ],
  declarations: [
    ApplicationComponent,
    FormComponent,
    InfoComponent,
    GeneralComponent,
    PersonComponent,
    ItComponent,
    PilotComponent,
    SummaryComponent,
    ResumeComponent,
    ProgressComponent,
  ],
})
export class ApplicationModule {
}
