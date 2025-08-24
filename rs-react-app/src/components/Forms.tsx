import React, { useState } from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { Gender } from './types';

const INPUT_CLASS = 'border border-gray-300 p-2 rounded block mb-4';

export default function Forms() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
  // autocomplete control to select country (all countries should be stored in the Redux store)

  return (
    <>
      <h1>Hello forms!</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      <form>
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={INPUT_CLASS}
          autoComplete="name"
          {...register('name', {
            required: {
              value: true,
              message: 'Name is required',
            },
            pattern: {
              value: /^[A-Z][a-zA-Z]*$/,
              message: 'Name must start with an uppercase letter',
            },
          })}
        />

        {/* Age */}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          className={INPUT_CLASS}
          {...register('age', {
            required: {
              value: true,
              message: 'Age is required',
            },
            min: {
              value: 0,
              message: 'Age must be a positive number',
            },
          })}
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={INPUT_CLASS}
          autoComplete="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: 'Email is not valid',
            },
          })}
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={INPUT_CLASS}
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            validate: {
              hasNumber: (value) =>
                /[0-9]/.test(value) || 'Password must contain a number',
              hasUppercase: (value) =>
                /[A-Z]/.test(value) ||
                'Password must contain an uppercase letter',
              hasLowercase: (value) =>
                /[a-z]/.test(value) ||
                'Password must contain a lowercase letter',
              hasSpecialChar: (value) =>
                /[!@#$%^&*]/.test(value) ||
                'Password must contain a special character',
            },
          })}
        />

        {/* Password check */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          autoComplete="new-password"
          type="password"
          id="confirmPassword"
          className={INPUT_CLASS}
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Confirm Password is required',
            },
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = watch();
                return password === value || 'Passwords must match';
              },
            },
          })}
        />

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender" className={INPUT_CLASS} {...register('gender')}>
          <option value={Gender.female}>Female</option>
          <option value={Gender.male}>Male</option>
          <option value={Gender.other}>Other</option>
        </select>

        {/* Checkbox */}
        <label className="block mb-4 ">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            {...register('terms')}
          />
          I accept the terms and conditions
        </label>

        {/* Picture upload */}
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          id="picture"
          className={INPUT_CLASS}
          {...register('picture')}
        />
      </form>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>Modal</h3>
        </Modal>
      )}
    </>
  );
}
