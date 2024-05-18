import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC4CeX1jSyfVZE5yV_SbgUXysfL7n3nsUY",
    authDomain: "sport-news-63511.firebaseapp.com",
    databaseURL: "https://sport-news-63511-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sport-news-63511",
    storageBucket: "sport-news-63511.appspot.com",
    messagingSenderId: "355560895130",
    appId: "1:355560895130:web:71fe70524ec61c8caca523"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
