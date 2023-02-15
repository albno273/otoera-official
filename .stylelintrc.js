/** @type import('stylelint').Configuration */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-declaration-block-no-ignored-properties', 'stylelint-scss'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'max-nesting-depth': 8,
    'scss/at-rule-no-unknown': true,
  },
};
