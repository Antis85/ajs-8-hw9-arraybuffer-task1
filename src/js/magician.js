import MathCharacter from './app';

export default class Magician extends MathCharacter {
  constructor(attack) {
    super();
    this.damageBase = attack;
  }
}
