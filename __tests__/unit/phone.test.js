import * as Phone from '../../src/phone';

describe('Phone.format', () => {
  it('format empty string', () => {
    expect(Phone.format('', true)).toBe('');
  });
  it('format null', () => {
    expect(Phone.format(null, true)).toBe('');
  });
  it('format undefined', () => {
    expect(Phone.format(undefined, true)).toBe('');
  });
  it('format one number', () => {
    expect(Phone.format('5', true)).toBe('(5');
  });
  it('format two number', () => {
    expect(Phone.format('50', true)).toBe('(50');
  });
  it('format three number', () => {
    expect(Phone.format('509', true)).toBe('(50) 9');
  });
  it('format four number', () => {
    expect(Phone.format('5095', true)).toBe('(50) 95');
  });
  it('format five number', () => {
    expect(Phone.format('50955', true)).toBe('(50) 955');
  });
  it('format six number', () => {
    expect(Phone.format('509558', true)).toBe('(50) 9558');
  });
  it('format seven number', () => {
    expect(Phone.format('5095583', true)).toBe('(50) 9558-3');
  });
  it('format eight number', () => {
    expect(Phone.format('50955839', true)).toBe('(50) 9558-39');
  });
  it('format nine number', () => {
    expect(Phone.format('509558390', true)).toBe('(50) 9558-390');
  });
  it('format ten number', () => {
    expect(Phone.format('5095583909', true)).toBe('(50) 9558-3909');
  });
  it('format eleven number', () => {
    expect(Phone.format('50955839092', true)).toBe('(50) 95583-9092');
  });
  it('format twelve number', () => {
    expect(Phone.format('509558390923', true)).toBe('(50) 95583-9092');
  });
});
