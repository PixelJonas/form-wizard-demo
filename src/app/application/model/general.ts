export interface General {
  username: string;
  firstname?: string;
  lastname?: string;
  role?: ROLE;
}

export enum ROLE {
  IT_GUY = 'IT_GUY',
  PILOT = 'PILOT',
}
