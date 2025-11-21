import { Product, Interest, PRODUCT_STATUS } from '../services/models';
import { ICONS } from '../constants';
import { IntlShape } from 'react-intl';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Auriculares Bluetooth Premium',
    description: 'Auriculares inalámbricos con cancelación de ruido activa, batería de 30 horas',
    imageUrl: 'https://via.placeholder.com/400x300?text=Auriculares',
    price: 25,
    shippingCost: 150,
    minimumParticipants: 10,
    currentParticipants: 7,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Audio',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: '2',
    name: 'Smartwatch Fitness',
    description: 'Reloj inteligente con monitor de frecuencia cardíaca y GPS',
    imageUrl: 'https://via.placeholder.com/400x300?text=Smartwatch',
    price: 35,
    shippingCost: 200,
    minimumParticipants: 15,
    currentParticipants: 12,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Wearables',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-19',
  },
  {
    id: '3',
    name: 'Cargador Inalámbrico MagSafe',
    description: 'Cargador inalámbrico compatible con MagSafe, carga rápida 15W',
    imageUrl: 'https://via.placeholder.com/400x300?text=Cargador',
    price: 12,
    shippingCost: 100,
    minimumParticipants: 8,
    currentParticipants: 8,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Accesorios',
    createdAt: '2024-01-18',
    updatedAt: '2024-01-21',
  },
  {
    id: '4',
    name: 'Tablet Android 10 pulgadas',
    description: 'Tablet con pantalla Full HD, 4GB RAM, 64GB almacenamiento',
    imageUrl: 'https://via.placeholder.com/400x300?text=Tablet',
    price: 80,
    shippingCost: 250,
    minimumParticipants: 12,
    currentParticipants: 5,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Electrónica',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-22',
  },
  {
    id: '5',
    name: 'Teclado Mecánico RGB',
    description: 'Teclado mecánico gaming con retroiluminación RGB y switches azules',
    imageUrl: 'https://via.placeholder.com/400x300?text=Teclado',
    price: 45,
    shippingCost: 180,
    minimumParticipants: 10,
    currentParticipants: 9,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Accesorios',
    createdAt: '2024-01-14',
    updatedAt: '2024-01-20',
  },
  {
    id: '6',
    name: 'Altavoz Bluetooth Portátil',
    description: 'Altavoz con sonido estéreo, resistencia al agua IPX7, batería de 20 horas',
    imageUrl: 'https://via.placeholder.com/400x300?text=Altavoz',
    price: 30,
    shippingCost: 120,
    minimumParticipants: 8,
    currentParticipants: 15,
    status: PRODUCT_STATUS.ACTIVE,
    category: 'Audio',
    createdAt: '2024-01-11',
    updatedAt: '2024-01-19',
  },
];

export const mockInterests: Interest[] = [
  {
    id: '1',
    productId: '1',
    userId: 'user1',
    userName: 'Juan Pérez',
    userEmail: 'juan@example.com',
    quantity: 2,
    createdAt: '2024-01-16',
  },
  {
    id: '2',
    productId: '1',
    userId: 'user2',
    userName: 'María García',
    userEmail: 'maria@example.com',
    quantity: 1,
    createdAt: '2024-01-17',
  },
];

export interface MockNotification {
  id: string;
  type: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  icon: string;
}

export const getMockNotifications = (
  formatMessage: IntlShape['formatMessage']
): MockNotification[] => [
  {
    id: '1',
    type: 'product',
    title: formatMessage({ id: 'notifications.productReady.title' }),
    message: formatMessage(
      { id: 'notifications.productReady.message' },
      { productName: 'Auriculares Bluetooth Premium' }
    ),
    date: '2024-01-22',
    read: false,
    icon: ICONS.PACKAGE,
  },
  {
    id: '2',
    type: 'update',
    title: formatMessage({ id: 'notifications.productUpdate.title' }),
    message: formatMessage(
      { id: 'notifications.productUpdate.message' },
      { productName: 'Smartwatch Fitness', participants: 3 }
    ),
    date: '2024-01-21',
    read: false,
    icon: ICONS.PEOPLE,
  },
  {
    id: '3',
    type: 'reminder',
    title: formatMessage({ id: 'notifications.reminder.title' }),
    message: formatMessage(
      { id: 'notifications.reminder.message' },
      { productName: 'Tablet Android', needed: 7 }
    ),
    date: '2024-01-20',
    read: true,
    icon: ICONS.CLOCK,
  },
  {
    id: '4',
    type: 'success',
    title: formatMessage({ id: 'notifications.success.title' }),
    message: formatMessage({ id: 'notifications.success.message' }),
    date: '2024-01-19',
    read: true,
    icon: ICONS.CHECK,
  },
];
