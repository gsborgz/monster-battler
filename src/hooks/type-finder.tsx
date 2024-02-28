import { Type } from '../models/type';
import types from '../resources/types.json';

export type TypeFinderHookData = {
  findAllTypes: () => Type[];
  findOneType: (id: number) => Type;
  findAdvantages: (type: Type) => Type[];
  findWeaknesses: (type: Type) => Type[];
  findResistances: (type: Type) => Type[];
  findImmunities: (type: Type) => Type[];
}

export function useTypeFinder(): TypeFinderHookData {
  function findAllTypes(): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(type => type.id !== 0);

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  function findOneType(id: number): Type {
    const typeList = types as unknown as Type[];
    const result = typeList.find(type => type.id === id);

    if (!result) {
      return typeList[0];
    }

    return result;
  }

  function findAdvantages(type: Type): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(item => item.weaknesses.includes(type.id));

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  function findWeaknesses(type: Type): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(item => type.weaknesses.includes(item.id));

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  function findResistances(type: Type): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(item => type.resistances.includes(item.id));

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  function findImmunities(type: Type): Type[] {
    const typeList = types as unknown as Type[];
    const typesFiltered = typeList.filter(item => type.immunities.includes(item.id));

    return typesFiltered.sort((type1, type2) => type1.index - type2.index);
  }

  return { findAllTypes, findOneType, findAdvantages, findWeaknesses, findResistances, findImmunities };
}
