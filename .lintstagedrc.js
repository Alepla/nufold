export default {
  '*.{ts,tsx}': [
    'yarn eslint --fix --max-warnings 0',
    () => 'yarn tsc --noEmit',
  ],
};
