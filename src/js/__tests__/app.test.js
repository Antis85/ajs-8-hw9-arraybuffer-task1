import MathCharacter from '../app';
import Magician from '../magician';
import Daemon from '../daemon';

test('Проверка создания классов Daemon, Magician', () => {
  const recieved = new Daemon(100);
  expect(recieved).toBeInstanceOf(MathCharacter);
  const recieved1 = new Magician(100);
  expect(recieved1).toBeInstanceOf(MathCharacter);
});

test('Проверка атаки на расстоянии 1 клетки', () => {
  const daemon = new Daemon(100);
  daemon.isStoned = false;
  daemon.calculateDamage = 1;
  const recieved = daemon.calculateDamage;
  const expected = 100;
  const recieved1 = daemon.isStoned;
  const expected1 = false;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 2 клетки', () => {
  const daemon = new Daemon(100);
  daemon.isStoned = false;
  daemon.calculateDamage = 2;
  const recieved = daemon.calculateDamage;
  const expected = 90;
  const recieved1 = daemon.isStoned;
  const expected1 = false;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 3 клетки', () => {
  const daemon = new Daemon(100);
  daemon.isStoned = false;
  daemon.calculateDamage = 3;
  const recieved = daemon.calculateDamage;
  const expected = 80;
  const recieved1 = daemon.isStoned;
  const expected1 = false;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 4 клетки', () => {
  const daemon = new Daemon(100);
  daemon.isStoned = false;
  daemon.calculateDamage = 4;
  const recieved = daemon.calculateDamage;
  const expected = 70;
  const recieved1 = daemon.isStoned;
  const expected1 = false;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 5 клеток', () => {
  const daemon = new Daemon(100);
  daemon.isStoned = false;
  daemon.calculateDamage = 5;
  const recieved = daemon.calculateDamage;
  const expected = 60;
  const recieved1 = daemon.isStoned;
  const expected1 = false;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 1 клетки c "дурманом"', () => {
  const mage = new Magician(100);
  mage.isStoned = true;
  mage.calculateDamage = 1;
  const recieved = mage.calculateDamage;
  const expected = 100;
  const recieved1 = mage.isStoned;
  const expected1 = true;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 2 клетки c "дурманом"', () => {
  const mage = new Magician(100);
  mage.isStoned = true;
  mage.calculateDamage = 2;
  const recieved = mage.calculateDamage;
  const expected = 85;
  const recieved1 = mage.isStoned;
  const expected1 = true;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 3 клетки c "дурманом"', () => {
  const mage = new Magician(100);
  mage.isStoned = true;
  mage.calculateDamage = 3;
  const recieved = mage.calculateDamage;
  const expected = 72;
  const recieved1 = mage.isStoned;
  const expected1 = true;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 4 клетки c "дурманом"', () => {
  const mage = new Magician(100);
  mage.isStoned = true;
  mage.calculateDamage = 4;
  const recieved = mage.calculateDamage;
  const expected = 60;
  const recieved1 = mage.isStoned;
  const expected1 = true;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});

test('Проверка атаки на расстоянии 5 клеток c "дурманом"', () => {
  const mage = new Magician(100);
  mage.isStoned = true;
  mage.calculateDamage = 5;
  const recieved = mage.calculateDamage;
  const expected = 48;
  const recieved1 = mage.isStoned;
  const expected1 = true;
  expect(recieved).toBe(expected);
  expect(recieved1).toBe(expected1);
});
