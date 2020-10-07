import { addYears } from "date-fns";
import { Between, FindOperator } from "typeorm";

export const AfterDate = (date: Date = new Date()) => {
    return Between(date, addYears(date, 1))
}

export const setDateBetween = (fromDate: string): FindOperator<any> => {
    return AfterDate(new Date(fromDate))
}