module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-typescript',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'max-depth': 'error',
    'max-lines': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.tsx', '**/*.test.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
