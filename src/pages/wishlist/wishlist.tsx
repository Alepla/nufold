import { useIntl } from 'react-intl';
import { ProductCard } from '../../components';
import { Product } from '../../services/models/product';
import { mockProducts } from '../../utils/mock-data';

export const Wishlist: React.FC = () => {
  const { formatMessage } = useIntl();

  const wishlistItems: Product[] = mockProducts.slice(0, 3);

  const intl = {
    title: formatMessage({ id: 'wishlist.title' }),
    subtitle: formatMessage({ id: 'wishlist.subtitle' }),
    empty: formatMessage({ id: 'wishlist.empty' }),
    emptyDescription: formatMessage({ id: 'wishlist.emptyDescription' })
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-page__container">
        <div className="wishlist-page__header">
          <h1 className="wishlist-page__title">{intl.title}</h1>
          <p className="wishlist-page__subtitle">{intl.subtitle}</p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="wishlist-page__empty">
            <div className="wishlist-page__empty-icon">❤️</div>
            <h2 className="wishlist-page__empty-title">{intl.empty}</h2>
            <p className="wishlist-page__empty-description">{intl.emptyDescription}</p>
          </div>
        ) : (
          <div className="wishlist-page__grid">
            {wishlistItems.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onShowInterest={() => {}} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

