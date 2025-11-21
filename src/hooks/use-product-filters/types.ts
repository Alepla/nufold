export const SORT_OPTIONS = {
  PRICE_ASC: 'price-asc',
  PRICE_DESC: 'price-desc',
  NAME_ASC: 'name-asc',
  NAME_DESC: 'name-desc',
  PARTICIPANTS_ASC: 'participants-asc',
  PARTICIPANTS_DESC: 'participants-desc',
  NONE: 'none',
} as const;

export const GROUP_BY_OPTIONS = {
  CATEGORY: 'category',
  STATUS: 'status',
  NONE: 'none',
} as const;

export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
export type GroupByOption = (typeof GROUP_BY_OPTIONS)[keyof typeof GROUP_BY_OPTIONS];

export interface FilterState {
  searchQuery: string;
  sortBy: SortOption;
  groupBy: GroupByOption;
  categoryFilter: string;
  statusFilter: string;
}
