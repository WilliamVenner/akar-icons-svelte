![npm](https://img.shields.io/npm/v/akar-icons?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/akar-icons?style=for-the-badge)

<a href="https://akaricons.com" target="_blank">
  <img alt="akar icons" src="https://repository-images.githubusercontent.com/306119910/c3a57000-2be0-11eb-88a2-2714f9bafcd4">
</a>

# Akar Icons (Svelte)
A perfectly rounded icon library made for designers, developers, and pretty much everyone.

---

## For Designers
Explore all icons at [akaricons.com](https://akaricons.com). Simply click the icon you'd like to use and paste it to your favorite application (Figma, Sketch, XD).

---

## For developers
Akar icons are currently available as individual React components. Start using it today.

### 1. Installation
Install with npm:

```shell
npm install --save akar-icons-svelte
```

### 2. Usage
Import the icons you need into your Svelte project and use them in components:

```html
<script>
  import { ArrowRight, Star, LinkOut } from 'akar-icons-svelte';
</script>

<main>
  <ArrowRight />
  <Star />
  <LinkOut />
</main>
```

Icons can be configured with inline props including inline ```style``` objects:

```html
<Star color="yellow" size={32} strokeWidth={3} />
```

You can also import the whole icon library:
```html
<script>
  import * as Icon from 'akar-icons-svelte';
</script>

<main>
  <Icon.ArrowRight />
</main>
```

Explore all icons at [akaricons.com](https://akaricons.com).

## Author
Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))

## License
[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa.

## Credits
Svelte Support by [WilliamVenner](https://github.com/WilliamVenner)
