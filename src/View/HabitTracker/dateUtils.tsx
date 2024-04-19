// dateUtils.tsx


export function getWeekDates(startDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
  
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      dates.push(newDate);
    }
  
    return dates;
  }
  
 
  export function getPreviousWeekDates(startDate: Date): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() - 7); 
  
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      dates.push(newDate);
    }
  
    return dates;
  }
  
