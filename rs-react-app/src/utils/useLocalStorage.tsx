'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, defaultValue = '') {
  const [storedValue, setStoredValue] = useState<string>(() => {
    if (typeof window === 'undefined') return defaultValue;
    return localStorage.getItem(key) || defaultValue;
  });

  function setValue(value: string) {
    setStoredValue(value);
  }

  function removeValue(key: string) {
    localStorage.removeItem(key);
    setStoredValue('');
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, storedValue);
    }
  }, [key, storedValue]);

  return { storedValue, setValue, removeValue };
}
