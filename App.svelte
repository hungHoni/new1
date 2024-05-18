<!-- src/App.svelte -->

<script>
    // Import the components
    import Hero from './components/Hero.svelte';
    import Nav from './components/Nav.svelte';
    import CardGrid from './components/CardGrid.svelte';
</script>

<main>
    <!-- Include the navigation bar -->
    <Nav />
    <div class="container">
        <!-- Include the Hero component -->
        <Hero />
        <!-- Include the CardGrid component -->
        <CardGrid />
    </div>
</main>

<style>
    /* Global styles for the main container */
    main {
        font-family: Arial, sans-serif; /* Set the font family */
    }

    .container {
        width: 100%; /* Set the width to 100% */
        max-width: 1200px; /* Set maximum width */
        margin: 0 auto; /* Center the container */
        padding: 0 20px; /* Add padding */
    }
</style>
