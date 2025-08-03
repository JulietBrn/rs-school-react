import { useState } from 'react';

function BugCreator() {
  const [triggerError, setTriggerError] = useState(false);

  function throwError() {
    throw new Error('This is a test error');
  }

  if (triggerError) {
    throwError();
  }

  return (
    <div className="p-4">
      <button
        onClick={() => setTriggerError(true)}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Error button
      </button>
    </div>
  );
}

export { BugCreator };
