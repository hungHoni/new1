<!-- src/components/Hero.svelte -->

<script>
    // You can define any necessary variables or functions here
</script>

<!-- Main section for the hero component -->
<section class="hero">
    <!-- Title and subtitle for the hero section -->
    <h1>Expert craftspeople.<br> <span>At your service.</span></h1>
    <!-- Description paragraph -->
    <p>Our experienced, multidisciplinary teams deliver ROI faster. Whether we’re filling strategic gaps or providing a normed, complete squad, clients rate us as their highest-velocity partner.</p>
</section>

<style>
    /* Style for the hero section */
    .hero {
        text-align: left; /* Align text to the left */
        padding: 50px 20px; /* Add padding around the section */
        background-color: #f5f5f5; /* Set background color to light gray */
        max-width: 1200px; /* Set maximum width */
        margin: 0 auto; /* Center the section horizontally */
    }

    h1 {
        font-size: 3em; /* Increase the font size */
        font-weight: bold; /* Make the text bold */
        margin-bottom: 20px; /* Add space below the title */
        line-height: 1.2; /* Adjust the line height */
        color: #333; /* Set text color to dark gray */
    }

    h1 span {
        color: #00BFA5; /* Set the color of the span text */
        background-color: rgba(0, 191, 165, 0.1); /* Add a light background color */
        padding: 0 10px; /* Add padding to the span */
    }

    p {
        font-size: 1.2em; /* Increase the font size */
        color: #555; /* Set the text color */
        max-width: 600px; /* Set maximum width for the paragraph */
    }
</style>
