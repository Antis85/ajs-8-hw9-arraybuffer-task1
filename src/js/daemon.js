import MathCharacter from './app';

export default class Daemon extends MathCharacter {
  constructor(attack) {
    super();
    this.damageBase = attack;
  }
}
