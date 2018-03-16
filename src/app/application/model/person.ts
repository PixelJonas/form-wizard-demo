export interface PersonalInformation {
  birthday?: Date;
  address?: string;
  gender?: GENDER;

  itExperience?: IT_EXPERIENCE,
}

export enum GENDER {
  MALE,
  FEMALE
}

export enum IT_EXPERIENCE {
  BASIC,
  INTERMEDIATE,
  EXPERT,
}
