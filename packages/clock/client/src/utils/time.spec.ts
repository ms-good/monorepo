import { msToTimeString } from './time.ts';

describe('msToTimeString', () => {
  it('should format 0 milliseconds as "00:00.00"', () => {
    expect(msToTimeString(0)).toBe('00:00.00');
  });
  it('should format 1000 milliseconds as "00:01.00"', () => {
    expect(msToTimeString(1000)).toBe('00:01.00');
  });
  it('should format 1001 milliseconds as "00:01.01"', () => {
    expect(msToTimeString(1001)).toBe('00:01.01');
  });
  it('should format 1010 milliseconds as "00:01.10"', () => {
    expect(msToTimeString(1010)).toBe('00:01.10');
  });
  it('should format 10000 milliseconds as "00:10.00"', () => {
    expect(msToTimeString(10000)).toBe('00:10.00');
  });
  it('should format 60000 milliseconds as "01:00.00"', () => {
    expect(msToTimeString(60000)).toBe('01:00.00');
  });
  it('should format 60001 milliseconds as "01:00.01"', () => {
    expect(msToTimeString(60001)).toBe('01:00.01');
  });
});
