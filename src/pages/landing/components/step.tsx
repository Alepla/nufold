import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

export const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="landing__step">
      <div className="landing__step-number">{number}</div>
      <div className="landing__step-content">
        <h3 className="landing__step-title">{title}</h3>
        <p className="landing__step-description">{description}</p>
      </div>
    </div>
  );
};

