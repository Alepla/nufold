export default {
  '*.{ts,tsx}': [
    (filenames) => `yarn eslint --fix --max-warnings 0 ${filenames.join(' ')}`,
    () => 'yarn tsc --noEmit',
  ],
};
