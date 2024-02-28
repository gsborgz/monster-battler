import { Type } from '@/models/type';

export class Move {
  id: number;
  name: string;
  description: string;
  type: number;
  category: MoveCategory;
  power: number;
  cost: number;
  target: MoveTarget;
  effect: MoveEffect;
  effectChance: number;
}

export enum MoveCategory {
  Meelee = 'meelee',
  Ranged = 'ranged',
  Status = 'status',
}

// See src/hooks/move-effect.tsx
export enum MoveEffect {
  None = 'none',
  Burn = 'burn',
  Freeze = 'freeze',
  Paralyzis = 'paralyzis',
  Poison = 'poison',
  Sleep = 'sleep',
  Dizzy = 'dizzy',
  Heal = 'heal',
  MeeleeDeffenseUp = 'meeleeDeffenseUp',
  RangedDeffenseUp = 'rangedDeffenseUp',
  MeeleeAttackUp = 'meeleeAttackUp',
  RangedAttackUp = 'rangedAttackUp',
  SpeedUp = 'speedUp',
}

export enum MoveTarget {
  Self = 'self',
  Ally = 'ally',
  Enemy = 'enemy',
  SelfAlly = 'selfAlly',
  AllyEnemy = 'allyEnemy',
  All = 'all',
  AllButSelf = 'allButSelf',
}