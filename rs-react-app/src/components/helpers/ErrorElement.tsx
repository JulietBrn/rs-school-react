function ErrorElement({ message }: { message: string }) {
  return (
    <div className="error">
      <p>Error: {message}</p>
    </div>
  );
}

export { ErrorElement };
