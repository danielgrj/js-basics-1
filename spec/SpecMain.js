describe('Dollar conversion', () => {
  it('should return a number', () => {
    expect(typeof convert(2)).toBe('number');
  });
  it('should return 44 if dollar is equal to 2', () => {
    expect(convert(2)).toBe(44);
  });
  it('should return 11 if dollar is equal to 0.5 ', () => {
    expect(convert(0.5)).toBe(11);
  });
});
describe('Square', () => {
  it('should return 10 if rectangule is 2 x 5', () => {
    expect(calculateArea(2, 5)).toBe(10);
  });
  it('should return 90 if rectangule is 9 * 10 ', () => {
    expect(calculateArea(9, 10)).toBe(90);
  });
  it('should return `This is a square!` if both sides are equal', () => {
    expect(calculateArea(3, 3)).toBe('This is a square!');
    expect(calculateArea(4, 4)).toBe('This is a square!');
  });
});
describe('Welcome', () => {
  it('should return a string', () => {
    expect(typeof welcome('Lina')).toBe('string');
  });
  it('should return custom welcome', () => {
    expect(welcome('Lina')).toBe('Hello Lina, welcome back!');
    expect(welcome('Daniel')).toBe('Hello Daniel, welcome back!')
  });
  it('should return `Hello user, welcome back!` if no name is passed', () => {
    expect(welcome()).toBe('Hello user, welcome back!')
  });
});
describe('Number is even or odd', () => {
  it('should return a string', () => {
    expect(typeof isEvenOrOdd(2)).toBe('string');
  });
  it('should return `even` if the number is 0', () => {
    expect(isEvenOrOdd(0)).toBe('even');
  });
  it('should return `even` if the number is 2', () => {
    expect(isEvenOrOdd(2)).toBe('even');
  });
  it('should return `odd` if the number is 5', () => {
    expect(isEvenOrOdd(5)).toBe('odd')
  });
});
describe('Number is positive', () => {
  it('should return a boolean', () => {
    expect(typeof isNumberPositive(2)).toBe('boolean');
  });
  it('should return true if the number is 3', () => {
    expect(isNumberPositive(3)).toBe(true);
  });
  it('should return false if the number is -2', () => {
    expect(isNumberPositive(-2)).toBe(false);
  });
  it('should return true if the number is 0', () => {
    expect(isNumberPositive(5)).toBe(true)
  });
});