import { writable } from 'svelte/store';
import { database } from './firebaseConfig';
import { ref, get } from 'firebase/database';

export const newsStore = writable([]);

// Function to fetch news from Firebase
export const fetchNews = async () => {
    try {
        const newsRef = ref(database, 'news');
        const snapshot = await get(newsRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const newsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            newsStore.set(newsArray);
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

// Function to fetch a specific article from Firebase
export const fetchArticle = async (id) => {
    try {
        const articleRef = ref(database, `news/${id}`);
        const snapshot = await get(articleRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
};
