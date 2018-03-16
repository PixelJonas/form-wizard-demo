import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ApplicationFormState} from "./application.reducers";


export const getStepFeatureState = createFeatureSelector<ApplicationFormState>('application');

export const getStepsForm = createSelector(getStepFeatureState, (state: ApplicationFormState) => state.steps);
