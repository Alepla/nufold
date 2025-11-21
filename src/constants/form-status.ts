export const FORM_STATUS = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export type FormStatus = typeof FORM_STATUS[keyof typeof FORM_STATUS];

