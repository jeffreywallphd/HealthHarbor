import React, { useState } from 'react';
import { getWeekDates, getPreviousWeekDates } from './dateUtils'; // Assuming date utility functions are in dateUtils.ts

const WeekPage: React.FC = () => {
  const [weeklyDates, setWeeklyDates] = useState<Date[]>(getWeekDates(new Date()));

  // Handle click on Weekly button
  const handleWeeklyClick = (): void => {
    setWeeklyDates(getWeekDates(new Date())); // Update with the current week's dates
  };

  // Handle click on Previous Week button
  const handlePreviousWeekClick = (): void => {
    setWeeklyDates(getPreviousWeekDates(weeklyDates[0])); // Update with the previous week's dates
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        {/* Centered container for buttons */}
        <div style={{ marginBottom: '10px' }}>
          <button onClick={handleWeeklyClick} style={{ marginRight: '10px', marginLeft: '10px' }}>Weekly</button>
          <button onClick={handlePreviousWeekClick}>Previous Week</button>
        </div>

        <WeekDatesDisplay weeklyDates={weeklyDates} />
      </div>
    </div>
  );
};

interface WeekDatesDisplayProps {
  weeklyDates: Date[];
}

const WeekDatesDisplay: React.FC<WeekDatesDisplayProps> = ({ weeklyDates }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {weeklyDates.map((date, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <h3>{date.toLocaleDateString('en-US', { weekday: 'short' })}</h3>
          <p style={{ color: 'blue' }}>{date.toLocaleDateString('en-US', { day: 'numeric' })}</p>
        </div>
      ))}
    </div>
  );
};

export default WeekPage;
