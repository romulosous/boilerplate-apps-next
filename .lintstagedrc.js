module.exports = {
  '*/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'eslint',
    'jest -- --findRelatedTests'
  ],
  '*/**/*.{json,css,md}': ['prettier --write']
}
