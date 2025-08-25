import React from 'react';
import { Gender, type Form } from './types';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../schema';
import { BUTTON_CLASS, INPUT_CLASS } from './styleConst';
import type { openModal } from './Forms';

export default function ReactHookModal({
  setOpenModal,
  onSubmit,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<openModal>>;
  onSubmit: (data: Form) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema), mode: 'onChange' });

  return (
    <Modal onClose={() => setOpenModal(null)}>
      <h3 className="mt-1">Form with react-hook-form</h3>
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

        <button className={BUTTON_CLASS} type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </Modal>
  );
}
