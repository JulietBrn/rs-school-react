import React from 'react';
import type { openModal } from './Forms';
import { BUTTON_CLASS, INPUT_CLASS } from './styleConst';
import Modal from './Modal';
import { schema } from '../schema';
import { Gender } from './types';
import ErrorMessage from './ErrorMessage';

export default function UncontrolledModal({
  setOpenModal,
  onSubmit,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<openModal>>;
  onSubmit: (data: unknown) => void;
}) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const normalizedValues = {
      ...values,
      terms: formData.has('terms'),
    };

    const result = schema.safeParse(normalizedValues);

    if (result.success) {
      setErrors({});
      onSubmit(result.data);
      setOpenModal(null);
    } else {
      const uniqueErrors: Record<string, string> = {};
      const seen = new Set<string>();

      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        if (!seen.has(field)) {
          uniqueErrors[field] = err.message;
          seen.add(field);
        }
      });

      setErrors(uniqueErrors);
    }
  }

  return (
    <Modal onClose={() => setOpenModal(null)}>
      <h3 className="mt-1">Uncontrolled Form </h3>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={INPUT_CLASS}
          autoComplete="name"
        />
        {errors.name && <ErrorMessage message={errors.name} />}

        {/* Age */}
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" className={INPUT_CLASS} />
        {errors.age && <ErrorMessage message={errors.age} />}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={INPUT_CLASS}
          autoComplete="email"
        />
        {errors.email && <ErrorMessage message={errors.email} />}

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className={INPUT_CLASS}
        />
        {errors.password && <ErrorMessage message={errors.password} />}

        {/* Password check */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          autoComplete="new-password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className={INPUT_CLASS}
        />
        {errors.confirmPassword && (
          <ErrorMessage message={errors.confirmPassword} />
        )}

        {/* Gender */}
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" className={INPUT_CLASS}>
          <option value={Gender.female}>Female</option>
          <option value={Gender.male}>Male</option>
          <option value={Gender.other}>Other</option>
        </select>
        {errors.gender && <ErrorMessage message={errors.gender} />}

        {/* Checkbox */}
        <label className="block mb-4 ">
          <input type="checkbox" name="terms" className="mr-2 cursor-pointer" />
          I accept the terms and conditions
        </label>
        {errors.terms && <ErrorMessage message={errors.terms} />}

        <button className={BUTTON_CLASS} type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}
