<script setup lang="ts">
import type { TextProps } from './types';


const props = withDefaults(defineProps<TextProps>(), {
    font: "Roboto-400",
    size: "16",
    tag: "span",
})
</script>

<template>
    <component :style="colorPreset ? {} : { color }"
        :class="[`text`, `text_${font.toLowerCase()}`, `text_${size}`, colorPreset ? `text_${colorPreset}` : ``, className ? `${className}` : ``, hover ? `text_hover` : ``]"
        :is="tag">
        <slot />
    </component>
</template>

<style lang="scss" scoped>
@use 'sass:list';

.text {
    transition: .05s ease-in-out all;

    $sizes: (
        "44": (21, 44),
        "21": (16, 21),
        "16": (14, 16),
        "14": (12, 14),
        "12": (10, 12)
    );

@each $name, $values in $sizes {
    &_#{$name} {
        font-size: ad-clamp(list.nth($values, 1), list.nth($values, 2));
    }
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

&_link {
    color: $color-brand-light;
}

&_hover {
    pointer-events: all;

    &.text_primary,
    &.text_link {
        &:hover {
            color: white;
        }
    }
}
}
</style>
