<script>
  import CircleFill from '../svg-clean/circle-fill.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<CircleFill
  class={`icon ${_class || ''}`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>