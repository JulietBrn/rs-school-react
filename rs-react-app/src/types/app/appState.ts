interface AppState {
  inputValue: string;
  prevLink?: string | null;
  nextLink?: string | null;
  currentPage: number;
  countPerPage: number;
  count: number;
}
interface TopControlsProps {
  inputValue: string;
}

export { type AppState, type TopControlsProps };
