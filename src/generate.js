const fs = require('fs');

const RE_CASE_TRANSFORM = /-[a-z]/g;
const RE_ICON_METADATA = /(.+?)(-fill)?\.svg$/;
const RE_SVG_CLEAN = /\s*(?:fill="(?!none).*?"|(?:stroke|stroke-width|stroke-linecap|stroke-linejoin)=".*?")(?:\s*(?=\/>))?/g;

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

fs.rmSync('./src/svg-clean', { recursive: true, force: true });
fs.mkdirSync('./src/svg-clean');

console.log('Generating icon Svelte components...');

const index = fs.createWriteStream('./src/icons.js');

fs.readdir('./src/svg', (err, files) => {
  if (err) throw err;

  files.forEach((file, i) => {
    const [component, svg, filled] = metadata(file);
    console.log(`${component} (${Math.round(i / files.length * 100)}%)`);

    // Clean SVG
    fs.readFile('./src/svg/' + file, (err, svg) => {
      if (err) throw err;
      fs.writeFile('./src/svg-clean/' + file, svg.toString().replace(RE_SVG_CLEAN, ''), noop)
    });

    // Generate ./src/icons/${component}.svelte
    index.write(`export { default as ${component} } from './icons/${component}.svelte';\n`);

    const componentSvelte = filled ?
// FILLED
`<script>
  import ${component} from '../svg-clean/${svg}.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<${component}
  class={\`icon \${_class || ''}\`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>`

:

// STROKED
`<script>
  import ${component} from '../svg-clean/${svg}.svg';
  export let size = null;
  export let color = "currentColor";
  export let strokeWidth = "2";
  export let strokeLinecap="round";
  export let strokeLinejoin="round";

  let _class;
  export { _class as class };
</script>

<${component}
  class={\`icon \${_class || ''}\`}
  fill="none"
  width={size} height={size}
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap={strokeLinecap}
  stroke-linejoin={strokeLinejoin}
  {...$$props}
/>`;

    fs.writeFile(`./src/icons/${component}.svelte`, componentSvelte, noop);
  });

  console.log('100%');
  index.close();
});