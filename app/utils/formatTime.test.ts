import { formatMillisecondsToStandardTime } from './formatTime';

describe('formatMillisecondsToStandardTime', () => {
 it('should format milliseconds to standard time', () => {
    const testCases = [
      { ms: 0, expected: '00:00' },
      { ms: 1000, expected: '00:01' },
      { ms: 60000, expected: '01:00' },
      { ms: 3600000, expected: '01:00:00' },
      { ms: 3661000, expected: '01:01:01' },
    ];

    testCases.forEach(({ ms, expected }) => {
      expect(formatMillisecondsToStandardTime(ms)).toBe(expected);
    });
 });

 it('should handle negative values', () => {
    expect(formatMillisecondsToStandardTime(-1000)).toBe('00:00');
    expect(formatMillisecondsToStandardTime(-60000)).toBe('00:00');
    expect(formatMillisecondsToStandardTime(-3600000)).toBe('00:00');
 });
});
