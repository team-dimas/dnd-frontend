<script>
    import AngleSvg from './svg/AngleSvg.svelte';
    import Popup from './Popup.svelte';
    import { getContext, setContext } from 'svelte';
    import { FORM_FIELD_CONTEXT, SELECT_FIELD_CONTEXT } from '../helpers/context-keys';
    import { writable, derived } from 'svelte/store';
    import { fly } from 'svelte/transition';

    export let value;
    let valueStore = writable(value);

    let selectElement;
    let containerElement;
    let popupVisible;

    const fieldContext = getContext(FORM_FIELD_CONTEXT);
    const id = fieldContext && fieldContext.id || '';

    $: valueStore.set(value);

    setContext(SELECT_FIELD_CONTEXT, {
        selectValue: newValue => {
            value = newValue;
            popupVisible = false;
        },
        selectedValue: derived(valueStore, _ => _)
    });

    function handleClick() {
        popupVisible = !popupVisible;
    }
</script>

<svelte:body on:click={() => popupVisible = false} />

<div
    bind:this={containerElement}
    class="container"
>
    <input
        id={id}
        class="typography-input"
        type="button"
        bind:value
        bind:this={selectElement}
        on:click|preventDefault|stopPropagation={handleClick}
    />

    <div class="handle">
        <AngleSvg width="24" height="24" orientation={popupVisible ? 'up' : 'down'}/>
    </div>
</div>
<Popup
    class="_full-width"
    visible={popupVisible}
    attach={selectElement}
    container={containerElement}
    position="bottom"
    transition={fly}
    transitionParams={{y: -6}}
>
    <div class="popup">
        <slot/>
    </div>
</Popup>

<style>
    input {
        padding: 4px 10px;
        border: 1px solid var(--color-gray);
        border-radius: 6px;
        transition: box-shadow 0.2s ease-in-out;
        color: var(--color-gunmetal);
        background: var(--color-white);
        text-align: left;
        flex: 1;
        cursor: pointer;
    }
    input::placeholder {
        color: var(--color-light-gray);
    }
    input:focus {
        outline: none;
        border: 1px solid var(--color-soft-pink);
        box-shadow: inset 0 0 0 1px var(--color-soft-pink);
    }
    .container {
        position: relative;
        display: flex;
    }
    .handle {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        display: flex;
    }
    .popup {
        width: 100%;
        margin-top: 6px;
        background: var(--color-white);
        border: 1px solid var(--color-gray);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 15px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
    }
</style>
