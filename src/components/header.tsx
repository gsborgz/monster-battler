'use client'

import React, { useEffect } from 'react';

export default function Header() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className='flex items-center fixed top-0 z-30 w-full h-[7%] !p-0 sm:px-4 border-b bg-neutral-50 dark:bg-slate-900 border-neutral-200 dark:border-slate-700'>
      <nav className='w-full grid grid-cols-2 items-center'></nav>
    </header>
  );
}