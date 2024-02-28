import { Move, MoveCategory, MoveEffect, MoveTarget } from '@/models/move';
import { PartyMember } from '@/models/party-member';
import { useTypeFinder } from './type-finder';

export type BattleHookData = {
  useMove: (user: PartyMember, target: PartyMember[], move: Move) => void;
}

export function useBattle(): BattleHookData {
  const { findOneType } = useTypeFinder();

  function useMove(user: PartyMember, targets: PartyMember[], move: Move): void {
    targets.forEach(target => {
      let damage = 0;
      let effectiveness = 0;

      switch (move.category) {
        case MoveCategory.Meelee:
          const userMeeleeAttack = user.species.stats.meeleeAttack + user.singularPoints.meeleeAttack + user.reinforcementPoints.meeleeAttack;
          const targetMeeleeDeffense = target.species.stats.meeleeDefense + target.singularPoints.meeleeDefense + target.reinforcementPoints.meeleeDefense;

          damage = (move.power + userMeeleeAttack) / targetMeeleeDeffense;
          break;
        case MoveCategory.Ranged:
          const userRangedAttack = user.species.stats.rangedAttack + user.singularPoints.rangedAttack + user.reinforcementPoints.rangedAttack;
          const targetRangedDeffense = target.species.stats.rangedDefense + target.singularPoints.rangedDefense + target.reinforcementPoints.rangedDefense;

          damage = (move.power * userRangedAttack) / targetRangedDeffense;
          break;
        default:
          applyEffect(target, move.effect);
          break;
      }

      if (user.species.types.includes(move.type)) {
        damage *= 1.5;
      }

      target.species.types.forEach(typeId => {
        if (typeId) {
          const targetType = findOneType(typeId);

          if (targetType.weaknesses.includes(move.type)) {
            damage *= 2;
            effectiveness += 1;
          }

          if (targetType.resistances.includes(move.type)) {
            damage /= 2;
            effectiveness -= 1;
          }

          if (targetType.immunities.includes(move.type)) {
            damage = 0;
            effectiveness = 0;
          }
        }
      });

      const newHp = target.stats.hp - damage;

      target.stats.hp = newHp < 0 ? 0 : newHp;
    });
  }

  function applyEffect(target: PartyMember, effect: MoveEffect): void {
    switch (effect) {
      case MoveEffect.Burn:
        return burn(target);
      case MoveEffect.Freeze:
        return freeze(target);
      case MoveEffect.Paralyzis:
        return paralyzis(target);
      case MoveEffect.Poison:
        return poison(target);
      case MoveEffect.Sleep:
        return sleep(target);
      case MoveEffect.Dizzy:
        return dizzy(target);
      case MoveEffect.Heal:
        return heal(target, 10);
      case MoveEffect.MeeleeDeffenseUp:
        return meeleeDeffenseUp(target, 10);
      case MoveEffect.RangedDeffenseUp:
        return rangedDeffenseUp(target, 10);
      case MoveEffect.MeeleeAttackUp:
        return meeleeAttackUp(target, 10);
      case MoveEffect.RangedAttackUp:
        return rangedAttackUp(target, 10);
      case MoveEffect.SpeedUp:
        return speedUp(target, 10);
      default:
        return;
    }
  }

  function burn(target: PartyMember): void {
    // TODO: Implement burn effect
  }

  function freeze(target: PartyMember): void {
    // TODO: Implement freeze effect
  }

  function paralyzis(target: PartyMember): void {
    // TODO: Implement paralyzis effect
  }

  function poison(target: PartyMember): void {
    // TODO: Implement poison effect
  }

  function sleep(target: PartyMember): void {
    // TODO: Implement sleep effect
  }

  function dizzy(target: PartyMember): void {
    // TODO: Implement dizzy effect
  }

  function heal(target: PartyMember, amount: number): void {
    // TODO: Implement heal
  }

  function meeleeDeffenseUp(target: PartyMember, amount: number): void {
    // TODO: Implement meelee deffense up
  }

  function rangedDeffenseUp(target: PartyMember, amount: number): void {
    // TODO: Implement ranged deffense up
  }

  function meeleeAttackUp(target: PartyMember, amount: number): void {
    // TODO: Implement meelee attack up
  }

  function rangedAttackUp(target: PartyMember, amount: number): void {
    // TODO: Implement ranged attack up
  }

  function speedUp(target: PartyMember, amount: number): void {
    // TODO: Implement speed up
  }

  return { useMove };
}
