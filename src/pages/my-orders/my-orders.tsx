import { useIntl } from 'react-intl';
import { EmptyPage } from '../../components';
import { ICONS, ORDER_STATUS, OrderStatus } from '../../constants';
import { formatShortDate } from '../../utils';

interface Order {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  shippingCost: number;
  totalPrice: number;
  status: OrderStatus;
  orderDate: string;
  estimatedDelivery?: string;
}

export const MyOrders: React.FC = () => {
  const { formatMessage } = useIntl();

  const mockOrders: Order[] = [];

  const intl = {
    title: formatMessage({ id: 'myOrders.title' }),
    subtitle: formatMessage({ id: 'myOrders.subtitle' }),
    empty: formatMessage({ id: 'myOrders.empty' }),
    emptyDescription: formatMessage({ id: 'myOrders.emptyDescription' }),
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

  const statusLabels: Record<OrderStatus, string> = {
    [ORDER_STATUS.PENDING]: intl.statusPending,
    [ORDER_STATUS.CONFIRMED]: intl.statusConfirmed,
    [ORDER_STATUS.SHIPPING]: intl.statusShipping,
    [ORDER_STATUS.DELIVERED]: intl.statusDelivered,
    [ORDER_STATUS.CANCELLED]: intl.statusCancelled
  };

  const getStatusLabel = (status: Order['status']) => {
    return statusLabels[status] || status;
  };

  const getStatusClass = (status: Order['status']) => {
    return `my-orders__status my-orders__status--${status}`;
  };

  const isEmpty = mockOrders.length === 0;

  return (
    <div className="my-orders-page page-gradient">
      <div className="my-orders-page__container">
        <div className="my-orders-page__header">
          <h1 className="my-orders-page__title">{intl.title}</h1>
          <p className="my-orders-page__subtitle">{intl.subtitle}</p>
        </div>

        {isEmpty ? (
          <EmptyPage
            icon={ICONS.PACKAGE}
            title={intl.empty}
            description={intl.emptyDescription}
          />
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
                        {intl.orderDate}: {formatShortDate(order.orderDate)}
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
                        {formatShortDate(order.estimatedDelivery)}
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

