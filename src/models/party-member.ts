import { Move } from "./move";
import { Quirk } from "./quirk";
import { Species, Stats } from "./species";

export class PartyMember {
  id: number;
  stats: Stats;
  name: string;
  species: Species;
  level: number;
  experience: number;
  condition?: Condition;
  moves: [Move, Move | null, Move | null, Move, | null];
  quirks?: [Quirk, Quirk];
  singularPoints: Stats;
  reinforcementPoints: Stats;
}

export enum Condition {
  Burning = 'burning',
  Frozen = 'frozen',
  Paralyzed = 'paralyzed',
  Poisoned = 'poisoned',
  Asleep = 'asleep',
  Dizzy = 'dizzy',
}