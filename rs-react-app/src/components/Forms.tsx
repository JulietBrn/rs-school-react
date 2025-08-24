import React, { useState } from 'react';
import Modal from './Modal';

export default function Forms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Hello forms!</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h3>Modal</h3>
        </Modal>
      )}
    </>
  );
}
