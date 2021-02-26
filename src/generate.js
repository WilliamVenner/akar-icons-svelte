const fs = require('fs');

const RE_CASE_TRANSFORM = /-[a-z]/g;
const RE_ICON_METADATA = /(.+?)(-fill)?\.svg$/;

const noop = () => {};
const upper = char => char.substr(1).toUpperCase();
const metadata = file => {
  const metadata = file.match(RE_ICON_METADATA);
  const filled = !!metadata[2];
  return [
    metadata[1].substr(0, 1).toUpperCase()
      + metadata[1].substr(1).replace(RE_CASE_TRANSFORM, upper)
      + (filled ? 'Fill' : ''),
    metadata[1] + (metadata[2] ?? ''),
    filled
  ];
};

console.log('Cleaning previous build...');
fs.rmSync('./src/icons', { recursive: true, force: true });
fs.mkdirSync('./src/icons');

console.log('Generating icon Svelte components...');

const index = fs.createWriteStream('./src/icons.js');

fs.readdir('./src/svg', (err, files) => {
  if (err) throw err;
  files.forEach((file, i) => {
    const [component, svg, filled] = metadata(file);
    console.log(`${component} (${Math.round(i / files.length * 100)}%)`);

    index.write(`export { default as ${component} } from './icons/${component}.svelte';\n`);

    const componentSvelte = filled ?

// FILLED
`<script>
  import ${component} from '../svg/${svg}.svg';
  export let size = "24";
  export let color = "currentColor";
</script>

<${component}
  fill={color}
  width={size} height={size}
{...$$props}/>`

:

// STROKED
`<script>
  import ${component} from '../svg/${svg}.svg';
  export let size = "24";
  export let color = "currentColor";
  export let strokeWidth = "2";
  export let strokeLinecap="round";
  export let strokeLinejoin="round";
</script>

<${component}
fill="none"
width={size} height={size}
stroke={color}
stroke-width={strokeWidth}
stroke-linecap={strokeLinecap}
stroke-linejoin={strokeLinejoin}
{...$$props}/>`;

    fs.writeFile(`./src/icons/${component}.svelte`, componentSvelte, noop);
  });

  console.log('100%');
  index.close();
});