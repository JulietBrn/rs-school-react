interface AppState {
  inputValue: string;
  data: [];
  error?: string | null;
  isLoading?: boolean;
}
interface TopControlsProps {
  inputValue: string;
}

export { type AppState, type TopControlsProps };
