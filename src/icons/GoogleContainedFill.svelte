<script>
  import GoogleContainedFill from '../svg-clean/google-contained-fill.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<GoogleContainedFill
  class={`icon ${_class || ''}`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>