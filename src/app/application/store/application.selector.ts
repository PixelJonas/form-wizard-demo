import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationFormState } from './application.reducers';

export const getApplicationStateStore = createFeatureSelector<ApplicationFormState>('application');

export const getGeneralForm = createSelector(getApplicationStateStore, (state: ApplicationFormState) => state.generalForm);
