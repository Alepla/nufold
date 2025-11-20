import { useIntl } from 'react-intl';

export const About: React.FC = () => {
  const { formatMessage } = useIntl();

  const intl = {
    title: formatMessage({ id: 'about.title' }),
    subtitle: formatMessage({ id: 'about.subtitle' }),
    whatWeDoTitle: formatMessage({ id: 'about.whatWeDoTitle' }),
    whatWeDoDescription: formatMessage({ id: 'about.whatWeDoDescription' }),
    howItWorksTitle: formatMessage({ id: 'about.howItWorksTitle' }),
    step1Title: formatMessage({ id: 'about.step1Title' }),
    step1Description: formatMessage({ id: 'about.step1Description' }),
    step2Title: formatMessage({ id: 'about.step2Title' }),
    step2Description: formatMessage({ id: 'about.step2Description' }),
    step3Title: formatMessage({ id: 'about.step3Title' }),
    step3Description: formatMessage({ id: 'about.step3Description' }),
    step4Title: formatMessage({ id: 'about.step4Title' }),
    step4Description: formatMessage({ id: 'about.step4Description' }),
    benefitsTitle: formatMessage({ id: 'about.benefitsTitle' }),
    benefit1Title: formatMessage({ id: 'about.benefit1Title' }),
    benefit1Description: formatMessage({ id: 'about.benefit1Description' }),
    benefit2Title: formatMessage({ id: 'about.benefit2Title' }),
    benefit2Description: formatMessage({ id: 'about.benefit2Description' }),
    benefit3Title: formatMessage({ id: 'about.benefit3Title' }),
    benefit3Description: formatMessage({ id: 'about.benefit3Description' }),
    ctaTitle: formatMessage({ id: 'about.ctaTitle' }),
    ctaDescription: formatMessage({ id: 'about.ctaDescription' })
  };

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__hero">
          <h1 className="about__title">{intl.title}</h1>
          <p className="about__subtitle">{intl.subtitle}</p>
        </div>

        <section className="about__section">
          <h2 className="about__section-title">{intl.whatWeDoTitle}</h2>
          <p className="about__section-text">{intl.whatWeDoDescription}</p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">{intl.howItWorksTitle}</h2>
          <div className="about__steps">
            <div className="about__step">
              <div className="about__step-number">1</div>
              <div className="about__step-content">
                <h3 className="about__step-title">{intl.step1Title}</h3>
                <p className="about__step-description">{intl.step1Description}</p>
              </div>
            </div>

            <div className="about__step">
              <div className="about__step-number">2</div>
              <div className="about__step-content">
                <h3 className="about__step-title">{intl.step2Title}</h3>
                <p className="about__step-description">{intl.step2Description}</p>
              </div>
            </div>

            <div className="about__step">
              <div className="about__step-number">3</div>
              <div className="about__step-content">
                <h3 className="about__step-title">{intl.step3Title}</h3>
                <p className="about__step-description">{intl.step3Description}</p>
              </div>
            </div>

            <div className="about__step">
              <div className="about__step-number">4</div>
              <div className="about__step-content">
                <h3 className="about__step-title">{intl.step4Title}</h3>
                <p className="about__step-description">{intl.step4Description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__section-title">{intl.benefitsTitle}</h2>
          <div className="about__benefits">
            <div className="about__benefit">
              <div className="about__benefit-icon">💰</div>
              <h3 className="about__benefit-title">{intl.benefit1Title}</h3>
              <p className="about__benefit-description">{intl.benefit1Description}</p>
            </div>

            <div className="about__benefit">
              <div className="about__benefit-icon">🚢</div>
              <h3 className="about__benefit-title">{intl.benefit2Title}</h3>
              <p className="about__benefit-description">{intl.benefit2Description}</p>
            </div>

            <div className="about__benefit">
              <div className="about__benefit-icon">✅</div>
              <h3 className="about__benefit-title">{intl.benefit3Title}</h3>
              <p className="about__benefit-description">{intl.benefit3Description}</p>
            </div>
          </div>
        </section>

        <section className="about__cta">
          <h2 className="about__cta-title">{intl.ctaTitle}</h2>
          <p className="about__cta-description">{intl.ctaDescription}</p>
        </section>
      </div>
    </div>
  );
};

