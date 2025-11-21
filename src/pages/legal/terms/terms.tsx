import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout } from '../../../components';
import { LegalSection } from '../components';
import { ROUTES } from '../../../constants';
import { formatLongDate } from '../../../utils';

export const Terms: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'terms.title' }),
    lastUpdated: formatMessage({ id: 'terms.lastUpdated' }),
    introduction: formatMessage({ id: 'terms.introduction' }),
    acceptanceTitle: formatMessage({ id: 'terms.acceptanceTitle' }),
    acceptanceContent: formatMessage({ id: 'terms.acceptanceContent' }),
    serviceDescriptionTitle: formatMessage({ id: 'terms.serviceDescriptionTitle' }),
    serviceDescriptionContent: formatMessage({ id: 'terms.serviceDescriptionContent' }),
    userObligationsTitle: formatMessage({ id: 'terms.userObligationsTitle' }),
    userObligationsContent: formatMessage({ id: 'terms.userObligationsContent' }),
    userObligationsItem1: formatMessage({ id: 'terms.userObligationsItem1' }),
    userObligationsItem2: formatMessage({ id: 'terms.userObligationsItem2' }),
    userObligationsItem3: formatMessage({ id: 'terms.userObligationsItem3' }),
    userObligationsItem4: formatMessage({ id: 'terms.userObligationsItem4' }),
    paymentsTitle: formatMessage({ id: 'terms.paymentsTitle' }),
    paymentsContent: formatMessage({ id: 'terms.paymentsContent' }),
    cancellationsTitle: formatMessage({ id: 'terms.cancellationsTitle' }),
    cancellationsContent: formatMessage({ id: 'terms.cancellationsContent' }),
    liabilityTitle: formatMessage({ id: 'terms.liabilityTitle' }),
    liabilityContent: formatMessage({ id: 'terms.liabilityContent' }),
    intellectualPropertyTitle: formatMessage({ id: 'terms.intellectualPropertyTitle' }),
    intellectualPropertyContent: formatMessage({ id: 'terms.intellectualPropertyContent' }),
    modificationsTitle: formatMessage({ id: 'terms.modificationsTitle' }),
    modificationsContent: formatMessage({ id: 'terms.modificationsContent' }),
    terminationTitle: formatMessage({ id: 'terms.terminationTitle' }),
    terminationContent: formatMessage({ id: 'terms.terminationContent' }),
    applicableLawTitle: formatMessage({ id: 'terms.applicableLawTitle' }),
    applicableLawContent: formatMessage({ id: 'terms.applicableLawContent' }),
    contactTitle: formatMessage({ id: 'terms.contactTitle' }),
    contactContent: formatMessage({ id: 'terms.contactContent' }),
    backHome: formatMessage({ id: 'notFound.backHome' }),
  };

  const sections = [
    { title: intl.acceptanceTitle, content: intl.acceptanceContent },
    { title: intl.serviceDescriptionTitle, content: intl.serviceDescriptionContent },
    {
      title: intl.userObligationsTitle,
      content: intl.userObligationsContent,
      items: [
        intl.userObligationsItem1,
        intl.userObligationsItem2,
        intl.userObligationsItem3,
        intl.userObligationsItem4,
      ],
    },
    { title: intl.paymentsTitle, content: intl.paymentsContent },
    { title: intl.cancellationsTitle, content: intl.cancellationsContent },
    { title: intl.liabilityTitle, content: intl.liabilityContent },
    { title: intl.intellectualPropertyTitle, content: intl.intellectualPropertyContent },
    { title: intl.modificationsTitle, content: intl.modificationsContent },
    { title: intl.terminationTitle, content: intl.terminationContent },
    { title: intl.applicableLawTitle, content: intl.applicableLawContent },
    { title: intl.contactTitle, content: intl.contactContent },
  ];

  return (
    <Layout
      className="legal-page"
      title={intl.title}
      headerExtra={
        <p className="legal-page__date">
          {intl.lastUpdated}: {formatLongDate(new Date())}
        </p>
      }
    >
      <div className="legal-page__content">
        <section className="legal-page__section">
          <p className="legal-page__text">{intl.introduction}</p>
        </section>

        {sections.map((section, index) => (
          <LegalSection
            key={index}
            title={section.title}
            content={section.content}
            items={section.items}
          />
        ))}
      </div>

      <div className="legal-page__footer">
        <Link to={ROUTES.LANDING} className="legal-page__back-link">
          {intl.backHome}
        </Link>
      </div>
    </Layout>
  );
};
