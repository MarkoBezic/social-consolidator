import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCZZ6-1ltXWavCaVROuxJisRulri5HyFnM',
  authDomain: 'social-consolidator.firebaseapp.com',
  projectId: 'social-consolidator',
  storageBucket: 'social-consolidator.appspot.com',
  messagingSenderId: '962646422748',
  appId: '1:962646422748:web:ee592fb331ba590d07f019',
  measurementId: 'G-JKEJR7GTDW',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const userDataRef = db.collection('userDataRef')

export { userDataRef }
