import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useAuthStore } from '../../../stores/auth-store';
import { ROUTES } from '../../../constants';

export const useLogin = () => {
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
    errorGeneric: formatMessage({ id: 'login.errorGeneric' }),
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
        navigate(ROUTES.LANDING);
      }
    } catch (_err) {
      setError(intl.errorGeneric);
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

  const submitButtonText = loading ? intl.loading : (isLogin ? intl.loginButton : intl.registerButton);
  const switchButtonText = isLogin ? intl.switchToRegister : intl.switchToLogin;

  return {
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
  };
};

