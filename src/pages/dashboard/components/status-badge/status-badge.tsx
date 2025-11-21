import React from 'react';
import classNames from 'classnames';
import { StatusBadgeVariant, STATUS_BADGE_VARIANT } from './types';

interface StatusBadgeProps {
  label: string;
  variant?: StatusBadgeVariant;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = STATUS_BADGE_VARIANT.ACTIVE
}) => {
  const badgeClassName = classNames('status-badge', {
    'status-badge--active': variant === STATUS_BADGE_VARIANT.ACTIVE,
    'status-badge--inactive': variant === STATUS_BADGE_VARIANT.INACTIVE
  });

  return (
    <span className={badgeClassName}>
      {label}
    </span>
  );
};

