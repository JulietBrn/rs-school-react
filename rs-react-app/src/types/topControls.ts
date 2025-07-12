interface TopControlsState {
  inputValue: string;
  data: [];
  error?: string | null;
  isLoading?: boolean;
}
interface TopControlsProps {
  inputValue: string;
}

export { type TopControlsState, type TopControlsProps };
