export const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
