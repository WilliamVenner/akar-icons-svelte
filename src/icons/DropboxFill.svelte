<script>
  import DropboxFill from '../svg-clean/dropbox-fill.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<DropboxFill
  class={`icon ${_class || ''}`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>