import { Action, ActionReducer } from '@ngrx/store';

interface User {
  username: string;
}

export interface State {
  users: User[];
}

const initialState: State = {
  users: [
    {username: 'Jonas'},
    {username: 'Niklas'},
    {username: 'Gunnar'},
    {username: 'Dirk'},
    {username: 'Josias'},
    {username: 'Florian'},
  ],
};

export const userReducer: ActionReducer<State> = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
