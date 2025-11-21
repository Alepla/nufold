import { useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { NOTIFICATION_FILTERS, NotificationFilter } from '../../constants';
import { formatLongDate, getMockNotifications } from '../../utils';

export const Notifications: React.FC = () => {
  const { formatMessage } = useIntl();
  const [filter, setFilter] = useState<NotificationFilter>(NOTIFICATION_FILTERS.ALL);

  const mockNotifications = getMockNotifications(formatMessage);

  const intl = {
    title: formatMessage({ id: 'notifications.title' }),
    subtitle: formatMessage({ id: 'notifications.subtitle' }),
    all: formatMessage({ id: 'notifications.filterAll' }),
    unread: formatMessage({ id: 'notifications.filterUnread' }),
    read: formatMessage({ id: 'notifications.filterRead' }),
    empty: formatMessage({ id: 'notifications.empty' }),
    markAllRead: formatMessage({ id: 'notifications.markAllRead' })
  };

  const filteredNotifications = mockNotifications.filter(notif => {
    if (filter === NOTIFICATION_FILTERS.ALL) return true;
    if (filter === NOTIFICATION_FILTERS.UNREAD) return !notif.read;
    if (filter === NOTIFICATION_FILTERS.READ) return notif.read;
    return true;
  });

  const unreadCount = mockNotifications.filter(n => !n.read).length;
  const isEmpty = filteredNotifications.length === 0;

  const allFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.ALL
  });

  const unreadFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.UNREAD
  });

  const readFilterClassName = classNames('notifications-page__filter', {
    'notifications-page__filter--active': filter === NOTIFICATION_FILTERS.READ
  });

  return (
    <div className="notifications-page page-gradient">
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
            className={allFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.ALL)}
          >
            {intl.all}
            {filter === NOTIFICATION_FILTERS.ALL && <span className="notifications-page__count">({mockNotifications.length})</span>}
          </button>
          <button
            className={unreadFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.UNREAD)}
          >
            {intl.unread}
            {unreadCount > 0 && <span className="notifications-page__badge">{unreadCount}</span>}
          </button>
          <button
            className={readFilterClassName}
            onClick={() => setFilter(NOTIFICATION_FILTERS.READ)}
          >
            {intl.read}
          </button>
        </div>

        <div className="notifications-page__list">
          {isEmpty ? (
            <div className="notifications-page__empty">
              <p>{intl.empty}</p>
            </div>
          ) : (
            filteredNotifications.map(notification => {
              const notificationItemClassName = classNames('notifications-page__item', {
                'notifications-page__item--unread': !notification.read
              });

              return (
              <div
                key={notification.id}
                className={notificationItemClassName}
              >
                <div className="notifications-page__item-icon">{notification.icon}</div>
                <div className="notifications-page__item-content">
                  <h3 className="notifications-page__item-title">{notification.title}</h3>
                  <p className="notifications-page__item-message">{notification.message}</p>
                  <span className="notifications-page__item-date">
                    {formatLongDate(notification.date)}
                  </span>
                </div>
                {!notification.read && (
                  <div className="notifications-page__item-dot"></div>
                )}
              </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

