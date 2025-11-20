import { useState } from 'react';
import { useIntl } from 'react-intl';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const intl = {
    title: formatMessage({ id: 'faq.title' }),
    subtitle: formatMessage({ id: 'faq.subtitle' })
  };

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: formatMessage({ id: 'faq.q1' }),
      answer: formatMessage({ id: 'faq.a1' })
    },
    {
      id: '2',
      question: formatMessage({ id: 'faq.q2' }),
      answer: formatMessage({ id: 'faq.a2' })
    },
    {
      id: '3',
      question: formatMessage({ id: 'faq.q3' }),
      answer: formatMessage({ id: 'faq.a3' })
    },
    {
      id: '4',
      question: formatMessage({ id: 'faq.q4' }),
      answer: formatMessage({ id: 'faq.a4' })
    },
    {
      id: '5',
      question: formatMessage({ id: 'faq.q5' }),
      answer: formatMessage({ id: 'faq.a5' })
    },
    {
      id: '6',
      question: formatMessage({ id: 'faq.q6' }),
      answer: formatMessage({ id: 'faq.a6' })
    },
    {
      id: '7',
      question: formatMessage({ id: 'faq.q7' }),
      answer: formatMessage({ id: 'faq.a7' })
    },
    {
      id: '8',
      question: formatMessage({ id: 'faq.q8' }),
      answer: formatMessage({ id: 'faq.a8' })
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-page__container">
        <div className="faq-page__header">
          <h1 className="faq-page__title">{intl.title}</h1>
          <p className="faq-page__subtitle">{intl.subtitle}</p>
        </div>

        <div className="faq-page__list">
          {faqItems.map(item => {
            const isOpen = openItems.has(item.id);
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

