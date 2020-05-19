<script>
    import CheckSvg from './svg/CheckSvg.svelte';
    import { generateUniqueId } from '../helpers/id.helper';

    export let value;

    let focused;

    const id = generateUniqueId();
</script>

<input
    type="checkbox"
    {id}
    bind:checked={value}
    on:focus={() => focused = true}
    on:blur={() => focused = false}
>
<label for={id}>
    <div
        class="square"
        class:checked={value}
        class:focused={focused}
    >
        {#if value}
            <CheckSvg width="19" height="19" fill="white"/>
        {/if}
    </div>
    <slot/>
</label>

<style>
    input {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    label {
        display: flex;
        cursor: pointer;
    }
    .square {
        position: relative;
        width: 20px;
        min-width: 20px;
        height: 20px;
        min-height: 20px;
        background-color: var(--color-white);
        border: 1px solid var(--color-gray);
        border-radius: 6px;
        display: flex;
        margin-right: 6px;
        transition: background-color .2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .square:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 2px solid var(--color-soft-pink);
        border-radius: 6px;
        opacity: 0;
        transition: all .2s ease-in-out;
    }
    .square.checked {
        background-color: var(--color-soft-pink);
        border: 1px solid var(--color-soft-pink);
    }
    .square.focused {
        border: 1px solid var(--color-soft-pink);
        box-shadow: inset 0 0 0 1px var(--color-soft-pink);
    }
    .square.focused.checked:after {
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        border-radius: 10px;
        opacity: 1;
    }
</style>
