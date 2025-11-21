import React from 'react';

interface StatCardProps {
  value: number | string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};
