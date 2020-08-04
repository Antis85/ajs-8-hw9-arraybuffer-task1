export default class MathCharacter {
  constructor(attack) {
    this.stoned = false;
    this.damageBase = attack;
    this.damageCurrent = attack;
  }

  set isStoned(stoned) {
    this.stoned = stoned;
  }

  set calculateDamage(cellRange) {
    this.damageCurrent = this.damageBase;
    const stonedDamage = Math.round(Math.log2(cellRange) * 5);
    const normalDamage = ((cellRange - 1) * 10 * this.damageBase) / 100;
    if (this.stoned) {
      this.damageCurrent -= stonedDamage + normalDamage;
    }
    if (!this.stoned) {
      this.damageCurrent -= normalDamage;
    }
  }

  get calculateDamage() {
    return this.damageCurrent;
  }

  get isStoned() {
    return this.stoned;
  }
}
