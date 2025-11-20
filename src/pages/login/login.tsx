import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useAuthStore } from '../../stores/auth-store';

export const Login: React.FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const { login, register } = useAuthStore();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const intl = {
    title: formatMessage({ id: 'login.title' }),
    subtitle: formatMessage({ id: 'login.subtitle' }),
    email: formatMessage({ id: 'login.email' }),
    emailPlaceholder: formatMessage({ id: 'login.emailPlaceholder' }),
    password: formatMessage({ id: 'login.password' }),
    passwordPlaceholder: formatMessage({ id: 'login.passwordPlaceholder' }),
    name: formatMessage({ id: 'login.name' }),
    namePlaceholder: formatMessage({ id: 'login.namePlaceholder' }),
    loginButton: formatMessage({ id: 'login.loginButton' }),
    registerButton: formatMessage({ id: 'login.registerButton' }),
    switchToRegister: formatMessage({ id: 'login.switchToRegister' }),
    switchToLogin: formatMessage({ id: 'login.switchToLogin' }),
    errorInvalidCredentials: formatMessage({ id: 'login.errorInvalidCredentials' }),
    errorEmailExists: formatMessage({ id: 'login.errorEmailExists' }),
    errorRequired: formatMessage({ id: 'login.errorRequired' }),
    loading: formatMessage({ id: 'login.loading' }),
    backHome: formatMessage({ id: 'notFound.backHome' })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password || (!isLogin && !name)) {
      setError(intl.errorRequired);
      setLoading(false);
      return;
    }

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(email, password);
        if (!success) {
          setError(intl.errorInvalidCredentials);
        }
      } else {
        success = await register(email, password, name);
        if (!success) {
          setError(intl.errorEmailExists);
        }
      }

      if (success) {
        navigate('/');
      }
    } catch (err) {
      setError(formatMessage({ id: 'login.errorGeneric' }));
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="login-page">
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
              {loading ? intl.loading : (isLogin ? intl.loginButton : intl.registerButton)}
            </button>
          </form>

          <div className="login-page__footer">
            <button
              type="button"
              onClick={toggleMode}
              className="login-page__switch"
            >
              {isLogin ? intl.switchToRegister : intl.switchToLogin}
            </button>
            <Link to="/" className="login-page__back-link">
              {intl.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

