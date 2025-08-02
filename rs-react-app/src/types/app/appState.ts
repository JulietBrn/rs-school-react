import type { Card } from '../card';

interface AppState {
  inputValue: string;
  data: Array<Card>;
  prevLink?: string | null;
  nextLink?: string | null;
  currentPage: number;
  countPerPage: number;
  count: number;
  error?: string | null;
  isLoading?: boolean;
}
interface TopControlsProps {
  inputValue: string;
}

export { type AppState, type TopControlsProps };
