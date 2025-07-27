import type { Card } from './card';

interface AppState {
  inputValue: string;
  data: Array<Card>;
  error?: string | null;
  isLoading?: boolean;
}
interface TopControlsProps {
  inputValue: string;
}

export { type AppState, type TopControlsProps };
