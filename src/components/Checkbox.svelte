<script>
    import CheckSvg from './svg/CheckSvg.svelte';
    import { generateUniqueId } from '../helpers/id.helper';

    export let value;

    const id = generateUniqueId();
</script>

<input
    type="checkbox"
    {id}
    bind:checked={value}
>
<label for={id}>
    <div
        class="square"
        class:checked={value}
    >
        {#if value}
            <CheckSvg width="19" height="19" fill="white"/>
        {/if}
    </div>
    <slot/>
</label>

<style>
    input {
        display: none;
    }
    label {
        display: flex;
        cursor: pointer;
    }
    .square {
        width: 20px;
        min-width: 20px;
        height: 20px;
        min-height: 20px;
        background-color: var(--color-white);
        border: 1px solid var(--color-gray);
        border-radius: 6px;
        display: flex;
        margin-right: 6px;
    }
    .square.checked {
        background-color: var(--color-soft-pink);
        border: 1px solid var(--color-soft-pink);
    }
</style>
