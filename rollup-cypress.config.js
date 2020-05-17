import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


export default {
    plugins: [
        svelte({
            dev: true,
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
    ],
};
