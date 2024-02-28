import { useState } from 'react';
import { createContext } from 'react';
import { SnackbarProps, SnackbarType } from '@/components/snackbar';

export type SnackbarData = SnackbarProps & {
  open: boolean;
  openSnackbar: OpenSnackbarFunction;
}

export type OpenSnackbarFunction = (message: string, type: SnackbarType, duration?: number) => void;

export const SnackbarContext = createContext({} as SnackbarData);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<SnackbarType>(SnackbarType.INFO);

  function openSnackbar(message: string, type: SnackbarType, duration?: number) {
    setMessage(message);
    setType(type);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, duration || 3000);
  }

  return (
    <SnackbarContext.Provider value={{ openSnackbar, message, open, type }}>
      { children }
    </SnackbarContext.Provider>
  );
}