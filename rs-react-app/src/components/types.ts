export const Gender = {
  female: 'female',
  male: 'male',
  other: 'other',
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];
