<script>
    import HomeButton from './HomeButton.svelte';
    import {homeButtons} from '../stores/home.store';

    let buttonSelected = false;
    let selectedIndex;

    function handleButtonSelect(index) {
        buttonSelected = true;
        selectedIndex = index;
    }
</script>

<div class="container">
    {#each $homeButtons as button, index}
        <HomeButton
            props={button}
            selected={selectedIndex === index}
            hidden={buttonSelected && selectedIndex !== index}
            on:select={() => handleButtonSelect(index)}
        />
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;
        height: 100%;
    }

    @media (max-width: 600px) {
        .container {
            flex-direction: column;
        }
    }
</style>
