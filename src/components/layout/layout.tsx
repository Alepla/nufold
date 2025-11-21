import React from 'react';
import classNames from 'classnames';

interface LayoutProps {
  className?: string;
  title?: string;
  subtitle?: string;
  headerActions?: React.ReactNode;
  headerExtra?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  className = '',
  title,
  subtitle,
  headerActions,
  headerExtra,
  children
}) => {
  const containerClassName = classNames(className, 'page-gradient');
  const innerContainerClassName = `${className}__container`;
  const headerClassName = `${className}__header`;
  const titleClassName = `${className}__title`;
  const subtitleClassName = `${className}__subtitle`;

  return (
    <div className={containerClassName}>
      <div className={innerContainerClassName}>
        {(title || subtitle || headerActions || headerExtra) && (
          <div className={headerClassName}>
            {(title || subtitle) && (
              <div>
                {title && <h1 className={titleClassName}>{title}</h1>}
                {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
              </div>
            )}
            {headerExtra && headerExtra}
            {headerActions && headerActions}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

