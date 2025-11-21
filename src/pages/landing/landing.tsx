import { useIntl } from 'react-intl';
import { ICONS } from '../../constants';

const BENEFIT_ICONS = {
  MONEY: ICONS.MONEY,
  SHIP: ICONS.SHIP,
  CHECK: ICONS.CHECK
} as const;

export const Landing: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'landing.title' }),
    subtitle: formatMessage({ id: 'landing.subtitle' }),
    whatWeDoTitle: formatMessage({ id: 'landing.whatWeDoTitle' }),
    whatWeDoDescription: formatMessage({ id: 'landing.whatWeDoDescription' }),
    howItWorksTitle: formatMessage({ id: 'landing.howItWorksTitle' }),
    step1Title: formatMessage({ id: 'landing.step1Title' }),
    step1Description: formatMessage({ id: 'landing.step1Description' }),
    step2Title: formatMessage({ id: 'landing.step2Title' }),
    step2Description: formatMessage({ id: 'landing.step2Description' }),
    step3Title: formatMessage({ id: 'landing.step3Title' }),
    step3Description: formatMessage({ id: 'landing.step3Description' }),
    step4Title: formatMessage({ id: 'landing.step4Title' }),
    step4Description: formatMessage({ id: 'landing.step4Description' }),
    benefitsTitle: formatMessage({ id: 'landing.benefitsTitle' }),
    benefit1Title: formatMessage({ id: 'landing.benefit1Title' }),
    benefit1Description: formatMessage({ id: 'landing.benefit1Description' }),
    benefit2Title: formatMessage({ id: 'landing.benefit2Title' }),
    benefit2Description: formatMessage({ id: 'landing.benefit2Description' }),
    benefit3Title: formatMessage({ id: 'landing.benefit3Title' }),
    benefit3Description: formatMessage({ id: 'landing.benefit3Description' }),
    ctaTitle: formatMessage({ id: 'landing.ctaTitle' }),
    ctaDescription: formatMessage({ id: 'landing.ctaDescription' })
  };

  return (
    <div className="landing page-gradient">
      <div className="landing__container">
        <div className="landing__hero">
          <h1 className="landing__title">{intl.title}</h1>
          <p className="landing__subtitle">{intl.subtitle}</p>
        </div>

        <section className="landing__section">
          <h2 className="landing__section-title">{intl.whatWeDoTitle}</h2>
          <p className="landing__section-text">{intl.whatWeDoDescription}</p>
        </section>

        <section className="landing__section">
          <h2 className="landing__section-title">{intl.howItWorksTitle}</h2>
          <div className="landing__steps">
            <div className="landing__step">
              <div className="landing__step-number">1</div>
              <div className="landing__step-content">
                <h3 className="landing__step-title">{intl.step1Title}</h3>
                <p className="landing__step-description">{intl.step1Description}</p>
              </div>
            </div>

            <div className="landing__step">
              <div className="landing__step-number">2</div>
              <div className="landing__step-content">
                <h3 className="landing__step-title">{intl.step2Title}</h3>
                <p className="landing__step-description">{intl.step2Description}</p>
              </div>
            </div>

            <div className="landing__step">
              <div className="landing__step-number">3</div>
              <div className="landing__step-content">
                <h3 className="landing__step-title">{intl.step3Title}</h3>
                <p className="landing__step-description">{intl.step3Description}</p>
              </div>
            </div>

            <div className="landing__step">
              <div className="landing__step-number">4</div>
              <div className="landing__step-content">
                <h3 className="landing__step-title">{intl.step4Title}</h3>
                <p className="landing__step-description">{intl.step4Description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="landing__section">
          <h2 className="landing__section-title">{intl.benefitsTitle}</h2>
          <div className="landing__benefits">
            <div className="landing__benefit">
              <div className="landing__benefit-icon">{BENEFIT_ICONS.MONEY}</div>
              <h3 className="landing__benefit-title">{intl.benefit1Title}</h3>
              <p className="landing__benefit-description">{intl.benefit1Description}</p>
            </div>

            <div className="landing__benefit">
              <div className="landing__benefit-icon">{BENEFIT_ICONS.SHIP}</div>
              <h3 className="landing__benefit-title">{intl.benefit2Title}</h3>
              <p className="landing__benefit-description">{intl.benefit2Description}</p>
            </div>

            <div className="landing__benefit">
              <div className="landing__benefit-icon">{BENEFIT_ICONS.CHECK}</div>
              <h3 className="landing__benefit-title">{intl.benefit3Title}</h3>
              <p className="landing__benefit-description">{intl.benefit3Description}</p>
            </div>
          </div>
        </section>

        <section className="landing__cta">
          <h2 className="landing__cta-title">{intl.ctaTitle}</h2>
          <p className="landing__cta-description">{intl.ctaDescription}</p>
        </section>
      </div>
    </div>
  );
};

