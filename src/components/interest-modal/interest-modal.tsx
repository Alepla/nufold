import { useIntl } from 'react-intl';
import { Product } from '../../services/models';
import { FormField } from '../form-field';
import { CostSummary } from './components';
import { useInterestModal } from './hooks/use-interest-modal';
import { Button, BUTTON_TYPE } from '../button';

interface InterestModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; quantity: number }) => void;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  product,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { formatMessage, formatNumber } = useIntl();

  const intl = {
    title: (productName: string) => formatMessage({ id: 'interestModal.title' }, { productName }),
    fullName: formatMessage({ id: 'interestModal.fullName' }),
    fullNamePlaceholder: formatMessage({ id: 'interestModal.fullNamePlaceholder' }),
    email: formatMessage({ id: 'interestModal.email' }),
    emailPlaceholder: formatMessage({ id: 'interestModal.emailPlaceholder' }),
    quantity: formatMessage({ id: 'interestModal.quantity' }),
    costSummary: formatMessage({ id: 'interestModal.costSummary' }),
    unitPrice: formatMessage({ id: 'interestModal.unitPrice' }),
    quantityLabel: formatMessage({ id: 'interestModal.quantityLabel' }),
    productSubtotal: formatMessage({ id: 'interestModal.productSubtotal' }),
    sharedShipping: formatMessage({ id: 'interestModal.sharedShipping' }),
    estimatedTotal: formatMessage({ id: 'interestModal.estimatedTotal' }),
    cancel: formatMessage({ id: 'interestModal.cancel' }),
    confirmInterest: formatMessage({ id: 'interestModal.confirmInterest' }),
    usd: formatMessage({ id: 'common.usd' }),
  };
  const {
    name,
    email,
    quantity,
    setName,
    setEmail,
    handleQuantityChange,
    costSummary,
    handleSubmit,
  } = useInterestModal(product, onSubmit, onClose);

  const costSummaryItems = [
    {
      label: intl.unitPrice,
      value: `$${formatNumber(product.price)} ${intl.usd}`,
    },
    {
      label: intl.quantityLabel,
      value: quantity,
    },
    {
      label: intl.productSubtotal,
      value: `$${formatNumber(costSummary.subtotal, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${intl.usd}`,
    },
    {
      label: intl.sharedShipping,
      value: `$${formatNumber(costSummary.shippingPerPerson, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${intl.usd}`,
    },
    {
      label: intl.estimatedTotal,
      value: `$${formatNumber(costSummary.totalCost, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${intl.usd}`,
      isTotal: true,
    },
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Button className="modal-close" onClick={onClose}>
          ×
        </Button>

        <h2 className="modal-title">{intl.title(product.name)}</h2>

        <form onSubmit={handleSubmit} className="interest-form">
          <FormField
            id="name"
            label={intl.fullName}
            type="text"
            value={name}
            onChange={setName}
            placeholder={intl.fullNamePlaceholder}
            required
          />

          <FormField
            id="email"
            label={intl.email}
            type="email"
            value={email}
            onChange={setEmail}
            placeholder={intl.emailPlaceholder}
            required
          />

          <FormField
            id="quantity"
            label={intl.quantity}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            required
          />

          <CostSummary title={intl.costSummary} items={costSummaryItems} />

          <div className="form-actions">
            <Button type={BUTTON_TYPE.BUTTON} onClick={onClose} className="button-secondary">
              {intl.cancel}
            </Button>
            <Button type={BUTTON_TYPE.SUBMIT} className="button-primary">
              {intl.confirmInterest}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
