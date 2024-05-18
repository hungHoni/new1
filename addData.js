import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Replace with your own Firebase project configuration
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

const initialData = {
  news: {
    news1: {
      title: "News Title 1",
      images: "url_to_image1",
      content: "Content of the news 1",
      category: "Category1"
    },
    news2: {
      title: "News Title 2",
      images: "url_to_image2",
      content: "Content of the news 2",
      category: "Category2"
    }
  }
};

const setData = async () => {
  try {
    const newsRef = ref(database, 'news');
    await set(newsRef, initialData.news);
    console.log("Initial data set successfully!");
  } catch (error) {
    console.error("Error setting initial data:", error);
  }
};

setData();
