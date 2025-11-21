export const STATUS_BADGE_VARIANT = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const;

export type StatusBadgeVariant = (typeof STATUS_BADGE_VARIANT)[keyof typeof STATUS_BADGE_VARIANT];
