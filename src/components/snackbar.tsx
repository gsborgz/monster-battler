'use client'

import { useContext } from 'react';
import { SnackbarContext } from '@/providers/snackbar';

export type SnackbarProps = {
  message: string;
  type: SnackbarType;
}

export enum SnackbarType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export default function Snackbar() {
  const { open, message, type } = useContext(SnackbarContext);
  const color = getSnackbarTypeColor(type);

  if (!open) {
    return null;
  }

  return (
    <section className='container fixed z-30 flex items-end justify-center w-full bottom-3'>
      <div className={ `snackbar ${color} text-neutral-50 font-bold max-w-md text-center p-3 rounded-xl` }>
        <span>{message}</span>
      </div>
    </section>
  );
}

function getSnackbarTypeColor(type: SnackbarType) {
  switch (type) {
    case SnackbarType.ERROR:
      return 'bg-red-500';
    case SnackbarType.WARNING:
      return 'bg-yellow-500';
    case SnackbarType.SUCCESS:
      return 'bg-green-500';
    default:
      return 'bg-cyan-500';
  }
}
