// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  endpoint : '/data',
  firebaseConfig :{
    apiKey: "AIzaSyB1CNUz5H8cKbOoR_OvaW8TR7MoJBxw_Uw",
    authDomain: "angular5crud-3897c.firebaseapp.com",
    databaseURL: "https://angular5crud-3897c.firebaseio.com",
    projectId: "angular5crud-3897c",
    storageBucket: "angular5crud-3897c.appspot.com",
    messagingSenderId: "228657996049"
  }

};
