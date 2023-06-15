// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAFb4ZyVv31SsrghwddV0vuaiRjDjcZU60",
    authDomain: "andaluzia-3db0f.firebaseapp.com",
    databaseURL: "https://andaluzia-3db0f-default-rtdb.firebaseio.com",
    projectId: "andaluzia-3db0f",
    storageBucket: "andaluzia-3db0f.appspot.com",
    messagingSenderId: "11641249144",
    appId: "1:11641249144:web:d8e933c2879da5a4cb7c8d",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
