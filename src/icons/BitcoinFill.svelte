<script>
  import BitcoinFill from '../svg-clean/bitcoin-fill.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<BitcoinFill
  class={`icon ${_class || ''}`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>