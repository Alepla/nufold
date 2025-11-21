import { useIntl } from 'react-intl';
import { faqItemsData } from './faq-data';
import { useFAQ } from './hooks/use-faq';

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  const { toggleItem, isItemOpen } = useFAQ();

  const intl = {
    title: formatMessage({ id: 'faq.title' }),
    subtitle: formatMessage({ id: 'faq.subtitle' }),
    faqItems: faqItemsData.map(item => ({
      id: item.id,
      question: formatMessage({ id: item.questionKey }),
      answer: formatMessage({ id: item.answerKey })
    }))
  };

  return (
    <div className="faq-page page-gradient">
      <div className="faq-page__container">
        <div className="faq-page__header">
          <h1 className="faq-page__title">{intl.title}</h1>
          <p className="faq-page__subtitle">{intl.subtitle}</p>
        </div>

        <div className="faq-page__list">
          {intl.faqItems.map(item => {
            const isOpen = isItemOpen(item.id);
            return (
              <div key={item.id} className={`faq-page__item ${isOpen ? 'faq-page__item--open' : ''}`}>
                <button
                  className="faq-page__question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-page__question-text">{item.question}</span>
                  <svg
                    className={`faq-page__icon ${isOpen ? 'faq-page__icon--open' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                {isOpen && (
                  <div className="faq-page__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

