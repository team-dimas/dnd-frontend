<script>
	import Home from './Home.svelte';
	import AnimatedDice6, {animate} from './AnimatedDice6.svelte';
</script>

<!--<Home/>-->

<AnimatedDice6 height="24" width="24"/>

<button on:click={animate}> Spin!</button>
