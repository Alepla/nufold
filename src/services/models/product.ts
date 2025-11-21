export const PRODUCT_STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export type ProductStatus = (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS];

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  shippingCost: number;
  minimumParticipants: number;
  currentParticipants: number;
  status: ProductStatus;
  category: string;
  createdAt: string;
  updatedAt: string;
}
