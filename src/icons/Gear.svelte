<script>
  import Gear from '../svg-clean/gear.svg';
  export let size = null;
  export let color = "currentColor";
  export let strokeWidth = "2";
  export let strokeLinecap="round";
  export let strokeLinejoin="round";

  let _class;
  export { _class as class };
</script>

<Gear
  class={`icon ${_class || ''}`}
  fill="none"
  width={size} height={size}
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap={strokeLinecap}
  stroke-linejoin={strokeLinejoin}
  {...$$props}
/>