<script>
    import { getContext } from 'svelte';
    import { FORM_FIELD_CONTEXT } from '../helpers/context-keys';

    const fieldContext = getContext(FORM_FIELD_CONTEXT);
    const id = fieldContext && fieldContext.id || '';
</script>

<label class="typography-caption label" for={id}>
    <slot/>
</label>

<style>
    .label {
        color: var(--color-very-dark-gray);
    }
</style>
