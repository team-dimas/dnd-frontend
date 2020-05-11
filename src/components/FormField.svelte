<script>
    import { setContext } from 'svelte';
    import { FORM_FIELD_CONTEXT } from '../helpers/context-keys';
    import { generateUniqueId } from '../helpers/id.helper';

    setContext(FORM_FIELD_CONTEXT, {
        id: generateUniqueId(),
    });
</script>

<div class="container">
    <slot/>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>
