<script setup lang="ts">
import { Button, type ButtonProps } from 'ant-design-vue';

defineOptions({
    inheritAttrs: false,
})

interface MyInputProps extends ButtonProps {
    variant?: "only-text" | "default"
}

const props = withDefaults(defineProps<MyInputProps>(), {
    variant: 'default'
})
</script>

<template>
    <Button :class="[`button`, variant ? `button_${variant}` : ``]" v-bind="{ ...$attrs }">
        <slot />
    </Button>
</template>

<style lang="scss" scoped>
.button {
    font-size: ad-clamp(16, 20);
    color: white;
    height: auto;

    &_default {
        background: $color-brand;
        padding: ad-clamp(6, 9) ad-clamp(11, 15);
        border: 1px solid $color-brand;

        &:hover {
            background: white;
            color: $color-brand;
        }
    }

    &_only-text {
        background: transparent;
        border: none;
        padding: 0;

        &:hover {
            color: $color-brand;
        }
    }
}
</style>
