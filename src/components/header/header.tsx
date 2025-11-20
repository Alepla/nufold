import { Link, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useAuthStore } from '../../stores/auth-store';

export const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  
  const intl = {
    title: formatMessage({ id: 'app.title' }),
    tagline: formatMessage({ id: 'app.tagline' }),
    products: formatMessage({ id: 'header.products' }),
    dashboard: formatMessage({ id: 'header.dashboard' }),
    about: formatMessage({ id: 'header.about' }),
    login: formatMessage({ id: 'header.login' }),
    logout: formatMessage({ id: 'header.logout' })
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1>{intl.title}</h1>
        </Link>
        
        <nav className="header__nav">
          <button
            onClick={() => navigate('/dashboard')}
            className="header__icon-button"
            aria-label={intl.dashboard}
            title={intl.dashboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          {isAuthenticated ? (
            <button onClick={logout} className="header__cta-button" aria-label={intl.logout} title={intl.logout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          ) : (
            <Link to="/login" className="header__cta-button" aria-label={intl.login} title={intl.login}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

