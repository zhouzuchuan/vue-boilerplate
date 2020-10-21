```vue
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${this.name}`" />
  </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
```
