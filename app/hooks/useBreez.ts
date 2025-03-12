import { useEffect, useState } from 'react';
import BreezService from '../services/breez/breezService';

export const useBreez = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const breezService = BreezService.getInstance();

  useEffect(() => {
    const initializeBreez = async () => {
      try {
        const success = await breezService.initialize();
        setIsInitialized(success);
        if (!success) {
          setError('Failed to initialize Breez SDK');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setIsInitialized(false);
      }
    };

    initializeBreez();
  }, []);

  return {
    breezService,
    isInitialized,
    error,
  };
};