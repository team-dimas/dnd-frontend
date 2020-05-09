<script>
    import AnimatedDice6 from './AnimatedDice6.svelte';

    let dice;
</script>

<AnimatedDice6 height="24" width="24" bind:this={dice}/>

<button on:click={dice.animate}> Spin!</button>
