import React from 'react';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

export const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="landing__benefit">
      <div className="landing__benefit-icon">{icon}</div>
      <h3 className="landing__benefit-title">{title}</h3>
      <p className="landing__benefit-description">{description}</p>
    </div>
  );
};
