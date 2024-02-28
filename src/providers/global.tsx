'use client'

import { ThemeProvider } from 'next-themes';
import { SnackbarProvider } from '@/providers/snackbar';

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SnackbarProvider>
        { children }
      </SnackbarProvider>
    </ThemeProvider>
  );
}