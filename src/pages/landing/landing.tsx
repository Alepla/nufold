import { useIntl } from 'react-intl';
import { Layout } from '../../components';
import { Step, Benefit } from './components';
import { getSteps, getBenefits } from './constants';

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

  const steps = getSteps(intl);
  const benefits = getBenefits(intl);

  return (
    <Layout
      className="landing"
      title={intl.title}
      subtitle={intl.subtitle}
    >
      <section className="landing__section">
          <h2 className="landing__section-title">{intl.whatWeDoTitle}</h2>
          <p className="landing__section-text">{intl.whatWeDoDescription}</p>
        </section>

        <section className="landing__section">
          <h2 className="landing__section-title">{intl.howItWorksTitle}</h2>
          <div className="landing__steps">
            {steps.map(step => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section className="landing__section">
          <h2 className="landing__section-title">{intl.benefitsTitle}</h2>
          <div className="landing__benefits">
            {benefits.map((benefit, index) => (
              <Benefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </section>

        <section className="landing__cta">
          <h2 className="landing__cta-title">{intl.ctaTitle}</h2>
          <p className="landing__cta-description">{intl.ctaDescription}</p>
        </section>
    </Layout>
  );
};

