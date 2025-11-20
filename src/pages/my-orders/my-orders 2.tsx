import { useIntl } from 'react-intl';
import { useAuthStore } from '../../stores/auth-store';

interface Order {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  shippingCost: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery?: string;
}

export const MyOrders: React.FC = () => {
  const { formatMessage } = useIntl();
  const { isAuthenticated } = useAuthStore();

  const mockOrders: Order[] = [
    {
      id: 'ORD-001',
      productName: 'Auriculares Bluetooth Premium',
      quantity: 2,
      unitPrice: 45.99,
      shippingCost: 5.50,
      totalPrice: 97.48,
      status: 'shipping',
      orderDate: '2024-01-15',
      estimatedDelivery: '2024-02-05'
    },
    {
      id: 'ORD-002',
      productName: 'Smartwatch Fitness',
      quantity: 1,
      unitPrice: 89.99,
      shippingCost: 8.00,
      totalPrice: 97.99,
      status: 'confirmed',
      orderDate: '2024-01-20',
      estimatedDelivery: '2024-02-15'
    },
    {
      id: 'ORD-003',
      productName: 'Tablet Android 10 pulgadas',
      quantity: 1,
      unitPrice: 129.99,
      shippingCost: 12.00,
      totalPrice: 141.99,
      status: 'delivered',
      orderDate: '2024-01-05',
      estimatedDelivery: '2024-01-25'
    }
  ];

  const intl = {
    title: formatMessage({ id: 'myOrders.title' }),
    subtitle: formatMessage({ id: 'myOrders.subtitle' }),
    empty: formatMessage({ id: 'myOrders.empty' }),
    emptyDescription: formatMessage({ id: 'myOrders.emptyDescription' }),
    loginRequired: formatMessage({ id: 'myOrders.loginRequired' }),
    orderNumber: formatMessage({ id: 'myOrders.orderNumber' }),
    orderDate: formatMessage({ id: 'myOrders.orderDate' }),
    quantity: formatMessage({ id: 'myOrders.quantity' }),
    unitPrice: formatMessage({ id: 'myOrders.unitPrice' }),
    shippingCost: formatMessage({ id: 'myOrders.shippingCost' }),
    totalPrice: formatMessage({ id: 'myOrders.totalPrice' }),
    status: formatMessage({ id: 'myOrders.status' }),
    estimatedDelivery: formatMessage({ id: 'myOrders.estimatedDelivery' }),
    statusPending: formatMessage({ id: 'myOrders.statusPending' }),
    statusConfirmed: formatMessage({ id: 'myOrders.statusConfirmed' }),
    statusShipping: formatMessage({ id: 'myOrders.statusShipping' }),
    statusDelivered: formatMessage({ id: 'myOrders.statusDelivered' }),
    statusCancelled: formatMessage({ id: 'myOrders.statusCancelled' })
  };

  const getStatusLabel = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return intl.statusPending;
      case 'confirmed':
        return intl.statusConfirmed;
      case 'shipping':
        return intl.statusShipping;
      case 'delivered':
        return intl.statusDelivered;
      case 'cancelled':
        return intl.statusCancelled;
      default:
        return status;
    }
  };

  const getStatusClass = (status: Order['status']) => {
    return `my-orders__status my-orders__status--${status}`;
  };

  if (!isAuthenticated) {
    return (
      <div className="my-orders-page">
        <div className="my-orders-page__container">
          <div className="my-orders-page__header">
            <h1 className="my-orders-page__title">{intl.title}</h1>
            <p className="my-orders-page__subtitle">{intl.loginRequired}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-orders-page">
      <div className="my-orders-page__container">
        <div className="my-orders-page__header">
          <h1 className="my-orders-page__title">{intl.title}</h1>
          <p className="my-orders-page__subtitle">{intl.subtitle}</p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="my-orders-page__empty">
            <div className="my-orders-page__empty-icon">📦</div>
            <h2 className="my-orders-page__empty-title">{intl.empty}</h2>
            <p className="my-orders-page__empty-description">{intl.emptyDescription}</p>
          </div>
        ) : (
          <div className="my-orders-page__list">
            {mockOrders.map(order => (
              <div key={order.id} className="my-orders-page__order">
                <div className="my-orders-page__order-header">
                  <div className="my-orders-page__order-info">
                    <h3 className="my-orders-page__order-title">{order.productName}</h3>
                    <div className="my-orders-page__order-meta">
                      <span className="my-orders-page__order-number">
                        {intl.orderNumber}: {order.id}
                      </span>
                      <span className="my-orders-page__order-date">
                        {intl.orderDate}: {new Date(order.orderDate).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  </div>
                  <div className={getStatusClass(order.status)}>
                    {getStatusLabel(order.status)}
                  </div>
                </div>

                <div className="my-orders-page__order-details">
                  <div className="my-orders-page__order-row">
                    <span className="my-orders-page__order-label">{intl.quantity}:</span>
                    <span className="my-orders-page__order-value">{order.quantity}</span>
                  </div>
                  <div className="my-orders-page__order-row">
                    <span className="my-orders-page__order-label">{intl.unitPrice}:</span>
                    <span className="my-orders-page__order-value">€{order.unitPrice.toFixed(2)}</span>
                  </div>
                  <div className="my-orders-page__order-row">
                    <span className="my-orders-page__order-label">{intl.shippingCost}:</span>
                    <span className="my-orders-page__order-value">€{order.shippingCost.toFixed(2)}</span>
                  </div>
                  {order.estimatedDelivery && (
                    <div className="my-orders-page__order-row">
                      <span className="my-orders-page__order-label">{intl.estimatedDelivery}:</span>
                      <span className="my-orders-page__order-value">
                        {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="my-orders-page__order-footer">
                  <div className="my-orders-page__order-total">
                    <span className="my-orders-page__order-total-label">{intl.totalPrice}:</span>
                    <span className="my-orders-page__order-total-value">€{order.totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

