'use client'

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import { Type } from '@/models/type';
import { useTypeFinder } from '@/hooks/type-finder';
import TypeChip from '@/components/type-chip';

export default function Types() {
  const { findAllTypes } = useTypeFinder();
  const [types, setTypes] = useState<Type[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    if (!types.length) {
      setTypes(findAllTypes());
    }
  }, [findAllTypes, types]);

  if (!mounted) {
    return null;
  }

  return (
    <section className='flex flex-col items-center gap-4'>
      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
        {types?.map((type: Type) => (<TypeChip type={type} key={type.id} onClick={() => redirect(`types/${type.id}`)} cursor='pointer' />))}
      </div>
    </section>
  );
}
