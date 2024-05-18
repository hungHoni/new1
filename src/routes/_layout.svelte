<script>
    import Nav from '../components/Nav.svelte';
</script>

<Nav />

<main>
    <slot></slot>
</main>

<style>
    main {
        padding: 20px;
    }
</style>
