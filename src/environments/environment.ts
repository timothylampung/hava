// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  endpoint : '/data',
  firebaseConfig :{
    apiKey: "AIzaSyCCKi-gxrpQYdGOjnNcYFVLJBMOGcwYJHw",
    authDomain: "hava-5e348.firebaseapp.com",
    databaseURL: "https://hava-5e348.firebaseio.com",
    projectId: "hava-5e348",
    storageBucket: "hava-5e348.appspot.com",
    messagingSenderId: "287104892635"
  }

};
