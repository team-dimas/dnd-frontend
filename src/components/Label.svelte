
<div class="container">
    <label class="typography-caption label">
        <slot name="label"/>
    </label>
    <slot/>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
    .label {
        color: var(--color-very-dark-gray);
    }
</style>
