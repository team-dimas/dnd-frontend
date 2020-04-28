<script>
    import { tweened } from 'svelte/motion';
    import { expoOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let props;
    export let selected;
    export let hidden;

    const width = tweened(50, {
        duration: 300,
        easing: expoOut,
    });

    $: width.set(hidden ? 0 : (selected ? 100 : 50));

    function handleClick() {
        if (!selected && !hidden) {
            dispatch('select');
        }
    }
</script>

<div
    class="container {props.class}"
    class:selected
    style="flex-basis: {$width}%;"
    on:click={handleClick}
>
    <div class="content" class:hidden>
        <div class="icon-container">
            <svelte:component this={props.icon} width="100%" height={null}/>
        </div>
        <div class="text-container">
            <span class="text">{props.text}</span>
        </div>
    </div>
</div>

<style>
    .container {
        flex-shrink: 1;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        box-shadow: inset 0 0 250px rgba(0, 0, 0, 0.25);
        background: var(--color-gunmetal);
        transition: background .2s ease;
    }
    .container.join:hover, .container.join.selected {
        background: var(--color-bittersweet);
    }
    .container.host:hover, .container.host.selected {
        background: var(--color-dark-turquoise);
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }
    .content.hidden {
        display: none;
    }
    .icon-container {
        flex-grow: 210;
        padding: 0 90px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.65));
    }
    .text-container {
        flex-grow: 190;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .text {
        /*font-family: Mate SC;*/
        font-style: normal;
        font-weight: normal;
        font-size: 52px;
        color: var(--color-cosmic-latte);
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.65);
    }

    @media (max-width: 600px) {
        .text {
            font-size: 36px;
        }
    }
</style>
