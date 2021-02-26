<script>
  import CircleTriangleDown from '../svg/circle-triangle-down.svg';
  export let size = "24";
  export let color = "currentColor";
  export let strokeWidth = "2";
  export let strokeLinecap="round";
  export let strokeLinejoin="round";
</script>

<CircleTriangleDown
fill="none"
width={size} height={size}
stroke={color}
stroke-width={strokeWidth}
stroke-linecap={strokeLinecap}
stroke-linejoin={strokeLinejoin}
{...$$props}/>