import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  return createPortal(
    <>
      <div className="fixed inset-0  bg-black" onClick={onClose}></div>

      <div
        role="dialog"
        aria-modal="true"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg w-3xs overflow-y-auto max-h-[90dvh]"
      >
        <div className="flex justify-end">
          <button
            className="bg-pink-500 text-white p-0.5 rounded cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
}
