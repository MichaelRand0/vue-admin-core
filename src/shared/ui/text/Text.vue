<script setup lang="ts">

const props = withDefaults(defineProps<{
    tag: "div" | "span" | "p",
    size: "44" | "21" | "16" | "14" | "12",
    colorPreset?: "primary",
    color?: string,
    className?: string,
    font: "Roboto-400" | "Roboto-500" | "Roboto-700"
}>(), {
    font: "Roboto-400",
    size: "16",
    tag: "div",
})
</script>

<template>
    <component :style="colorPreset ? {} : { color }"
        :class="[`text`, `text_${font.toLowerCase()}`, `text_${size}`, colorPreset ? `text_${colorPreset}` : ``, className ? `${className}` : ``]"
        :is="tag">
        <slot />
    </component>
</template>

<style lang="scss" scoped>
@use "@styles/variables.scss" as *;

.text {

    &_44 {
        font-size: ad-clamp(21, 44);
    }

    &_21 {
        font-size: ad-clamp(16, 21);
    }

    &_16 {
        font-size: ad-clamp(14, 16);
    }

    &_14 {
        font-size: ad-clamp(12, 14);
    }

    &_12 {
        font-size: ad-clamp(10, 12);
    }

    &_roboto-400 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    &_roboto-500 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    &_roboto-600 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }

    &_primary {
        color: $color-brand-dark;
    }
}
</style>
