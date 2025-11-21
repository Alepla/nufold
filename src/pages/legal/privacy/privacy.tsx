import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout } from '../../../components';
import { LegalSection } from '../components';
import { ROUTES } from '../../../constants';
import { formatLongDate } from '../../../utils';

export const Privacy: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'privacy.title' }),
    lastUpdated: formatMessage({ id: 'privacy.lastUpdated' }),
    introduction: formatMessage({ id: 'privacy.introduction' }),
    dataCollectionTitle: formatMessage({ id: 'privacy.dataCollectionTitle' }),
    dataCollectionContent: formatMessage({ id: 'privacy.dataCollectionContent' }),
    dataCollectionItem1: formatMessage({ id: 'privacy.dataCollectionItem1' }),
    dataCollectionItem2: formatMessage({ id: 'privacy.dataCollectionItem2' }),
    dataCollectionItem3: formatMessage({ id: 'privacy.dataCollectionItem3' }),
    dataCollectionItem4: formatMessage({ id: 'privacy.dataCollectionItem4' }),
    dataUseTitle: formatMessage({ id: 'privacy.dataUseTitle' }),
    dataUseContent: formatMessage({ id: 'privacy.dataUseContent' }),
    dataUseItem1: formatMessage({ id: 'privacy.dataUseItem1' }),
    dataUseItem2: formatMessage({ id: 'privacy.dataUseItem2' }),
    dataUseItem3: formatMessage({ id: 'privacy.dataUseItem3' }),
    dataUseItem4: formatMessage({ id: 'privacy.dataUseItem4' }),
    dataProtectionTitle: formatMessage({ id: 'privacy.dataProtectionTitle' }),
    dataProtectionContent: formatMessage({ id: 'privacy.dataProtectionContent' }),
    userRightsTitle: formatMessage({ id: 'privacy.userRightsTitle' }),
    userRightsContent: formatMessage({ id: 'privacy.userRightsContent' }),
    userRightsItem1: formatMessage({ id: 'privacy.userRightsItem1' }),
    userRightsItem2: formatMessage({ id: 'privacy.userRightsItem2' }),
    userRightsItem3: formatMessage({ id: 'privacy.userRightsItem3' }),
    userRightsItem4: formatMessage({ id: 'privacy.userRightsItem4' }),
    cookiesTitle: formatMessage({ id: 'privacy.cookiesTitle' }),
    cookiesContent: formatMessage({ id: 'privacy.cookiesContent' }),
    thirdPartiesTitle: formatMessage({ id: 'privacy.thirdPartiesTitle' }),
    thirdPartiesContent: formatMessage({ id: 'privacy.thirdPartiesContent' }),
    changesTitle: formatMessage({ id: 'privacy.changesTitle' }),
    changesContent: formatMessage({ id: 'privacy.changesContent' }),
    contactTitle: formatMessage({ id: 'privacy.contactTitle' }),
    contactContent: formatMessage({ id: 'privacy.contactContent' }),
    backHome: formatMessage({ id: 'notFound.backHome' }),
  };

  const sections = [
    {
      title: intl.dataCollectionTitle,
      content: intl.dataCollectionContent,
      items: [
        intl.dataCollectionItem1,
        intl.dataCollectionItem2,
        intl.dataCollectionItem3,
        intl.dataCollectionItem4,
      ],
    },
    {
      title: intl.dataUseTitle,
      content: intl.dataUseContent,
      items: [intl.dataUseItem1, intl.dataUseItem2, intl.dataUseItem3, intl.dataUseItem4],
    },
    { title: intl.dataProtectionTitle, content: intl.dataProtectionContent },
    {
      title: intl.userRightsTitle,
      content: intl.userRightsContent,
      items: [
        intl.userRightsItem1,
        intl.userRightsItem2,
        intl.userRightsItem3,
        intl.userRightsItem4,
      ],
    },
    { title: intl.cookiesTitle, content: intl.cookiesContent },
    { title: intl.thirdPartiesTitle, content: intl.thirdPartiesContent },
    { title: intl.changesTitle, content: intl.changesContent },
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
