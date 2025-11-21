import { useEffect } from 'react';
import { useThemeConsumer } from '../../stores/theme-store';

export const useThemeSync = () => {
  const theme = useThemeConsumer();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
};
