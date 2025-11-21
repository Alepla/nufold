import React from 'react';

interface DetailRowProps {
  label: string;
  value: React.ReactNode;
  classNamePrefix?: string;
}

export const DetailRow: React.FC<DetailRowProps> = ({ label, value, classNamePrefix }) => {
  const rowClassName = classNamePrefix ? `${classNamePrefix}__row` : 'detail-row';
  const labelClassName = classNamePrefix ? `${classNamePrefix}__label` : 'detail-row__label';
  const valueClassName = classNamePrefix ? `${classNamePrefix}__value` : 'detail-row__value';

  return (
    <div className={rowClassName}>
      <span className={labelClassName}>{label}:</span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
};
