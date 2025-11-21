import { useState, useMemo } from 'react';
import { Product } from '../../services/models';
import { SORT_OPTIONS, GROUP_BY_OPTIONS, SortOption, GroupByOption, FilterState } from './types';
import { sortComparators } from './utils';

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    sortBy: SORT_OPTIONS.NONE,
    groupBy: GROUP_BY_OPTIONS.NONE,
    categoryFilter: '',
    statusFilter: ''
  });

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    if (filters.categoryFilter) {
      result = result.filter(product => product.category === filters.categoryFilter);
    }

    if (filters.statusFilter) {
      result = result.filter(product => product.status === filters.statusFilter);
    }

    if (filters.sortBy !== SORT_OPTIONS.NONE) {
      const comparator = sortComparators[filters.sortBy];
      result.sort(comparator);
    }

    return result;
  }, [products, filters]);

  const groupedProducts = useMemo(() => {
    if (filters.groupBy === GROUP_BY_OPTIONS.NONE) {
      return { '': filteredProducts };
    }

    const groups: Record<string, Product[]> = {};

    filteredProducts.forEach(product => {
      let key = '';
      if (filters.groupBy === GROUP_BY_OPTIONS.CATEGORY) {
        key = product.category;
      } else if (filters.groupBy === GROUP_BY_OPTIONS.STATUS) {
        key = product.status;
      }

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(product);
    });

    const sortedKeys = Object.keys(groups).sort();
    const sortedGroups: Record<string, Product[]> = {};
    sortedKeys.forEach(key => {
      sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [filteredProducts, filters.groupBy]);

  const updateSearchQuery = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const updateSortBy = (sortBy: SortOption) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const updateGroupBy = (groupBy: GroupByOption) => {
    setFilters(prev => ({ ...prev, groupBy }));
  };

  const updateCategoryFilter = (category: string) => {
    setFilters(prev => ({ ...prev, categoryFilter: category }));
  };

  const updateStatusFilter = (status: string) => {
    setFilters(prev => ({ ...prev, statusFilter: status }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      sortBy: SORT_OPTIONS.NONE,
      groupBy: GROUP_BY_OPTIONS.NONE,
      categoryFilter: '',
      statusFilter: ''
    });
  };

  return {
    filters,
    categories,
    filteredProducts,
    groupedProducts,
    updateSearchQuery,
    updateSortBy,
    updateGroupBy,
    updateCategoryFilter,
    updateStatusFilter,
    resetFilters
  };
};

