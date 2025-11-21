export const NOTIFICATION_FILTERS = {
  ALL: 'all',
  UNREAD: 'unread',
  READ: 'read'
} as const;

export type NotificationFilter = typeof NOTIFICATION_FILTERS[keyof typeof NOTIFICATION_FILTERS];

