
import { startOfDay, startOfWeek, startOfMonth, startOfYear, endOfDay, endOfWeek, endOfMonth, endOfYear } from "date-fns";
import { DateFilterType } from "@/components/DateFilter";

export const getDateRange = (filter: DateFilterType, customStart?: Date, customEnd?: Date) => {
  const now = new Date();
  
  switch (filter) {
    case "all":
      // Return a very wide date range to show all records
      return {
        start: new Date("1900-01-01"),
        end: new Date("2100-12-31")
      };
    case "today":
      return {
        start: startOfDay(now),
        end: endOfDay(now)
      };
    case "wtd":
      return {
        start: startOfWeek(now, { weekStartsOn: 1 }), // Start week on Monday
        end: endOfDay(now)
      };
    case "mtd":
      return {
        start: startOfMonth(now),
        end: endOfDay(now)
      };
    case "ytd":
      return {
        start: startOfYear(now),
        end: endOfDay(now)
      };
    case "custom":
      if (customStart && customEnd) {
        return {
          start: startOfDay(customStart),
          end: endOfDay(customEnd)
        };
      }
      return {
        start: startOfDay(now),
        end: endOfDay(now)
      };
    default:
      return {
        start: new Date("1900-01-01"),
        end: new Date("2100-12-31")
      };
  }
};

export const isDateInRange = (date: string, start: Date, end: Date): boolean => {
  const checkDate = new Date(date);
  return checkDate >= start && checkDate <= end;
};
