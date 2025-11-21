import React from 'react';

interface ProgressBarProps {
  current: number;
  minimum: number;
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, minimum, progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      <span className="progress-bar__text">
        {current}/{minimum}
      </span>
    </div>
  );
};
