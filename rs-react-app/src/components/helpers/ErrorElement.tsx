function ErrorElement({ error }: { error: unknown }) {
  let errorMessage: string | null = null;

  if (error) {
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (
      typeof error === 'object' &&
      'message' in error &&
      typeof error.message === 'string'
    ) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Some error occured';
    }
  }

  return (
    <div className="error">
      <p>Error: {errorMessage}</p>
    </div>
  );
}

export { ErrorElement };
