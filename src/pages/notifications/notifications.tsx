import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useAuthStore } from '../../stores/auth-store';

export const Notifications: React.FC = () => {
  const { formatMessage } = useIntl();
  const { isAuthenticated } = useAuthStore();
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const mockNotifications = [
    {
      id: '1',
      type: 'product',
      title: formatMessage({ id: 'notifications.productReady.title' }),
      message: formatMessage({ id: 'notifications.productReady.message' }, { productName: 'Auriculares Bluetooth Premium' }),
      date: '2024-01-22',
      read: false,
      icon: '📦'
    },
    {
      id: '2',
      type: 'update',
      title: formatMessage({ id: 'notifications.productUpdate.title' }),
      message: formatMessage({ id: 'notifications.productUpdate.message' }, { productName: 'Smartwatch Fitness', participants: 3 }),
      date: '2024-01-21',
      read: false,
      icon: '👥'
    },
    {
      id: '3',
      type: 'reminder',
      title: formatMessage({ id: 'notifications.reminder.title' }),
      message: formatMessage({ id: 'notifications.reminder.message' }, { productName: 'Tablet Android', needed: 7 }),
      date: '2024-01-20',
      read: true,
      icon: '⏰'
    },
    {
      id: '4',
      type: 'success',
      title: formatMessage({ id: 'notifications.success.title' }),
      message: formatMessage({ id: 'notifications.success.message' }),
      date: '2024-01-19',
      read: true,
      icon: '✅'
    }
  ];

  const intl = {
    title: formatMessage({ id: 'notifications.title' }),
    subtitle: formatMessage({ id: 'notifications.subtitle' }),
    all: formatMessage({ id: 'notifications.filterAll' }),
    unread: formatMessage({ id: 'notifications.filterUnread' }),
    read: formatMessage({ id: 'notifications.filterRead' }),
    empty: formatMessage({ id: 'notifications.empty' }),
    markAllRead: formatMessage({ id: 'notifications.markAllRead' }),
    loginRequired: formatMessage({ id: 'notifications.loginRequired' })
  };

  const filteredNotifications = mockNotifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const unreadCount = mockNotifications.filter(n => !n.read).length;

  if (!isAuthenticated) {
    return (
      <div className="notifications-page">
        <div className="notifications-page__container">
          <div className="notifications-page__header">
            <h1 className="notifications-page__title">{intl.title}</h1>
            <p className="notifications-page__subtitle">{intl.loginRequired}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="notifications-page">
      <div className="notifications-page__container">
        <div className="notifications-page__header">
          <div>
            <h1 className="notifications-page__title">{intl.title}</h1>
            <p className="notifications-page__subtitle">{intl.subtitle}</p>
          </div>
          {unreadCount > 0 && (
            <button className="notifications-page__mark-all">
              {intl.markAllRead}
            </button>
          )}
        </div>

        <div className="notifications-page__filters">
          <button
            className={`notifications-page__filter ${filter === 'all' ? 'notifications-page__filter--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {intl.all}
            {filter === 'all' && <span className="notifications-page__count">({mockNotifications.length})</span>}
          </button>
          <button
            className={`notifications-page__filter ${filter === 'unread' ? 'notifications-page__filter--active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            {intl.unread}
            {unreadCount > 0 && <span className="notifications-page__badge">{unreadCount}</span>}
          </button>
          <button
            className={`notifications-page__filter ${filter === 'read' ? 'notifications-page__filter--active' : ''}`}
            onClick={() => setFilter('read')}
          >
            {intl.read}
          </button>
        </div>

        <div className="notifications-page__list">
          {filteredNotifications.length === 0 ? (
            <div className="notifications-page__empty">
              <p>{intl.empty}</p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={`notifications-page__item ${!notification.read ? 'notifications-page__item--unread' : ''}`}
              >
                <div className="notifications-page__item-icon">{notification.icon}</div>
                <div className="notifications-page__item-content">
                  <h3 className="notifications-page__item-title">{notification.title}</h3>
                  <p className="notifications-page__item-message">{notification.message}</p>
                  <span className="notifications-page__item-date">
                    {new Date(notification.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                {!notification.read && (
                  <div className="notifications-page__item-dot"></div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

