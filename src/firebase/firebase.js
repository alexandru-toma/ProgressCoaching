import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB9nsSRA_7Z-lgx0hllmOb2KUgBfPqAP4g",
  authDomain: "progresscoaching-5265d.firebaseapp.com",
  databaseURL: "https://progresscoaching-5265d.firebaseio.com",
  projectId: "progresscoaching-5265d",
  storageBucket: "progresscoaching-5265d.appspot.com",
  messagingSenderId: "568327716588"
}

firebase.initializeApp(config)
const database = firebase.database()

export { firebase, database as default }