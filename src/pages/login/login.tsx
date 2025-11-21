import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useLogin } from './hooks/use-login';

export const Login: React.FC = () => {
  const {
    isLogin,
    email,
    password,
    name,
    error,
    loading,
    intl,
    setEmail,
    setPassword,
    setName,
    handleSubmit,
    toggleMode,
    submitButtonText,
    switchButtonText
  } = useLogin();

  return (
    <div className="login-page page-gradient">
      <div className="login-page__container">
        <div className="login-page__card">
          <div className="login-page__header">
            <h1 className="login-page__title">{intl.title}</h1>
            <p className="login-page__subtitle">{intl.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="login-page__form">
            {!isLogin && (
              <div className="login-page__field">
                <label className="login-page__label">{intl.name}</label>
                <input
                  type="text"
                  className="login-page__input"
                  placeholder={intl.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </div>
            )}

            <div className="login-page__field">
              <label className="login-page__label">{intl.email}</label>
              <input
                type="email"
                className="login-page__input"
                placeholder={intl.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="login-page__field">
              <label className="login-page__label">{intl.password}</label>
              <input
                type="password"
                className="login-page__input"
                placeholder={intl.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {error && (
              <div className="login-page__error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-page__submit"
              disabled={loading}
            >
              {submitButtonText}
            </button>
          </form>

          <div className="login-page__footer">
            <button
              type="button"
              onClick={toggleMode}
              className="login-page__switch"
            >
              {switchButtonText}
            </button>
            <Link to={ROUTES.LANDING} className="login-page__back-link">
              {intl.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

