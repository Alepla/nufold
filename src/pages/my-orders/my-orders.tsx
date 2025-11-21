import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { EmptyPage, Loader, Layout } from '../../components';
import { ICONS } from '../../constants';
import { ORDER_STATUS, OrderStatus } from './types';
import { formatShortDate } from '../../utils';
import { DetailRow } from './components';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const mockOrders: Order[] = [];

  const intl = {
    title: formatMessage({ id: 'myOrders.title' }),
    subtitle: formatMessage({ id: 'myOrders.subtitle' }),
    loading: formatMessage({ id: 'myOrders.loading' }),
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
    statusCancelled: formatMessage({ id: 'myOrders.statusCancelled' }),
  };

  const statusLabels: Record<OrderStatus, string> = {
    [ORDER_STATUS.PENDING]: intl.statusPending,
    [ORDER_STATUS.CONFIRMED]: intl.statusConfirmed,
    [ORDER_STATUS.SHIPPING]: intl.statusShipping,
    [ORDER_STATUS.DELIVERED]: intl.statusDelivered,
    [ORDER_STATUS.CANCELLED]: intl.statusCancelled,
  };

  const getStatusLabel = (status: Order['status']) => {
    return statusLabels[status] || status;
  };

  const getStatusClass = (status: Order['status']) => {
    return `my-orders__status my-orders__status--${status}`;
  };

  const getOrderDetails = (order: Order) => {
    const details = [
      { label: intl.quantity, value: order.quantity },
      { label: intl.unitPrice, value: `€${order.unitPrice.toFixed(2)}` },
      { label: intl.shippingCost, value: `€${order.shippingCost.toFixed(2)}` },
    ];

    if (order.estimatedDelivery) {
      details.push({
        label: intl.estimatedDelivery,
        value: formatShortDate(order.estimatedDelivery),
      });
    }

    return details;
  };

  const isEmpty = mockOrders.length === 0;

  if (loading) {
    return <Loader message={intl.loading} />;
  }

  const renderContent = () => {
    if (isEmpty) {
      return (
        <EmptyPage icon={ICONS.PACKAGE} title={intl.empty} description={intl.emptyDescription} />
      );
    }

    return (
      <div className="my-orders-page__list">
        {mockOrders.map((order) => (
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
              <div className={getStatusClass(order.status)}>{getStatusLabel(order.status)}</div>
            </div>

            <div className="my-orders-page__order-details">
              {getOrderDetails(order).map((item, index) => (
                <DetailRow
                  key={index}
                  label={item.label}
                  value={item.value}
                  classNamePrefix="my-orders-page__order"
                />
              ))}
            </div>

            <div className="my-orders-page__order-footer">
              <DetailRow
                label={intl.totalPrice}
                value={`€${order.totalPrice.toFixed(2)}`}
                classNamePrefix="my-orders-page__order-total"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout className="my-orders-page" title={intl.title} subtitle={intl.subtitle}>
      {renderContent()}
    </Layout>
  );
};
