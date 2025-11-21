import { ICONS } from '../../constants';

const BENEFIT_ICONS = {
  MONEY: ICONS.MONEY,
  SHIP: ICONS.SHIP,
  CHECK: ICONS.CHECK
} as const;

interface LandingIntl {
  step1Title: string;
  step1Description: string;
  step2Title: string;
  step2Description: string;
  step3Title: string;
  step3Description: string;
  step4Title: string;
  step4Description: string;
  benefit1Title: string;
  benefit1Description: string;
  benefit2Title: string;
  benefit2Description: string;
  benefit3Title: string;
  benefit3Description: string;
}

export const getSteps = (intl: LandingIntl) => [
  {
    number: 1,
    title: intl.step1Title,
    description: intl.step1Description
  },
  {
    number: 2,
    title: intl.step2Title,
    description: intl.step2Description
  },
  {
    number: 3,
    title: intl.step3Title,
    description: intl.step3Description
  },
  {
    number: 4,
    title: intl.step4Title,
    description: intl.step4Description
  }
];

export const getBenefits = (intl: LandingIntl) => [
  {
    icon: BENEFIT_ICONS.MONEY,
    title: intl.benefit1Title,
    description: intl.benefit1Description
  },
  {
    icon: BENEFIT_ICONS.SHIP,
    title: intl.benefit2Title,
    description: intl.benefit2Description
  },
  {
    icon: BENEFIT_ICONS.CHECK,
    title: intl.benefit3Title,
    description: intl.benefit3Description
  }
];

