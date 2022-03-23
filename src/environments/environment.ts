const packageJson = require('../../package.json');

export const environment = {
  appName: 'Escenitech',
  owner: 'Escenit Media S.L.',
  envName: 'DEV',
  themeName: 'default-theme',
  production: true,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
  },
  languages: ['ca', 'es', 'en'],
  defaultLanguage: 'es'
};
