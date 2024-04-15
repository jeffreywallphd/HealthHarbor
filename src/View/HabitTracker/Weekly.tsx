import React, { useState } from 'react';
import { getWeekDates, getPreviousWeekDates } from './dateUtils'; 

const WeekPage: React.FC = () => {
  const [weeklyDates, setWeeklyDates] = useState<Date[]>(getWeekDates(new Date()));


  const handleWeeklyClick = (): void => {
    setWeeklyDates(getWeekDates(new Date())); 
  };

 
  const handlePreviousWeekClick = (): void => {
    setWeeklyDates(getPreviousWeekDates(weeklyDates[0])); 
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
