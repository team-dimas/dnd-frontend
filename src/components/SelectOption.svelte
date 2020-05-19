<script>
    import { getContext } from 'svelte';
    import { SELECT_FIELD_CONTEXT } from '../helpers/context-keys';

    export let value;
    let selected;

    const {
        selectValue,
        selectedValue
    } = getContext(SELECT_FIELD_CONTEXT);

    $: selected = $selectedValue && $selectedValue === value;

</script>

<div
    class:selected
    on:click={() => selectValue(value)}
    class="container typography-body"
>
    <slot {selected}/>
</div>

<style>
    .container {
        padding: 8px 10px;
        color: var(--color-gunmetal);
        transition: color .2s ease;
        cursor: pointer;
    }
    .container:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    .container.selected {
        background: rgba(0, 0, 0, 0.08);
    }
    .container + .container {
        border-top: 1px solid var(--color-gray);
    }
</style>
