import React from 'react';

interface LoaderProps {
  message?: string;
}

export const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      {message && <p>{message}</p>}
    </div>
  );
};
