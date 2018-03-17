import { Action } from '@ngrx/store';
import { createFormGroupReducerWithUpdate, createFormGroupState, formGroupReducer, FormGroupState, validate } from 'ngrx-forms';
import { General, ItGuy, PersonalInformation, Pilot, Vita } from '../model';
import { required } from 'ngrx-forms/validation';

const GENERAL_ID = 'application_general';
const IT_GUY_ID = 'application_it_guy';
const PERSON_ID = 'application_person';
const PILOT_ID = 'application_pilot';
const VITA_ID = 'application_vita';


const initialFormStateGeneral = createFormGroupState<General>(GENERAL_ID, {
  username: '',
});
const initialFormStateItGuy = createFormGroupState<ItGuy>(IT_GUY_ID, {});
const initialFormStatePerson = createFormGroupState<PersonalInformation>(PERSON_ID, {});
const initialFormStatePilot = createFormGroupState<Pilot>(PILOT_ID, {});
const initialFormStateVita = createFormGroupState<Vita>(VITA_ID, {});

export interface ApplicationFormState {
  generalForm: FormGroupState<General>;
  itGuyForm: FormGroupState<ItGuy>;
  personForm: FormGroupState<PersonalInformation>;
  pilotForm: FormGroupState<Pilot>;
  vitaForm: FormGroupState<Vita>;
}

const initialState: ApplicationFormState = {
  generalForm: initialFormStateGeneral,
  itGuyForm: initialFormStateItGuy,
  personForm: initialFormStatePerson,
  pilotForm: initialFormStatePilot,
  vitaForm: initialFormStateVita,
};

export function applicationFormReducer(state = initialState, action: Action): ApplicationFormState {
  const generalForm = formGroupReducer(state.generalForm, action);
  const generalFormUpdate = createFormGroupReducerWithUpdate<General>({username: validate(required)});
  const itGuyForm = formGroupReducer(state.itGuyForm, action);
  const personForm = formGroupReducer(state.personForm, action);
  const pilotForm = formGroupReducer(state.pilotForm, action);
  const vitaForm = formGroupReducer(state.vitaForm, action);

  if (generalForm !== state.generalForm) {
    state = {...state, ...{generalForm: generalFormUpdate(state.generalForm, action)}};
  }
  if (itGuyForm !== state.itGuyForm) {
    state = {...state, itGuyForm};
  }
  if (personForm !== state.personForm) {
    state = {...state, personForm};
  }
  if (pilotForm !== state.pilotForm) {
    state = {...state, pilotForm};
  }
  if (vitaForm !== state.vitaForm) {
    state = {...state, vitaForm};
  }

  switch (action.type) {
    default: {
      return state;
    }
  }
}
