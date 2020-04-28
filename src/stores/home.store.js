import BookSvg from '../components/svg/BookSvg.svelte';
import SwordsSvg from '../components/svg/SwordsSvg.svelte';
import { readable } from 'svelte/store';

export const homeButtons = readable([
    {
        icon: SwordsSvg,
        text: 'Join game',
        class: 'join'
    },
    {
        icon: BookSvg,
        text: 'Host game',
        class: 'host'
    }
]);
