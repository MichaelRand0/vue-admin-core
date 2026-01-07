<script setup lang="ts">
import { Button, type ButtonProps } from 'ant-design-vue';

defineOptions({
    inheritAttrs: false,
})

interface Props extends ButtonProps {
    variant?: "square"
    defaultValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'square'
})

const modelValue = defineModel<boolean>({ default: false });

const toggle = () => {
    modelValue.value = !modelValue.value;
}
</script>

<template>
    <Button type="text" v-on:click="toggle"
        :class="[`buttonCheckbox`, variant ? `buttonCheckbox_${variant}` : ``, { 'buttonCheckbox_active': modelValue }]"
        v-bind="{ ...$attrs }">
        <div class="buttonCheckbox__figure"></div>
        <slot />
    </Button>
</template>

<style lang="scss" scoped>
.buttonCheckbox {
    display: flex;
    align-items: center;
    gap: ad-clamp(4, 8);
    background: transparent;
    border: none;
    padding: 0;
    color: white;
    white-space: normal;
    text-align: start;

    * {
        width: 100%;
    }

    &:hover {
        color: white;
    }

    &__figure {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        width: ad-clamp(18, 20);
        height: ad-clamp(18, 20);
        border-radius: 4px;

        &::after {
            content: "";
            width: 50%;
            height: 50%;
            background: $color-brand;
            border-radius: 2px;
            opacity: 0;
            transition: .1s ease-in-out all;
        }
    }

    &_active {
        .buttonCheckbox__figure {
            &::after {
                opacity: 1;
            }
        }
    }
}
</style>
