import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Layout } from '../../components';
import { ROUTES } from '../../constants';

export const NotFound: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'notFound.title' }),
    message: formatMessage({ id: 'notFound.message' }),
    backHome: formatMessage({ id: 'notFound.backHome' }),
  };

  return (
    <Layout className="not-found" title={intl.title} subtitle={intl.message}>
      <Link to={ROUTES.LANDING} className="not-found__link">
        {intl.backHome}
      </Link>
    </Layout>
  );
};
