import React, { useState } from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { Gender } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorMessage from './ErrorMessage';
import { schema } from '../schema';

const INPUT_CLASS = 'border border-gray-300 p-2 rounded block mb-4';

export default function Forms() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // input control to upload picture (validate size and extension, save in redux store as base64)
  // autocomplete control to select country (all countries should be stored in the Redux store)

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <h1>Hello forms!</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={INPUT_CLASS}
          autoComplete="name"
          {...register('name')}
        />
        {errors.name?.message && <ErrorMessage message={errors.name.message} />}

        {/* Age */}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          className={INPUT_CLASS}
          {...register('age')}
        />
        {errors.age?.message && <ErrorMessage message={errors.age.message} />}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={INPUT_CLASS}
          autoComplete="email"
          {...register('email')}
        />
        {errors.email?.message && (
          <ErrorMessage message={errors.email.message} />
        )}

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={INPUT_CLASS}
          {...register('password')}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password.message} />
        )}

        {/* Password check */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          autoComplete="new-password"
          type="password"
          id="confirmPassword"
          className={INPUT_CLASS}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword?.message && (
          <ErrorMessage message={errors.confirmPassword.message} />
        )}

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender" className={INPUT_CLASS} {...register('gender')}>
          <option value={Gender.female}>Female</option>
          <option value={Gender.male}>Male</option>
          <option value={Gender.other}>Other</option>
        </select>
        {errors.gender?.message && (
          <ErrorMessage message={errors.gender.message} />
        )}

        {/* Checkbox */}
        <label className="block mb-4 ">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            {...register('terms')}
          />
          I accept the terms and conditions
        </label>
        {errors.terms?.message && (
          <ErrorMessage message={errors.terms.message} />
        )}

        {/* Picture upload */}
        {/* <label htmlFor="picture">Picture</label>
        <input
          type="file"
          id="picture"
          className={INPUT_CLASS}
          {...register('picture')}
        />
        {errors.picture?.message && (
          <ErrorMessage message={errors.picture.message} />
        )} */}

        <button type="submit">Submit</button>
      </form>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>Modal</h3>
        </Modal>
      )}
    </>
  );
}
