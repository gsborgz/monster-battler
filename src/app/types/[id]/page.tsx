'use client'

import { useEffect, useState } from 'react';
import { Type } from '@/models/type';
import { useTypeFinder } from '@/hooks/type-finder';
import TypeChip from '@/components/type-chip';
import { useDictionary } from '@/hooks/dictionary';
import { usePathname } from 'next/navigation';

export default function OneType() {
  const pathName = usePathname();
  const id = Number(pathName.replace('/types/', ''));
  const { findOneType, findAdvantages } = useTypeFinder();
  const { locale } = useDictionary();
  const [mounted, setMounted] = useState<boolean>(false);
  const [type, setType] = useState<Type>();

  useEffect(() => {
    setMounted(true);
  }, [findOneType]);

  if (!mounted) {
    return null;
  }

  if (!type) {
    setType(findOneType(id));

    return null;
  }

  return (
    <section className='flex flex-col items-center gap-4 p-10'>
      <div className='flex flex-col gap-4'>
        <span className='text-xl bold'>{locale(`type.${type.name}.name`)}</span>

        <span>{locale(`type.${type.name}.description`)}</span>

        {findAdvantages(type).length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{`${locale('type.advantages')}:`}</span>

            <div className='grid grid-cols-3 gap-2'>
              {findAdvantages(type).map((advantage) => (
                <TypeChip key={advantage.id} type={advantage} size='sm' />
              ))}
            </div>
          </div>
        ) : null}

        {type.weaknesses.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{`${locale('type.weaknesses')}:`}</span>

            <div className='grid grid-cols-3 gap-2'>
              {type.weaknesses.map((weakness) => (
                <TypeChip key={weakness} type={findOneType(weakness)} size='sm' />
              ))}
            </div>
          </div>
        ) : null}

        {type.resistances.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{`${locale('type.resistances')}:`}</span>

            <div className='grid grid-cols-3 gap-2'>
              {type.resistances.map((resistance) => (
                <TypeChip key={resistance} type={findOneType(resistance)} size='sm' />
              ))}
            </div>
          </div>
        ) : null}

        {type.immunities.length > 0 ? (
          <div className='flex flex-col gap-1'>
            <span>{`${locale('type.immunities')}:`}</span>

            <div className='grid grid-cols-3 gap-2'>
              {type.immunities.map((immunity) => (
                <TypeChip key={immunity} type={findOneType(immunity)} size='sm' />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
