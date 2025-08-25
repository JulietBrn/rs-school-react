export const Gender = {
  female: 'female',
  male: 'male',
  other: 'other',
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];


export type Form = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: Gender;
  terms: boolean;
};
