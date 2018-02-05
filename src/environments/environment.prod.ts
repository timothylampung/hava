// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment: { production: boolean, endpoint: string; firebaseConfig: any } = {
  production: false,
  endpoint: '/data',
  firebaseConfig: {
    apiKey: 'AIzaSyCj_F5O6tboRNQTvgkLfo10LFPzoahWPag',
    authDomain: 'kahwin2-6ca62.firebaseapp.com',
    databaseURL: 'https://kahwin2-6ca62.firebaseio.com',
    projectId: 'kahwin2-6ca62',
    storageBucket: 'kahwin2-6ca62.appspot.com',
    messagingSenderId: '542374893569',
  },
};
