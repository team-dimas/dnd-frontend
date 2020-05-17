<script>
    import {
        getBoundingRectRelativeToContainer,
        relocateTargetElementToContainer,
    } from '../../../helpers/dom.helper';
    import { fade } from 'svelte/transition';

    export let visible;
    export let container;
    export let attach;
    export let position = 'center';
    export let transition = fade;
    export let transitionParams = {};

    let effectiveContainer;
    let popupElement;
    let popupElementTop;
    let popupElementLeft;

    $: effectiveContainer = container || (popupElement && popupElement.parentElement);

    $: if (visible && popupElement) {
        relocateTargetElementToContainer(popupElement, effectiveContainer);
        updatePosition();
    }

    function updatePosition() {
        let popupElementRect = getBoundingRectRelativeToContainer(popupElement, effectiveContainer);
        let attachElementRect = getBoundingRectRelativeToContainer(attach, effectiveContainer);
        let containerRect = effectiveContainer.getBoundingClientRect();

        switch (position) {
            case 'top':
                popupElementTop = attachElementRect.top - popupElementRect.height;
                popupElementLeft = attachElementRect.left;
                break;
            case 'right':
                popupElementTop = attachElementRect.top;
                popupElementLeft = attachElementRect.left + attachElementRect.width;
                break;
            case 'bottom':
                popupElementTop = attachElementRect.height + attachElementRect.top;
                popupElementLeft = attachElementRect.left;
                break;
            case 'left':
                popupElementTop = attachElementRect.top;
                popupElementLeft = attachElementRect.left - popupElementRect.width;
                break;
            case 'center':
            default:
                popupElementTop = (containerRect.height - popupElementRect.height) / 2;
                popupElementLeft = (containerRect.width - popupElementRect.width) / 2;
                break;
        }
    }
</script>

{#if visible}
    <div
        class="popup {$$props.class || ''}"
        bind:this={popupElement}
        transition:transition={transitionParams}
        style="top: {popupElementTop}px; left: {popupElementLeft}px"
    >
        <slot/>
    </div>
{/if}

<style>
    .popup {
        position: absolute;
    }

    .popup._full-width {
        width: 100%;
    }
</style>
