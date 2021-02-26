<script>
  import Plane from '../svg/plane.svg';
  export let size = "24";
  export let color = "currentColor";
  export let strokeWidth = "2";
  export let strokeLinecap="round";
  export let strokeLinejoin="round";
</script>

<Plane
fill="none"
width={size} height={size}
stroke={color}
stroke-width={strokeWidth}
stroke-linecap={strokeLinecap}
stroke-linejoin={strokeLinejoin}
{...$$props}/>