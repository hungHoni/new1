const express = require('express');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, get } = require('firebase/database');

const app = express();
const PORT = process.env.PORT || 3000;

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

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

// Endpoint to get a specific news article by ID
app.get('/news/:id', async (req, res) => {
    const { id } = req.params;
    const newsRef = ref(database, `news/${id}`);
    try {
        const snapshot = await get(newsRef);
        if (snapshot.exists()) {
            res.json(snapshot.val());
        } else {
            res.status(404).send('Article not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching article');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
