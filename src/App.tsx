import { IntlProvider } from 'react-intl';
import { ErrorBoundary, AppRouter } from './components';
import { useThemeSync } from './hooks';
import esMessages from './locales/es.json';
import './styles';

const App: React.FC = () => {
  useThemeSync();

  return (
    <IntlProvider locale="es" messages={esMessages}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;

