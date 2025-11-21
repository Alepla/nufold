import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { EmptyPage, Loader, Layout } from '../../components';
import { ProductCard } from '../products/components';
import { Product } from '../../services/models/product';
import { mockProducts } from '../../utils/mock-data';
import { ICONS } from '../../constants';

export const Wishlist: React.FC = () => {
  const { formatMessage } = useIntl();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const wishlistItems: Product[] = mockProducts.slice(0, 3);

  const intl = {
    title: formatMessage({ id: 'wishlist.title' }),
    subtitle: formatMessage({ id: 'wishlist.subtitle' }),
    loading: formatMessage({ id: 'wishlist.loading' }),
    empty: formatMessage({ id: 'wishlist.empty' }),
    emptyDescription: formatMessage({ id: 'wishlist.emptyDescription' }),
  };

  const isEmpty = wishlistItems.length === 0;

  const renderContent = () => {
    if (isEmpty) {
      return (
        <EmptyPage icon={ICONS.HEART} title={intl.empty} description={intl.emptyDescription} />
      );
    }

    return (
      <div className="wishlist-page__grid">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} onShowInterest={() => {}} />
        ))}
      </div>
    );
  };

  if (loading) {
    return <Loader message={intl.loading} />;
  }

  return (
    <Layout className="wishlist-page" title={intl.title} subtitle={intl.subtitle}>
      {renderContent()}
    </Layout>
  );
};
