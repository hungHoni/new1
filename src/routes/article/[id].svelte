<script context="module">
    import { fetchArticle } from '../../store';

    export async function load({ params }) {
        const article = await fetchArticle(params.id);
        if (article) {
            return {
                props: {
                    article
                }
            };
        } else {
            return {
                status: 404,
                error: new Error('Article not found')
            };
        }
    }
</script>

<script>
    export let article;
</script>

<!-- Article layout -->
<div class="article">
    <h1>{article.title}</h1>
    <img src={article.images} alt={article.title} class="news-image" />
    <p>{article.content}</p>
</div>

<style>
    .article {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin: 20px auto;
        max-width: 800px;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 20px;
        color: #333;
    }

    .news-image {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2em;
        color: #555;
    }
</style>
