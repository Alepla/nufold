import React from 'react';

interface TableProductProps {
  imageUrl: string;
  name: string;
}

export const TableProduct: React.FC<TableProductProps> = ({ imageUrl, name }) => {
  return (
    <div className="table-product">
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </div>
  );
};
