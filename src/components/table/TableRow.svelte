<script>
    import { getContext } from 'svelte';
    import { TABLE_CONTEXT } from '../../helpers/context-keys';

    const { visibleColumns } = getContext(TABLE_CONTEXT);
</script>

<tr>

    {#each $visibleColumns as column}
        <td>
            <slot {column}/>
        </td>
    {/each}

</tr>
