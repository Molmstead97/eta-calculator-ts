import React, { useState, ChangeEvent } from "react";

const ETACalculator: React.FC = () => {
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [eta, setEta] = useState<{ hours: number; minutes: number } | null>(null);

  const calculateETA = (): void => {
    if (distance > 0 && speed > 0) {
      const totalHours = distance / speed;
      const hours = Math.floor(totalHours);
      const minutes = Math.round((totalHours - hours) * 60);
      setEta({ hours, minutes });
    } else {
      setEta(null);
    }
  };

  return (
    <div>
      <h2>ETA Calculator</h2>
      <div>
        <label htmlFor="distance">Distance (m): </label>
        <input
          id="distance"
          type="number"
          value={distance}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setDistance(event.target.valueAsNumber);
          }}
        />
      </div>
      <div>
        <label htmlFor="speed">Speed (mph): </label>
        <input
          id="speed"
          type="number"
          value={speed}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSpeed(event.target.valueAsNumber);
          }}
        />
      </div>
      <button onClick={calculateETA}>Calculate ETA</button>
      {eta !== null && (
        <div>
          <h3>Estimated Time of Arrival:</h3>
          <p>
            You will arrive in approximately {eta.hours} hours and {eta.minutes} minutes
          </p>
        </div>
      )}
    </div>
  );
};

export default ETACalculator;
