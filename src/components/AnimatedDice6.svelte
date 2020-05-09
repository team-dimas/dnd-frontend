<script>
    import Dice6Svg from './svg/Dice6Svg.svelte';
    import { writable } from 'svelte/store';

    const ANIMATION_SEQUENCE_LENGTH = 10;
    const ANIMATION_TICK_TIME = 100;

    let timeoutId;
    let diceValue = writable(6);

    function generateDiceNumber() {
        return Math.floor(Math.random() * 6 + 1);
    }

    export function animate() {
        const startSequence = Array.from(Array(ANIMATION_SEQUENCE_LENGTH), () => generateDiceNumber());

        clearTimeout(timeoutId);
        (function tickAnimation(animationSequence) {
            if (animationSequence.length > 0) {
                const [currentValue, ...restSequence] = animationSequence
                diceValue.set(currentValue);
                timeoutId = setTimeout(() => tickAnimation(restSequence), ANIMATION_TICK_TIME);
            }
        })(startSequence)
    }
</script>

<Dice6Svg {...$$props} value={$diceValue}/>
