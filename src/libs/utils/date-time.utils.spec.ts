import { toHumanFullDate, addDaysToDate, addMinutesToDate, toSimpleShortDate } from './date-time.utils';

describe('DateTimeUtils', () => {
  const currentDate = new Date();
  it('should return a HumanFullDate date string ', () => {
    const date = toHumanFullDate(currentDate);
    expect(date).not.toBeNull();
  });

  it('should return a added days in date', () => {
    const days = 30;
    const date = addDaysToDate(days);
    expect(date).not.toBeNull();
  });

  it('should return a added minutes in date', () => {
    const minutes = 30;
    const date = addMinutesToDate(minutes);
    expect(date).not.toBeNull();
  });

  it('should return simple short date', () => {
    const date = '1998-04-27'
    const actual = '27 Apr 1998'
    const expected = toSimpleShortDate(date);
    expect(expected).toBe(actual);
    
  });
});
