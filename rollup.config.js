import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import svelteSVG from "rollup-plugin-svelte-svg";

export default {
	input: 'src/icons.js',
	output: [
        { file: 'dist/index.js', 'format': 'es' }
	],
	plugins: [
		svelte({
			compilerOptions: {
				dev: false
			}
		}),
		css({ output: 'bundle.css' }),
		terser(),
		svelteSVG()
	]
};
