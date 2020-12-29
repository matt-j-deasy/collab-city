// Utility functions for dates

// Given a date object, return a traditional date string
// mm-dd-yyyy
export function getDisplayDate(date: Date): string {
  return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
}
