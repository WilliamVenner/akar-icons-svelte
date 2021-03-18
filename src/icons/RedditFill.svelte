<script>
  import RedditFill from '../svg-clean/reddit-fill.svg';
  export let size = null;
  export let color = "currentColor";

  let _class;
  export { _class as class };
</script>

<RedditFill
  class={`icon ${_class || ''}`}
  fill={color}
  width={size} height={size}
  {...$$props}
/>