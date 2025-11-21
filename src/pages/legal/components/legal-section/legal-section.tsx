import React from 'react';

interface LegalSectionProps {
  title?: string;
  content: string;
  items?: string[];
}

export const LegalSection: React.FC<LegalSectionProps> = ({
  title,
  content,
  items
}) => {
  return (
    <section className="legal-page__section">
      {title && (
        <h2 className="legal-page__section-title">{title}</h2>
      )}
      <p className="legal-page__text">{content}</p>
      {items && items.length > 0 && (
        <ul className="legal-page__list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

