export interface Vita {
  yearOfDegree?: Date;
  experience?: Experience[];
}

export interface Experience {
  name: string;
  start: Date;
  end: Date;
}

export interface LanguageExperience {
  language: string;
  yearsOfExperience: number;
}
