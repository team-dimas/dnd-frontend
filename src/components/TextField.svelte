<script>
    import { getContext } from 'svelte';
    import { FORM_FIELD_CONTEXT } from '../helpers/context-keys';

    export let value;

    const fieldContext = getContext(FORM_FIELD_CONTEXT);
    const id = fieldContext && fieldContext.id;
</script>

<input
    bind:value
    class="typography-input"
    type="text"
    {id}
>

<style>
    input {
        padding: 4px 10px;
        border: 1px solid var(--color-gray);
        border-radius: 6px;
        transition: box-shadow 0.2s ease-in-out;
        color: var(--color-gunmetal);
        background: var(--color-white);
    }
    input::placeholder {
        color: var(--color-light-gray);
    }
    input:focus {
        outline: none;
        border: 1px solid var(--color-soft-pink);
        box-shadow: inset 0 0 0 1px var(--color-soft-pink);
    }
</style>
