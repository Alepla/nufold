import { Product } from '../../services/models';
import { SORT_OPTIONS, SortOption } from './types';

export const sortComparators: Record<SortOption, (a: Product, b: Product) => number> = {
  [SORT_OPTIONS.PRICE_ASC]: (a, b) => a.price - b.price,
  [SORT_OPTIONS.PRICE_DESC]: (a, b) => b.price - a.price,
  [SORT_OPTIONS.NAME_ASC]: (a, b) => a.name.localeCompare(b.name),
  [SORT_OPTIONS.NAME_DESC]: (a, b) => b.name.localeCompare(a.name),
  [SORT_OPTIONS.PARTICIPANTS_ASC]: (a, b) => a.currentParticipants - b.currentParticipants,
  [SORT_OPTIONS.PARTICIPANTS_DESC]: (a, b) => b.currentParticipants - a.currentParticipants,
  [SORT_OPTIONS.NONE]: () => 0
};

