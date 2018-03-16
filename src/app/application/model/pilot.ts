import { Vita } from './vita';

export interface Pilot {
  base?: Vita;
  flyingExperience?: FlightExperience[];
}

export interface FlightExperience {
  model: string;
  flightHours: number;
  yearsOfExperience: number;
}
