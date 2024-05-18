<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Create a store to hold the news articles
    const newsStore = writable([]);

    // Function to fetch news from the backend API
    const fetchNews = async () => {
        try {
            const response = await fetch('http://localhost:3000/news');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            newsStore.set(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    // Fetch news when the component mounts
    onMount(() => {
        fetchNews();
    });
</script>

<style>
    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .news-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .news-card h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .news-card p {
        font-size: 1em;
        color: #555;
    }

    .news-card a {
        color: #00BFA5;
        text-decoration: none;
        font-weight: bold;
    }

    .news-card a:hover {
        text-decoration: underline;
    }
</style>

<div class="news-grid">
    {#each $newsStore as article}
        <div class="news-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Source: <a href={article.url} target="_blank">{article.source.name}</a></p>
        </div>
    {/each}
</div>
