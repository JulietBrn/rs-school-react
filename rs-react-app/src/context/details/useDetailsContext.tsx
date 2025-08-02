import { useContext } from 'react';
import { DetailsContext } from './DetailsContext';

export function useDetailsContext() {
  const context = useContext(DetailsContext);
  if (!context)
    throw new Error('useDetailsContext must be used within DetailsProvider');
  return context;
}
