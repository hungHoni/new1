<script>
    import { onMount } from "svelte";
    import { newsStore, fetchNews } from "../store";
    import Card from "./Card.svelte";

    let news = [];

    // Fetch news data when the component mounts
    onMount(() => {
        fetchNews(); // Call the function to fetch news
    });

    // Subscribe to the news store to get updates
    const unsubscribe = newsStore.subscribe(value => {
        console.log('Subscribed news:', value);
        news = value;
    });
</script>

<!-- Grid layout for the cards -->
<div class="card-grid">
    <!-- Iterate over the news array and create a Card component for each item -->
    {#each news as item (item.id)}
        <Card id={item.id} title={item.title} images={item.images} />
    {/each}
</div>

<style>
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
        background-color: #f5f5f5;
    }
</style>
