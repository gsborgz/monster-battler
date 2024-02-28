import { Type } from '@/models/type';
import species from '@/resources/species.json';
import { Species } from '../models/species';

export type SpeciesFinderHookData = {
  findAllSpecies: () => Species[];
  findOneSpecies: (id: number) => Species;
}

export function useSpeciesFinder(): SpeciesFinderHookData {
  function findAllSpecies(): Species[] {
    const speciesList = species as unknown as Species[];
    const speciesFiltered = speciesList.filter(spc => spc.id !== 0);

    return speciesFiltered.sort((spc1, spc2) => spc1.index - spc2.index);
  }

  function findOneSpecies(id: number): Species {
    const speciesList = species as unknown as Species[];
    const result = speciesList.find(spc => spc.id === id);

    if (!result) {
      return speciesList[0];
    }

    return result;
  }

  return { findAllSpecies, findOneSpecies };
}
