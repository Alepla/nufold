import { useState } from 'react';
import { useIntl } from 'react-intl';
import { SortOption, GroupByOption, SORT_OPTIONS, GROUP_BY_OPTIONS } from '../../hooks';
import { PRODUCT_STATUS } from '../../services/models';

interface ProductFiltersProps {
  searchQuery: string;
  sortBy: SortOption;
  groupBy: GroupByOption;
  categoryFilter: string;
  statusFilter: string;
  categories: string[];
  onSearchChange: (query: string) => void;
  onSortChange: (sortBy: SortOption) => void;
  onGroupByChange: (groupBy: GroupByOption) => void;
  onCategoryFilterChange: (category: string) => void;
  onStatusFilterChange: (status: string) => void;
  onReset: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchQuery,
  sortBy,
  groupBy,
  categoryFilter,
  statusFilter,
  categories,
  onSearchChange,
  onSortChange,
  onGroupByChange,
  onCategoryFilterChange,
  onStatusFilterChange,
  onReset
}) => {
  const { formatMessage } = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);

  const intl = {
    searchPlaceholder: formatMessage({ id: 'filters.searchPlaceholder' }),
    sortBy: formatMessage({ id: 'filters.sortBy' }),
    sortNone: formatMessage({ id: 'filters.sortNone' }),
    sortPriceAsc: formatMessage({ id: 'filters.sortPriceAsc' }),
    sortPriceDesc: formatMessage({ id: 'filters.sortPriceDesc' }),
    sortNameAsc: formatMessage({ id: 'filters.sortNameAsc' }),
    sortNameDesc: formatMessage({ id: 'filters.sortNameDesc' }),
    sortParticipantsAsc: formatMessage({ id: 'filters.sortParticipantsAsc' }),
    sortParticipantsDesc: formatMessage({ id: 'filters.sortParticipantsDesc' }),
    groupBy: formatMessage({ id: 'filters.groupBy' }),
    groupNone: formatMessage({ id: 'filters.groupNone' }),
    groupCategory: formatMessage({ id: 'filters.groupCategory' }),
    groupStatus: formatMessage({ id: 'filters.groupStatus' }),
    filterByCategory: formatMessage({ id: 'filters.filterByCategory' }),
    filterByStatus: formatMessage({ id: 'filters.filterByStatus' }),
    allCategories: formatMessage({ id: 'filters.allCategories' }),
    allStatuses: formatMessage({ id: 'filters.allStatuses' }),
    resetFilters: formatMessage({ id: 'filters.resetFilters' }),
    statusActive: formatMessage({ id: 'filters.statusActive' }),
    statusPending: formatMessage({ id: 'filters.statusPending' }),
    statusCompleted: formatMessage({ id: 'filters.statusCompleted' }),
    statusCancelled: formatMessage({ id: 'filters.statusCancelled' })
  };

  const hasActiveFilters = searchQuery || sortBy !== SORT_OPTIONS.NONE || groupBy !== GROUP_BY_OPTIONS.NONE || categoryFilter || statusFilter;

  const toggleButtonLabel = isExpanded 
    ? formatMessage({ id: 'filters.hideFilters' })
    : formatMessage({ id: 'filters.showFilters' });

  return (
    <div className="product-filters">
      <div className="product-filters__header">
        <div className="product-filters__search">
          <input
            type="text"
            className="product-filters__search-input"
            placeholder={intl.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="product-filters__header-actions">
          {hasActiveFilters && (
            <button
              className="product-filters__reset"
              onClick={onReset}
              type="button"
            >
              {intl.resetFilters}
            </button>
          )}
          
          <button
            className="product-filters__toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            aria-expanded={isExpanded}
            aria-label={toggleButtonLabel}
          >
            <svg
              className={`product-filters__toggle-icon ${isExpanded ? 'product-filters__toggle-icon--expanded' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="product-filters__content">
          <div className="product-filters__row">
            <div className="product-filters__field">
              <label className="product-filters__label">{intl.sortBy}</label>
              <select
                className="product-filters__select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
              >
                <option value={SORT_OPTIONS.NONE}>{intl.sortNone}</option>
                <option value={SORT_OPTIONS.PRICE_ASC}>{intl.sortPriceAsc}</option>
                <option value={SORT_OPTIONS.PRICE_DESC}>{intl.sortPriceDesc}</option>
                <option value={SORT_OPTIONS.NAME_ASC}>{intl.sortNameAsc}</option>
                <option value={SORT_OPTIONS.NAME_DESC}>{intl.sortNameDesc}</option>
                <option value={SORT_OPTIONS.PARTICIPANTS_ASC}>{intl.sortParticipantsAsc}</option>
                <option value={SORT_OPTIONS.PARTICIPANTS_DESC}>{intl.sortParticipantsDesc}</option>
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.groupBy}</label>
              <select
                className="product-filters__select"
                value={groupBy}
                onChange={(e) => onGroupByChange(e.target.value as GroupByOption)}
              >
                <option value={GROUP_BY_OPTIONS.NONE}>{intl.groupNone}</option>
                <option value={GROUP_BY_OPTIONS.CATEGORY}>{intl.groupCategory}</option>
                <option value={GROUP_BY_OPTIONS.STATUS}>{intl.groupStatus}</option>
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.filterByCategory}</label>
              <select
                className="product-filters__select"
                value={categoryFilter}
                onChange={(e) => onCategoryFilterChange(e.target.value)}
              >
                <option value="">{intl.allCategories}</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-filters__field">
              <label className="product-filters__label">{intl.filterByStatus}</label>
              <select
                className="product-filters__select"
                value={statusFilter}
                onChange={(e) => onStatusFilterChange(e.target.value)}
              >
                <option value="">{intl.allStatuses}</option>
                <option value={PRODUCT_STATUS.ACTIVE}>{intl.statusActive}</option>
                <option value={PRODUCT_STATUS.PENDING}>{intl.statusPending}</option>
                <option value={PRODUCT_STATUS.COMPLETED}>{intl.statusCompleted}</option>
                <option value={PRODUCT_STATUS.CANCELLED}>{intl.statusCancelled}</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

