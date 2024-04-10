import React, { useState } from 'react';
import { getWeekDates, getPreviousWeekDates, getMonthDates } from './dateUtils'; // Assuming date utility functions are in dateUtils.ts

const MonthPage: React.FC = () => {
  const [monthlyDates, setMonthlyDates] = useState<Date[]>(getMonthDates(new Date()));

  // Handle click on Next Month button
  const handleNextMonthClick = (): void => {
    const lastDateOfMonth = monthlyDates[monthlyDates.length - 1];
    const nextMonthDates = getMonthDates(new Date(lastDateOfMonth.getFullYear(), lastDateOfMonth.getMonth() + 1, 1));
    setMonthlyDates(nextMonthDates);
  };

  // Handle click on Previous Month button
  const handlePreviousMonthClick = (): void => {
    const firstDateOfMonth = monthlyDates[0];
    const previousMonthDates = getMonthDates(new Date(firstDateOfMonth.getFullYear(), firstDateOfMonth.getMonth() - 1, 1));
    setMonthlyDates(previousMonthDates);
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        {/* Centered container for buttons */}
        <div style={{ marginBottom: '10px' }}>
          <button onClick={handlePreviousMonthClick} style={{ marginRight: '10px', marginLeft: '10px' }}>Previous Month</button>
          <button onClick={handleNextMonthClick}>Next Month</button>
        </div>

        <MonthDatesDisplay monthlyDates={monthlyDates} />
      </div>
    </div>
  );
};

interface MonthDatesDisplayProps {
  monthlyDates: Date[];
}

const MonthDatesDisplay: React.FC<MonthDatesDisplayProps> = ({ monthlyDates }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {monthlyDates.map((date, index) => (
        <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
          <h3>{date.toLocaleDateString('en-US', { weekday: 'short' })}</h3>
          <p style={{ color: 'blue' }}>{date.getDate()}</p>
        </div>
      ))}
    </div>
  );
};

export default MonthPage;
