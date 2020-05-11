<script>
    export let kind = 'default'; // default | primary
</script>

<button
    class="typography-body"
    class:kind-primary={kind === 'primary'}
    class:kind-default={kind === 'default'}
    on:click
>
    <slot/>
</button>

<style>
    button {
        padding: 4px 12px;
        border-width: 1px;
        border-style: solid;
        border-radius: 6px;
        display: flex;
        cursor: pointer;
    }
    button.kind-primary {
        font-family: 'Oleo Script', sans-serif;
        color: var(--color-white);
        background-color: var(--color-soft-pink);
        border-color: var(--color-soft-pink);
    }
    button.kind-default {
        color: var(--color-gunmetal);
        background-color: var(--color-white);
        border-color: var(--color-gray);
    }
</style>
