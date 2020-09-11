<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${this.iconClass}`" />
    </svg>
</template>

<script>
export default {
    name: 'icon-svg',
    props: {
        iconClass: {
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
