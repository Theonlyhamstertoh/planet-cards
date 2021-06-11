import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3-DDo0vpMKIdjdy-9Nv0yg8fkxqwp29M",
  authDomain: "planet-cards-8b9ad.firebaseapp.com",
  projectId: "planet-cards-8b9ad",
  storageBucket: "planet-cards-8b9ad.appspot.com",
  messagingSenderId: "343673262327",
  appId: "1:343673262327:web:c176c82ba8df7e865583f2",
  measurementId: "G-JKDVELDZKH",
};

import isNode from "detect-node";
export async function analyticsLogEvents(event, params) {
  if (!isNode) {
    const firebase = await import("firebase/app");
    await import("firebase/analytics");
    firebase.default.analytics().logEvent(event, params);
  } else {
    firebase.analytics();
  }
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export default db;
