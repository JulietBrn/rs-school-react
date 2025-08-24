import React, { useState } from 'react';
import { BUTTON_CLASS } from './styleConst';
import ReactHookModal from './ReactHookModal';
import UncontrolledModal from './UncontrolledModal';

const openModalInitialState = null;
export type openModal = 'rhfModal' | 'uncontrolledModal' | null;

export default function Forms() {
  const [openModal, setOpenModal] = useState<openModal>(openModalInitialState);

  // input control to upload picture (validate size and extension, save in redux store as base64)
  // autocomplete control to select country (all countries should be stored in the Redux store)

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <h1>Hello forms!</h1>
      <div className="flex gap-2">
        <button
          className={BUTTON_CLASS}
          onClick={() => setOpenModal('rhfModal')}
        >
          Open modal with react-hook-form
        </button>

        <button
          className={BUTTON_CLASS}
          onClick={() => setOpenModal('uncontrolledModal')}
        >
          Open uncontrolled modal
        </button>
      </div>

      {openModal === 'rhfModal' && (
        <ReactHookModal onSubmit={onSubmit} setOpenModal={setOpenModal} />
      )}

      {openModal === 'uncontrolledModal' && (
        <UncontrolledModal onSubmit={onSubmit} setOpenModal={setOpenModal} />
      )}
    </>
  );
}
