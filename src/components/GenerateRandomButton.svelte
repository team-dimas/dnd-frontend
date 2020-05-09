<script>
    import AnimatedDice6 from './AnimatedDice6.svelte';

    let dice;
</script>

<button on:click={dice.animate} class="container">
    <span class="typography-caption caption">
        Generate Random
    </span>

    <AnimatedDice6 height="16" width="16" bind:this={dice}/>
</button>

<style>
    .container {
        display: flex;
        align-items: center;
        padding: 0;
        border: none;
    }
    .caption {
        text-transform: uppercase;
        margin-right: 4px;
    }
</style>
