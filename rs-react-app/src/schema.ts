import z from 'zod';
import { Gender } from './components/types';

const schema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .regex(/^[A-Z][a-zA-Z]*$/, 'Name must start with an uppercase letter'),

    age: z.string().refine(
      (val) => {
        const num = Number(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: 'Age must be a positive number',
      }
    ),

    email: z.email('Email is not valid'),

    password: z
      .string()
      .refine((value) => /[0-9]/.test(value), {
        message: 'Password must contain a number',
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must contain an uppercase letter',
      })
      .refine((value) => /[a-z]/.test(value), {
        message: 'Password must contain a lowercase letter',
      })
      .refine((value) => /[!@#$%^&*]/.test(value), {
        message: 'Password must contain a special character',
      }),

    confirmPassword: z.string(),

    gender: z.enum([Gender.female, Gender.male, Gender.other]),

    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),

    // picture: z
    //   .instanceof(File)
    //   .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
    //     message: 'Only JPG/PNG files allowed',
    //   }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export { schema };
