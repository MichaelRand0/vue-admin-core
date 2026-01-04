<script setup lang="ts">
import type { TextProps } from './types';


const props = withDefaults(defineProps<TextProps>(), {
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
.text {

    transition: .05s ease-in-out all;

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
        color: $color-brand;
    }
}
</style>
