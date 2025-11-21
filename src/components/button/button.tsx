import React from 'react';
import { ButtonType, BUTTON_TYPE } from './types';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
  ariaExpanded?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = BUTTON_TYPE.BUTTON,
  className = '',
  disabled = false,
  ariaExpanded,
  ariaLabel
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

