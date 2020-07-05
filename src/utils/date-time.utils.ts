import * as moment from 'moment';

export const toHumanFullDate = (dateTime: Date): string => {
  return moment(dateTime, 'DD MM YYYY hh:mm:ss').toString();
};

export const addMinutesToDate = (minutes: string|number): Date => {
  return moment()
    .add(minutes, 'minutes')
    .toDate();
};

export const addDaysToDate = (days: string | number): Date => {
  return moment()
    .add(days, 'd')
    .toDate();
};
