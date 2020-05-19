<script>
    import { TABLE_CONTEXT } from '../../helpers/context-keys';
    import { setContext } from 'svelte';
    import { derived, writable } from 'svelte/store';

    export let rows;
    export let visibleColumns = [];

    const visibleColumnsStore = writable(visibleColumns);
    $: visibleColumnsStore.set(visibleColumns);

    setContext(TABLE_CONTEXT, {
        visibleColumns: derived(visibleColumnsStore, _ => _),
    });
</script>

<table>
    <slot name="head"/>
    <tbody>
        {#each rows as row}
            <slot {row}/>
        {/each}
    </tbody>
    <slot name="foot"/>
</table>
