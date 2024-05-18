<script>
    export let id;
    export let title;
    export let images;
</script>

<!-- Card layout -->
<div class="card">
    <h2>{title}</h2>
    <img src={images} alt={title} class="news-image" />
    <a class="continue-button" href={`/article/${id}`}>Tap to Continue</a>
</div>

<style>
    .card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #333;
    }

    .news-image {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .continue-button {
        background-color: #00BFA5;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        display: inline-block;
    }

    .continue-button:hover {
        background-color: #009688;
    }
</style>
