export class Species {
  id: number;
  index: number;
  name: string;
  description: string;
  stats: Stats;
  types: [number, number | null];
  quirks: number[];
  moves: number[];
}

export class Stats {
  hp: number;
  meeleeAttack: number;
  meeleeDefense: number;
  rangedAttack: number;
  rangedDefense: number;
  speed: number;
};